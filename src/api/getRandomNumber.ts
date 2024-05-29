import { NodeConfiguration } from "../utils/public";
import { buildRequestUrl } from "../utils/internal";
import { call } from "../utils/internal";

export const getRandomNumber = async (
    nodeConfiguration: NodeConfiguration,
    payload: {
        height: number;
        minimum: number;
        maximum: number;
        seed?: string;
    },
): Promise<number> => {
    const { height, minimum, maximum, seed } = payload;

    const queryParams: Record<string, number | string> = {
        q: "randomNumber",
        height: height,
        min: minimum,
        max: maximum,
    };

    if (seed) {
        queryParams.seed = seed;
    }

    const url = buildRequestUrl(nodeConfiguration.url, "/api.php", queryParams);

    return await call<number>({ url });
};
