export interface NodeInfo {
    hostname: string;
    version: string;
    databaseVersion: string;
    statistics: {
        accounts: number;
        transactions: number;
        mempoolTransactions: number;
        masternodes: number;
        peers: number;
    };
}

export const nodeInfoFromApi = (data: any): NodeInfo => {
    return {
        hostname: data.hostname,
        version: data.version,
        databaseVersion: data.dbversion,
        statistics: {
            accounts: data.accounts,
            transactions: data.transactions,
            mempoolTransactions: data.mempool,
            masternodes: data.masternodes,
            peers: data.peers,
        },
    };
};
