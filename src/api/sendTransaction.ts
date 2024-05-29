import { NodeConfiguration } from "../utils/public";
import { buildRequestUrl } from "../utils/internal";
import { call } from "../utils/internal";
import { Transaction } from "./models";

export const sendTransaction = async (
    nodeConfiguration: NodeConfiguration,
    payload: { transaction: Transaction },
): Promise<string> => {
    const { transaction } = payload;

    const queryParams: Record<string, number | string> = {
        q: "send",
        val: transaction.value,
        dst: transaction.destinationAddress,
        public_key: transaction.publicKey,
        signature: transaction.signature,
        date: transaction.date,
        message: transaction.message,
        version: transaction.version,
    };

    const url = buildRequestUrl(nodeConfiguration.url, "/api.php", queryParams);

    return await call<string>({ url });
};
