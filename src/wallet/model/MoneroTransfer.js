const assert = require("assert");
const BigInteger = require("../../submodules/mymonero-core-js/cryptonote_utils/biginteger").BigInteger;
const MoneroUtils = require("../../utils/MoneroUtils");

/**
 * Represents a directional transfer of funds from or to a wallet.
 */
class MoneroTransfer {
  
  /**
   * Constructs the model.
   * 
   * @param jsonOrAddress is JSON to construct the model or an address (optional)
   */
  constructor(jsonOrAddress, amount) {
    if (jsonOrAddress === undefined || typeof jsonOrAddress === "string") {
      this.state = {};
      this.setAddress(jsonOrAddress);
      this.setAmount(amount);
    } else {
      
      // deserialize json
      let json = jsonOrAddress;
      this.state = Object.assign({}, json);
      if (json.amount) this.setAmount(BigInteger.parse(json.amount));
      if (json.destinations) {
        let destinations = [];
        for (let jsonDestination of json.destinations) destinations.push(new MoneroTransfer(jsonDestination));
        this.setDestinations(destinations);
      }
    }
  }
  
  getAddress() {
    return this.state.address;
  }

  setAddress(address) {
    this.state.address = address;
  }

  getAccountIndex() {
    return this.state.accountIndex;
  }

  setAccountIndex(accountIndex) {
    this.state.accountIndex = accountIndex;
  }

  getSubaddressIndex() {
    return this.state.subaddressIndex;
  }

  setSubaddressIndex(subaddressIndex) {
    this.state.subaddressIndex = subaddressIndex;
  }

  getAmount() {
    return this.state.amount;
  }

  setAmount(amount) {
    this.state.amount = amount;
  }
  
  getDestinations() {
    return this.state.destinations;
  }
  
  setDestinations(destinations) {
    this.state.destinations = destinations;
  }
  
  copy() {
    return new MoneroTransfer(this.toJson());
  }
  
  toJson() {
    let json = Object.assign({}, this.state);
    if (this.getAmount()) json.amount = this.getAmount().toString()
    return json;
  }

  /**
   * Merges the given transfer into this transfer.
   * 
   * Sets uninitialized fields to the given payent. Validates initialized fields are equal.
   * 
   * @param transfer is the transfer to merge into this one
   */
  merge(transfer) {
    assert(transfer instanceof MoneroTransfer);
    this.setAddress(MoneroUtils.reconcile(this.getAddress(), transfer.getAddress()));
    this.setAccountIndex(MoneroUtils.reconcile(this.getAccountIndex(), transfer.getAccountIndex()));
    this.setSubaddressIndex(MoneroUtils.reconcile(this.getSubaddressIndex(), transfer.getSubaddressIndex()));
    this.setAmount(MoneroUtils.reconcile(this.getAmount(), transfer.getAmount()));
    
    // merge destinations
    if (this.getDestinations() === undefined) this.setDestinations(transfer.getDestinations());
    else if (transfer.getDestinations()) {
      assert.deepEqual(this.getDestinations(), transfer.getDestinations(), "Cannot merge transfer because destinations are different");
    }
  }
  
  toString(indent = 0) {
    let str = "";
    str += MoneroUtils.kvLine("Address", this.getAddress(), indent);
    str += MoneroUtils.kvLine("Account index", this.getAccountIndex(), indent);
    str += MoneroUtils.kvLine("Subaddress index", this.getSubaddressIndex(), indent);
    str += MoneroUtils.kvLine("Amount", this.getAmount() ? this.getAmount().toString() : undefined, indent);
    if (this.getDestinations()) {
      str += MoneroUtils.kvLine("Destinations", "", indent);
      for (let i = 0; i < this.getDestinations().length; i++) {
        str += MoneroUtils.kvLine(i + 1, "", indent + 1);
        str += this.getDestinations()[i].toString(indent + 2) + "\n";
        //if (i < this.getDestinations().length - 1) str += '\n'  // TODO: why would this be necessary?
      }
    }
    return str.slice(0, str.length - 1);  // strip last newline
  }
}

module.exports = MoneroTransfer;