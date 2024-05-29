export const buildRequestUrl = (
    baseUrl: string,
    endpointUrl: string,
    args: Record<string, string | number> = {},
) => {
    const concatenated = `${baseUrl}/${endpointUrl}`;
    let withArgs = concatenated.replaceAll(/([^:]\/)\/+/g, "$1");

    const queryParamValues: Record<string, string> = {};

    for (const [argKey, argValue] of Object.entries(args)) {
        // "abc.com/some-route/:foo/some-path" & {"foo": 4} --> "abc.com/some-route/4/some-path"
        if (withArgs.includes(`:${argKey}`)) {
            withArgs = withArgs.replace(`:${argKey}`, String(argValue));
        } else if (argValue !== undefined) {
            queryParamValues[argKey] = String(argValue);
        }
    }

    const queryString = new URLSearchParams(queryParamValues).toString();
    return `${withArgs}?${queryString}`;
};
