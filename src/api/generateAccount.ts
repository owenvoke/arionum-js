import { NodeConfiguration } from "../utils/public";
import { buildRequestUrl } from "../utils/internal";
import { call } from "../utils/internal";
import { AccountKeypair, accountKeypairFromApi } from "./models";

export const generateAccount = async (
    nodeConfiguration: NodeConfiguration,
): Promise<AccountKeypair> => {
    const queryParams: Record<string, number | string> = {
        q: "generateAccount",
    };

    const url = buildRequestUrl(nodeConfiguration.url, "/api.php", queryParams);

    return accountKeypairFromApi(await call<any>({ url }));
};
