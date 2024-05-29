import { NodeConfiguration } from "../utils/public";
import { buildRequestUrl } from "../utils/internal";
import { call } from "../utils/internal";
import { AccountKeypair } from "./models";

export const generateAccount = async (
    nodeConfiguration: NodeConfiguration,
): Promise<AccountKeypair> => {
    const queryParams: Record<string, number | string> = {
        q: "generateAccount",
    };

    const url = buildRequestUrl(nodeConfiguration.url, "/api.php", queryParams);

    return await call<AccountKeypair>({ url });
};
