import { NodeConfiguration } from "../utils/public";
import { buildRequestUrl } from "../utils/internal";
import { call } from "../utils/internal";
import { Transaction, transactionFromApi } from "./models";

export const getTransactions = async (
    nodeConfiguration: NodeConfiguration,
    payload: { account?: string; publicKey?: string; limit?: number },
): Promise<Array<Transaction>> => {
    const { account, limit, publicKey } = payload;

    const queryParams: Record<string, number | string> = {
        q: "getTransactions",
    };

    if (!publicKey && !account) {
        throw new Error("At least one account identifier must be provided.");
    }

    if (publicKey) {
        queryParams.public_key = publicKey;
    } else if (account) {
        queryParams.account = account;
    }

    if (limit) {
        queryParams.limit = limit;
    }

    const url = buildRequestUrl(nodeConfiguration.url, "/api.php", queryParams);

    return (await call<Array<any>>({ url })).map((transaction: any) =>
        transactionFromApi(transaction),
    );
};
