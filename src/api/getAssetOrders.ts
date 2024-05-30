import { NodeConfiguration } from "../utils/public";
import { buildRequestUrl } from "../utils/internal";
import { call } from "../utils/internal";
import { AssetOrder, assetOrderFromApi } from "./models";

export const getAssetOrders = async (
    nodeConfiguration: NodeConfiguration,
    payload: { address?: string; asset?: string },
): Promise<Array<AssetOrder>> => {
    const { address, asset } = payload;

    const queryParams: Record<string, number | string> = {
        q: "asset-orders",
    };

    if (address) {
        queryParams.account = address;
    }

    if (asset) {
        queryParams.asset = asset;
    }

    const url = buildRequestUrl(nodeConfiguration.url, "/api.php", queryParams);

    return (await call<Array<any>>({ url })).map((data: any) =>
        assetOrderFromApi(data),
    );
};
