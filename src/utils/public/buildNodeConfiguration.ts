import { NodeConfiguration } from "./models";

export const buildNodeConfiguration = (
    config: NodeConfiguration,
): NodeConfiguration => {
    if (!config.url) {
        throw new Error(`
          buildNodeConfiguration() requires an object containing a URL. e.g.:

          const nodeConfiguration = buildNodeConfiguration({
            url: "http://peer1.arionum.com",
          })
        `);
    }

    return config;
};
