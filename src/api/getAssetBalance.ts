import { NodeConfiguration } from "../utils/public";
import { buildRequestUrl } from "../utils/internal";
import { call } from "../utils/internal";
import { AssetBalance, assetBalanceFromApi } from "./models";

export const getAssetBalance = async (
    nodeConfiguration: NodeConfiguration,
    payload: { address?: string; asset?: string; publicKey?: string },
): Promise<Array<AssetBalance>> => {
    const { address, asset, publicKey } = payload;

    const queryParams: Record<string, number | string> = {
        q: "asset-orders",
    };

    if (publicKey) {
        queryParams.public_key = publicKey;
    }

    if (address) {
        queryParams.account = address;
    }

    if (asset) {
        queryParams.asset = asset;
    }

    const url = buildRequestUrl(nodeConfiguration.url, "/api.php", queryParams);

    return (await call<Array<any>>({ url })).map((data: any) =>
        assetBalanceFromApi(data),
    );
};
