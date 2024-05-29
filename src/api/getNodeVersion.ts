import { NodeConfiguration } from "../utils/public";
import { buildRequestUrl } from "../utils/internal";
import { call } from "../utils/internal";

export const getNodeVersion = async (
    nodeConfiguration: NodeConfiguration,
): Promise<string> => {
    const queryParams: Record<string, number | string> = {
        q: "version",
    };

    const url = buildRequestUrl(nodeConfiguration.url, "/api.php", queryParams);

    return await call<string>({ url });
};
