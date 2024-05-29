import { NodeConfiguration } from "../utils/public";
import { buildRequestUrl } from "../utils/internal";
import { call } from "../utils/internal";
import { Block } from "./models";

export const getCurrentBlock = async (
    nodeConfiguration: NodeConfiguration,
): Promise<Block> => {
    const queryParams: Record<string, number | string> = {
        q: "currentBlock",
    };

    const url = buildRequestUrl(nodeConfiguration.url, "/api.php", queryParams);

    return await call<Block>({ url });
};
