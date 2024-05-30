import { NodeConfiguration } from "../utils/public";
import { buildRequestUrl } from "../utils/internal";
import { call } from "../utils/internal";
import { Asset, assetFromApi } from "./models";

export const getAssets = async (
    nodeConfiguration: NodeConfiguration,
    payload: { asset?: string },
): Promise<Array<Asset>> => {
    const { asset } = payload;

    const queryParams: Record<string, number | string> = {
        q: "assets",
    };

    if (asset) {
        queryParams.asset = asset;
    }

    const url = buildRequestUrl(nodeConfiguration.url, "/api.php", queryParams);

    return (await call<Array<any>>({ url })).map((data: any) =>
        assetFromApi(data),
    );
};
