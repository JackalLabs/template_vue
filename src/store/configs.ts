export const mainnetChainID = 'jackal-1'
export const mainnet = {
  chainConfig: {
    chainId: mainnetChainID,
    chainName: 'Jackal Main Net',
    rpc: 'https://internalrpc.jackalprotocol.com',
    rest: 'https://internalapi.jackalprotocol.com',
    bip44: {
      coinType: 118,
    },
    stakeCurrency: {
      coinDenom: 'JKL',
      coinMinimalDenom: 'ujkl',
      coinDecimals: 6,
    },
    bech32Config: {
      bech32PrefixAccAddr: 'jkl',
      bech32PrefixAccPub: 'jklpub',
      bech32PrefixValAddr: 'jklvaloper',
      bech32PrefixValPub: 'jklvaloperpub',
      bech32PrefixConsAddr: 'jklvalcons',
      bech32PrefixConsPub: 'jklvalconspub',
    },
    currencies: [
      {
        coinDenom: 'JKL',
        coinMinimalDenom: 'ujkl',
        coinDecimals: 6,
      },
    ],
    feeCurrencies: [
      {
        coinDenom: 'JKL',
        coinMinimalDenom: 'ujkl',
        coinDecimals: 6,
        gasPriceStep: {
          low: 0.002,
          average: 0.002,
          high: 0.02,
        },
      },
    ],
    features: [],
  },
  chainId: mainnetChainID,
  endpoint: 'https://internalrpc.jackalprotocol.com',
  options: {},
  networks: ['jackal'],
}


export const testnetChainID = 'lupulella-2'
export const testnet = {
  chainConfig: {
    chainId: testnetChainID,
    chainName: 'Jackal Testnet',
    rpc: 'https://testnet-rpc.jackalprotocol.com',
    rest: 'https://testnet-api.jackalprotocol.com',
    bip44: {
      coinType: 118
    },
    stakeCurrency: {
      coinDenom: 'JKL',
      coinMinimalDenom: 'ujkl',
      coinDecimals: 6
    },
    bech32Config: {
      bech32PrefixAccAddr: 'jkl',
      bech32PrefixAccPub: 'jklpub',
      bech32PrefixValAddr: 'jklvaloper',
      bech32PrefixValPub: 'jklvaloperpub',
      bech32PrefixConsAddr: 'jklvalcons',
      bech32PrefixConsPub: 'jklvalconspub'
    },
    currencies: [
      {
        coinDenom: 'JKL',
        coinMinimalDenom: 'ujkl',
        coinDecimals: 6
      }
    ],
    feeCurrencies: [
      {
        coinDenom: 'JKL',
        coinMinimalDenom: 'ujkl',
        coinDecimals: 6,
        gasPriceStep: {
          low: 0.002,
          average: 0.002,
          high: 0.02
        }
      }
    ],
    features: []
  },
  chainId: testnetChainID,
  endpoint: 'https://testnet-rpc.jackalprotocol.com',
  options: {},
  networks: ['jackaltest']
}
