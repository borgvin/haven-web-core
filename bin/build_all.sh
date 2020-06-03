#!/bin/sh

# check for emscripten
[ -z ${EMSDK} ] \
  && {
    echo "Missing EMSDK Environment variable.  Did you remember to run 'source /path/to/emsdk/emsdk_env.sh' ?"
    [ "$(basename $0)" = "bash" ] \
    || { 
      echo "Terminating..."
      exit 1
    }
  }

# build monero-core translations directory
cd ./external/monero-cpp/external/monero-core || exit 1
git submodule update --init --force || exit 1
git checkout master
make release-static -j8		# don't exit because this will build translations directory even if build fails
cd ../../../../ || exit 1

# checkout monero-cpp master branch
git --git-dir ./external/monero-cpp/.git checkout master || exit 1

# build boost
./bin/build_boost_emscripten.sh || exit 1

# build openssl
./bin/build_openssl_emscripten.sh || exit 1

# build webassembly for distribution
./bin/build_wasm_emscripten.sh || exit 1

# build web worker
npm install || exit 1
./bin/build_web_worker.sh || exit 1

# build browser tests
./bin/build_browser_tests.sh || exit 1