export interface Sanity {
    isRunning: boolean;
    isSynchronising: boolean;
    lastRun: number;
}

export const sanityFromApi = (data: any): Sanity => {
    return {
        isRunning: data.sanity_running,
        isSynchronising: data.sanity_sync,
        lastRun: data.last_sanity,
    };
};
