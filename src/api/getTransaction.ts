import { NodeConfiguration } from "../utils/public";
import { buildRequestUrl } from "../utils/internal";
import { call } from "../utils/internal";
import { Transaction, transactionFromApi } from "./models";

export const getTransaction = async (
    nodeConfiguration: NodeConfiguration,
    payload: { id: string },
): Promise<Transaction> => {
    const { id } = payload;

    const queryParams: Record<string, number | string> = {
        q: "getTransaction",
        transaction: id,
    };

    const url = buildRequestUrl(nodeConfiguration.url, "/api.php", queryParams);

    return transactionFromApi(await call<any>({ url }));
};
