import { NodeConfiguration } from "../utils/public";
import { buildRequestUrl } from "../utils/internal";
import { call } from "../utils/internal";

export const getPendingBalance = async (
    nodeConfiguration: NodeConfiguration,
    payload: { address?: string; publicKey?: string },
): Promise<string> => {
    const { address, publicKey } = payload;

    const queryParams: Record<string, number | string> = {
        q: "getPendingBalance",
    };

    if (!publicKey && !address) {
        throw new Error("At least one account identifier must be provided.");
    }

    if (publicKey) {
        queryParams.public_key = publicKey;
    } else if (address) {
        queryParams.account = address;
    }

    const url = buildRequestUrl(nodeConfiguration.url, "/api.php", queryParams);

    return await call<string>({ url });
};
