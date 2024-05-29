import { NodeConfiguration } from "../utils/public";
import { buildRequestUrl, call } from "../utils/internal";

export const checkAddress = async (
    nodeConfiguration: NodeConfiguration,
    payload: { address: string; publicKey?: string },
): Promise<boolean> => {
    const { address, publicKey } = payload;

    const queryParams: Record<string, number | string> = {
        q: "checkAddress",
        account: address,
    };

    if (publicKey) {
        queryParams.public_key = publicKey;
    }

    const url = buildRequestUrl(nodeConfiguration.url, "/api.php", queryParams);

    return await call<boolean>({ url });
};
