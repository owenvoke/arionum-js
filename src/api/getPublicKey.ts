import { NodeConfiguration } from "../utils/public";
import { buildRequestUrl } from "../utils/internal";
import { call } from "../utils/internal";

export const getPublicKey = async (
    nodeConfiguration: NodeConfiguration,
    payload: { address: string },
): Promise<string> => {
    const { address } = payload;

    const queryParams: Record<string, number | string> = {
        q: "getPublicKey",
        account: address,
    };

    const url = buildRequestUrl(nodeConfiguration.url, "/api.php", queryParams);

    return await call<string>({ url });
};
