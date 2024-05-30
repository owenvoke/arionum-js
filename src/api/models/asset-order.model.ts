export type AssetOrderType = "bid";

export interface AssetOrder {
    id: string;
    address: string;
    asset: string;
    price: number;
    date: number;
    status: boolean;
    type: AssetOrderType;
    value: number;
    valueDone: number;
    cancelable: boolean;
}

export const assetOrderFromApi = (data: any): AssetOrder => {
    return {
        id: data.id,
        address: data.account,
        asset: data.asset,
        price: data.price,
        date: data.date,
        status: data.status,
        type: data.type,
        value: data.val,
        valueDone: data.val_done,
        cancelable: data.cancelable,
    };
};
