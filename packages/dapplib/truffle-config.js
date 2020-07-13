require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture globe frown ski strike rival sad evil gloom praise army gauge'; 
let testAccounts = [
"0x5d830a78252de2e7387bbf8b78d9270589fc22ccdd3e957b970c7f6622bdfb88",
"0xfae5d93f93dd6cfe4879f8c2796f8ffa930a3222caffd4ab42fe0c32e9d4e631",
"0x8c8ec1c0ae7b38142b71639c290413949ae334e754c47eb677b1e452be2ae811",
"0x0d12b3bf96689d18018b96d7557f0da84f467880b3add4b284b4ae6e217c419a",
"0x0fa60dc7f61177214efdf44a841efd498b05923757c2304b02616fa68433e194",
"0xa78586bfbeeca0d926d7490f8d58499996537845f974e16790cec96e9c3cdc83",
"0x3e1d2104d810ffb2d778653131c04a439ffeef6adf5408687f95f17433970a16",
"0x2694a498bae35a99222e3ad89c1f5bad144daf025e53f064aa54c14c5b897b0c",
"0x3063e44d684fb009930dbce268a0f34dfb1c461a65858c8a4fa6081925a14245",
"0x199a7be16fd66dc3b1a38d0a06774175c565d546bbc2082d12fa41112f05f0cf"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
