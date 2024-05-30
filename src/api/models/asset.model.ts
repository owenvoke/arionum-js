export interface Asset {
    id: string;
    maxSupply: number;
    tradeable: boolean;
    price: number;
    dividendOnly: boolean;
    autoDividend: boolean;
    allowBids: boolean;
    blockHeight: number;
    alias: string | null;
    balance: number;
}

export const assetFromApi = (data: any): Asset => {
    return {
        id: data.id,
        maxSupply: data.max_supply,
        tradeable: data.tradable,
        price: data.price,
        dividendOnly: data.dividend_only,
        autoDividend: data.auto_dividend,
        allowBids: data.allow_bid,
        blockHeight: data.height,
        alias: data.alias,
        balance: data.balance,
    };
};
