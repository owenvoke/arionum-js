import { NodeConfiguration } from "../utils/public";
import { buildRequestUrl } from "../utils/internal";
import { call } from "../utils/internal";
import { NodeInfo, nodeInfoFromApi } from "./models";

export const getNodeInfo = async (
    nodeConfiguration: NodeConfiguration,
): Promise<NodeInfo> => {
    const queryParams: Record<string, number | string> = {
        q: "node-info",
    };

    const url = buildRequestUrl(nodeConfiguration.url, "/api.php", queryParams);

    return nodeInfoFromApi(await call<any>({ url }));
};
