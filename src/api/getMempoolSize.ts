import { NodeConfiguration } from "../utils/public";
import { buildRequestUrl } from "../utils/internal";
import { call } from "../utils/internal";

export const getMempoolSize = async (
    nodeConfiguration: NodeConfiguration,
): Promise<number> => {
    const queryParams: Record<string, number | string> = {
        q: "mempoolSize",
    };

    const url = buildRequestUrl(nodeConfiguration.url, "/api.php", queryParams);

    return await call<number>({ url });
};
