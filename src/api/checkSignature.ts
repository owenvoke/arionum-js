import { NodeConfiguration } from "../utils/public";
import { buildRequestUrl } from "../utils/internal";
import { call } from "../utils/internal";

export const checkSignature = async (
    nodeConfiguration: NodeConfiguration,
    payload: { data: string; signature: string; publicKey: string },
): Promise<boolean> => {
    const { data, signature, publicKey } = payload;

    const queryParams: Record<string, number | string> = {
        q: "checkSignature",
        data: data,
        signature: signature,
        public_key: publicKey,
    };

    const url = buildRequestUrl(nodeConfiguration.url, "/api.php", queryParams);

    return await call<boolean>({ url });
};
