import { NodeConfiguration } from "../utils/public";
import { buildRequestUrl } from "../utils/internal";
import { call } from "../utils/internal";
import { Sanity, sanityFromApi } from "./models";

export const getNodeSanityInfo = async (
    nodeConfiguration: NodeConfiguration,
): Promise<Sanity> => {
    const queryParams: Record<string, number | string> = {
        q: "sanity",
    };

    const url = buildRequestUrl(nodeConfiguration.url, "/api.php", queryParams);

    return sanityFromApi(await call<any>({ url }));
};
