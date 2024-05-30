import { NodeConfiguration } from "../utils/public";
import { buildRequestUrl } from "../utils/internal";
import { call } from "../utils/internal";
import { Transaction, transactionFromApi } from "./models";

export const getBlockTransactions = async (
    nodeConfiguration: NodeConfiguration,
    payload: {
        height?: number;
        blockId?: string;
        includeMiningRewards?: boolean;
    },
): Promise<Array<Transaction>> => {
    const { height, blockId, includeMiningRewards } = payload;

    const queryParams: Record<string, number | string> = {
        q: "getBlockTransactions",
    };

    if (height) {
        queryParams.height = height;
    }

    if (blockId) {
        queryParams.block = blockId;
    }

    if (includeMiningRewards) {
        queryParams.includeMiningRewards = "true";
    }

    const url = buildRequestUrl(nodeConfiguration.url, "/api.php", queryParams);

    return (await call<Array<any>>({ url })).map((data: any) =>
        transactionFromApi(data),
    );
};
