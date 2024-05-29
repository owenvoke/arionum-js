import { NodeConfiguration } from "../utils/public";
import { buildRequestUrl } from "../utils/internal";
import { call } from "../utils/internal";

/** Convert a string to Base58. */
export const getBase58 = async (
    nodeConfiguration: NodeConfiguration,
    payload: { data: string },
): Promise<string> => {
    const { data } = payload;

    const queryParams: Record<string, number | string> = {
        q: "base58",
        data: data,
    };

    const url = buildRequestUrl(nodeConfiguration.url, "/api.php", queryParams);

    return await call<string>({ url });
};
