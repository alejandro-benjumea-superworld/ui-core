export enum WalletType {
  Coinbase = 'coinbase',
  CoinbaseApp = 'coinbase_app',
  Fortmatic = 'fortmatic',
  Metamask = 'metamask',
  Portis = 'portis',
  Trust = 'trust',
  TrustApp = 'trust_app',
  Venly = 'venly',
  WalletConnect = 'wallet_connect',

  // disabled wallets
  Ledger = 'ledger',
  Phantom = 'phantom',
  Solana = 'solana',
  Solflare = 'solflare',
  Sollet = 'sollet',
}

export enum LocalStorageKey {
  Contract = 'web3:contract',
  ContractAddress = 'web3:contractAddress',
  CurrentUser = 'web3:currentUser',
  NetworkId = 'web3:networkId',
  WalletAddress = 'web3:walletAddress',
  WalletTimestamp = 'web3:walletTimestamp',
  WalletType = 'web3:walletType',
}

export enum CookiesKey {
  UserId = 'userId',
  Session = 'session',
}
