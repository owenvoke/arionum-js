export interface AssetBalance {
    asset: string;
    alias: string;
    address: string;
    balance: number;
}

export const assetBalanceFromApi = (data: any): AssetBalance => {
    return {
        asset: data.asset,
        alias: data.alias,
        address: data.account,
        balance: data.balance,
    };
};
