import { NodeConfiguration } from "../utils/public";
import { buildRequestUrl } from "../utils/internal";
import { call } from "../utils/internal";
import { Masternode, masternodesFromApi } from "./models";

export const getMasternodes = async (
    nodeConfiguration: NodeConfiguration,
    payload: { id: string },
): Promise<Array<Masternode>> => {
    const { id } = payload;

    const queryParams: Record<string, number | string> = {
        q: "masternodes",
        transaction: id,
    };

    const url = buildRequestUrl(nodeConfiguration.url, "/api.php", queryParams);

    return masternodesFromApi(await call<Array<any>>({ url }));
};
