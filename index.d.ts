export var GenUtils: typeof import("./src/main/js/common/GenUtils");
export var BigInteger: typeof import("./src/main/js/common/biginteger");
export var Filter: typeof import("./src/main/js/common/Filter");
export var MoneroError: typeof import("./src/main/js/common/MoneroError");
export var HttpClient: typeof import("./src/main/js/common/HttpClient");
export var LibraryUtils: typeof import("./src/main/js/common/LibraryUtils");
export var MoneroRpcConnection: typeof import("./src/main/js/common/MoneroRpcConnection");
export var MoneroRpcError: typeof import("./src/main/js/common/MoneroRpcError");
export var SslOptions: typeof import("./src/main/js/common/SslOptions");
export var ConnectionType: typeof import("./src/main/js/daemon/model/ConnectionType");
export var MoneroAltChain: typeof import("./src/main/js/daemon/model/MoneroAltChain");
export var MoneroBan: typeof import("./src/main/js/daemon/model/MoneroBan");
export var MoneroBlockHeader: typeof import("./src/main/js/daemon/model/MoneroBlockHeader");
export var MoneroBlock: typeof import("./src/main/js/daemon/model/MoneroBlock");
export var MoneroBlockTemplate: typeof import("./src/main/js/daemon/model/MoneroBlockTemplate");
export var MoneroDaemonConnection: typeof import("./src/main/js/daemon/model/MoneroDaemonConnection");
export var MoneroDaemonConnectionSpan: typeof import("./src/main/js/daemon/model/MoneroDaemonConnectionSpan");
export var MoneroDaemonInfo: typeof import("./src/main/js/daemon/model/MoneroDaemonInfo");
export var MoneroDaemonPeer: typeof import("./src/main/js/daemon/model/MoneroDaemonPeer");
export var MoneroDaemonSyncInfo: typeof import("./src/main/js/daemon/model/MoneroDaemonSyncInfo");
export var MoneroDaemonUpdateCheckResult: typeof import("./src/main/js/daemon/model/MoneroDaemonUpdateCheckResult");
export var MoneroDaemonUpdateDownloadResult: typeof import("./src/main/js/daemon/model/MoneroDaemonUpdateDownloadResult");
export var MoneroHardForkInfo: typeof import("./src/main/js/daemon/model/MoneroHardForkInfo");
export var MoneroKeyImage: typeof import("./src/main/js/daemon/model/MoneroKeyImage");
export var MoneroKeyImageSpentStatus: typeof import("./src/main/js/daemon/model/MoneroKeyImageSpentStatus");
export var MoneroMinerTxSum: typeof import("./src/main/js/daemon/model/MoneroMinerTxSum");
export var MoneroMiningStatus: typeof import("./src/main/js/daemon/model/MoneroMiningStatus");
export var MoneroNetworkType: typeof import("./src/main/js/daemon/model/MoneroNetworkType");
export var MoneroOutput: typeof import("./src/main/js/daemon/model/MoneroOutput");
export var MoneroOutputHistogramEntry: typeof import("./src/main/js/daemon/model/MoneroOutputHistogramEntry");
export var MoneroSubmitTxResult: typeof import("./src/main/js/daemon/model/MoneroSubmitTxResult");
export var MoneroTx: typeof import("./src/main/js/daemon/model/MoneroTx");
export var MoneroTxPoolStats: typeof import("./src/main/js/daemon/model/MoneroTxPoolStats");
export var MoneroVersion: typeof import("./src/main/js/daemon/model/MoneroVersion");
export var MoneroAccount: typeof import("./src/main/js/wallet/model/MoneroAccount");
export var MoneroAccountTag: typeof import("./src/main/js/wallet/model/MoneroAccountTag");
export var MoneroAddressBookEntry: typeof import("./src/main/js/wallet/model/MoneroAddressBookEntry");
export var MoneroCheck: typeof import("./src/main/js/wallet/model/MoneroCheck");
export var MoneroCheckReserve: typeof import("./src/main/js/wallet/model/MoneroCheckReserve");
export var MoneroCheckTx: typeof import("./src/main/js/wallet/model/MoneroCheckTx");
export var MoneroDestination: typeof import("./src/main/js/wallet/model/MoneroDestination");
export var MoneroIntegratedAddress: typeof import("./src/main/js/wallet/model/MoneroIntegratedAddress");
export var MoneroKeyImageImportResult: typeof import("./src/main/js/wallet/model/MoneroKeyImageImportResult");
export var MoneroMultisigInfo: typeof import("./src/main/js/wallet/model/MoneroMultisigInfo");
export var MoneroMultisigInitResult: typeof import("./src/main/js/wallet/model/MoneroMultisigInitResult");
export var MoneroMultisigSignResult: typeof import("./src/main/js/wallet/model/MoneroMultisigSignResult");
export var MoneroOutputWallet: typeof import("./src/main/js/wallet/model/MoneroOutputWallet");
export var MoneroOutputQuery: typeof import("./src/main/js/wallet/model/MoneroOutputQuery");
export var MoneroTxPriority: typeof import("./src/main/js/wallet/model/MoneroTxPriority");
export var HavenTxType: typeof import("./src/main/js/wallet/model/HavenTxType");
export var MoneroTxConfig: typeof import("./src/main/js/wallet/model/MoneroTxConfig");
export var MoneroSubaddress: typeof import("./src/main/js/wallet/model/MoneroSubaddress");
export var MoneroSyncResult: typeof import("./src/main/js/wallet/model/MoneroSyncResult");
export var MoneroTransfer: typeof import("./src/main/js/wallet/model/MoneroTransfer");
export var MoneroIncomingTransfer: typeof import("./src/main/js/wallet/model/MoneroIncomingTransfer");
export var MoneroOutgoingTransfer: typeof import("./src/main/js/wallet/model/MoneroOutgoingTransfer");
export var MoneroTransferQuery: typeof import("./src/main/js/wallet/model/MoneroTransferQuery");
export var MoneroTxSet: typeof import("./src/main/js/wallet/model/MoneroTxSet");
export var MoneroTxWallet: typeof import("./src/main/js/wallet/model/MoneroTxWallet");
export var MoneroTxQuery: typeof import("./src/main/js/wallet/model/MoneroTxQuery");
export var MoneroWalletListener: typeof import("./src/main/js/wallet/model/MoneroWalletListener");
export var MoneroWalletConfig: typeof import("./src/main/js/wallet/model/MoneroWalletConfig");
export var MoneroUtils: typeof import("./src/main/js/common/MoneroUtils");
export var MoneroDaemon: typeof import("./src/main/js/daemon/MoneroDaemon");
export var MoneroWallet: typeof import("./src/main/js/wallet/MoneroWallet");
export var MoneroDaemonRpc: typeof import("./src/main/js/daemon/MoneroDaemonRpc");
export var MoneroWalletRpc: typeof import("./src/main/js/wallet/MoneroWalletRpc");
export var MoneroWalletKeys: typeof import("./src/main/js/wallet/MoneroWalletKeys");
export var MoneroWalletWasm: typeof import("./src/main/js/wallet/MoneroWalletWasm");
export function getVersion(): string;
export function connectToDaemonRpc(...args: {}): any;
export function connectToWalletRpc(...args: {}): any;
export function createWalletWasm(...args: {}): any;
export function openWalletWasm(...args: {}): any;
export function createWalletKeys(...args: {}): any;
