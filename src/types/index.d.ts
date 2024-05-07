import { Address } from "@planetarium/account";

interface Window {
  chronoWallet: {
    sign(signer: string, action: string): Promise<string>;
    signTx(signer: string, unsignedTx: string): Promise<string>;
    listAccounts(): Promise<
      {
        activated: boolean;
        address: string;
      }[]
    >;
    getPublicKey(address: string): Promise<stirng>;
  };
}

export interface Account {
  activated: boolean;
  address: Address;
}

export interface AccountContextType {
  account: Account | undefined;
  setAccount: (account: Account) => void;
}
