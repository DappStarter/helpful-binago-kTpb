require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half clock bright smooth fine birth meadow column gesture derive slot genius'; 
let testAccounts = [
"0xc432847fccaa8c327117e4e22c8b0b166a134eadd23f80c6927221258ea2f9d6",
"0x152068b29689d52ef00ee75d9f955bed3cc520e8453f9b521646a85dd752cc55",
"0x4a5670c26d4e31b1b9cafc433ec4ec21efd85a1539c30ca1d21dd0106cef0579",
"0x9a49feefd39cac3f03f8a4698410bc35556a6eda20ad5d1f06d3579a85dfe5c0",
"0x41871bb6042cefef687e346de3704cdc69ff12afec373a5102e1a1e2ca579576",
"0xf9c39afd507e160724be6e219050ee1192830ff05f4e6423a756f4b980e743da",
"0xe36e81b789cf285229928e2d24d6aef0c96375160c19f7646f666a5f446a6261",
"0xa3fbc16d687bbffe0c0643142cd0695e3f1e32da9673fa1b7f86f2f92d32b155",
"0x15670667df47cd22fb52941c2c1f001857bf93d119d239aebafaf0051a328d02",
"0xe2f3d1fe0171e7d9e7bdf8795850103bc427426aa84dff97768007445f038713"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


