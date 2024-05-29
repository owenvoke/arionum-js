import { NodeConfiguration } from "../utils/public";
import { buildRequestUrl } from "../utils/internal";
import { call } from "../utils/internal";

export const getBalance = async (
    nodeConfiguration: NodeConfiguration,
    payload: { address?: string; alias?: string; publicKey?: string },
): Promise<string> => {
    const { address, alias, publicKey } = payload;

    const queryParams: Record<string, number | string> = {
        q: "getBalance",
    };

    if (!publicKey && !address && !alias) {
        throw new Error("At least one account identifier must be provided.");
    }

    if (publicKey) {
        queryParams.public_key = publicKey;
    } else if (address) {
        queryParams.account = address;
    } else if (alias) {
        queryParams.alias = alias;
    }

    const url = buildRequestUrl(nodeConfiguration.url, "/api.php", queryParams);

    return await call<string>({ url });
};
