import { NodeConfiguration } from "../utils/public";
import { buildRequestUrl } from "../utils/internal";
import { call } from "../utils/internal";

export const getAddress = async (
    nodeConfiguration: NodeConfiguration,
    payload: { publicKey: string },
): Promise<string> => {
    const { publicKey } = payload;

    const queryParams: Record<string, number | string> = {
        q: "getAddress",
        public_key: publicKey,
    };

    const url = buildRequestUrl(nodeConfiguration.url, "/api.php", queryParams);

    return await call<string>({ url });
};
