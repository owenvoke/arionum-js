import { TransactionType } from "./transaction-type.model";

export interface Transaction {
    id: string;
    block: string;
    blockHeight: number;
    confirmations: number;
    sourceAddress: string;
    destinationAddress: string;
    value: number;
    fee: number;
    publicKey: string;
    signature: string;
    message: string;
    type: TransactionType;
    date: number;
    version: number;
}

export const transactionFromApi = (data: any): Transaction => {
    return {
        id: data.id,
        block: data.block,
        blockHeight: data.height,
        confirmations: data.confirmation,
        sourceAddress: data.src,
        destinationAddress: data.dst,
        value: data.val,
        fee: data.fee,
        publicKey: data.public_key,
        signature: data.signature,
        message: data.message,
        type: data.type,
        date: data.date,
        version: data.version,
    };
};
