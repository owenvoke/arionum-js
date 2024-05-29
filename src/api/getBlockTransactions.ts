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

    if (!height && !blockId) {
        throw new Error("At least one block identifier must be provided.");
    }

    if (height) {
        queryParams.height = height;
    } else if (blockId) {
        queryParams.block = blockId;
    }

    if (includeMiningRewards) {
        queryParams.includeMiningRewards = "true";
    }

    const url = buildRequestUrl(nodeConfiguration.url, "/api.php", queryParams);

    return (await call<Array<any>>({ url })).map((transaction: any) =>
        transactionFromApi(transaction),
    );
};
