import { NodeConfiguration } from "../utils/public";
import { buildRequestUrl } from "../utils/internal";
import { call } from "../utils/internal";
import { Block } from "./models";

export const getBlock = async (
    nodeConfiguration: NodeConfiguration,
    payload: { height: number },
): Promise<Block> => {
    const { height } = payload;

    const queryParams: Record<string, number | string> = {
        q: "getBlock",
        height: height,
    };

    const url = buildRequestUrl(nodeConfiguration.url, "/api.php", queryParams);

    return await call<Block>({ url });
};
