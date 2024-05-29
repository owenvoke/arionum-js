export interface Masternode {
    publicKey: string;
    height: number;
    ip: string;
    lastWonBlock: number;
    blacklist: number;
    fails: number;
    status: boolean;
    voteKey: string | null;
    coldLastWonBlock: number;
    voted: number;
}

export const masternodesFromApi = (data: any): Array<Masternode> => {
    return data.masternodes.map((masternode: any): Masternode => {
        return {
            publicKey: masternode.public_key,
            height: masternode.height,
            ip: masternode.ip,
            lastWonBlock: masternode.last_won,
            blacklist: masternode.blacklist,
            fails: masternode.fails,
            status: masternode.status,
            voteKey: masternode.vote_key,
            coldLastWonBlock: masternode.cold_last_won,
            voted: masternode.voted,
        };
    });
};
