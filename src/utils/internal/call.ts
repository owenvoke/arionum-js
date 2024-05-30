const packageVersion = process.env?.["PACKAGE_VERSION"] ?? "Unknown";

export const call = async <
    T extends readonly any[] | Record<string, any> | any,
>(config: {
    url: string;
}) => {
    const { url } = config;

    const headers = new Headers({
        "User-Agent": `arionum-js/${packageVersion}`,
    });

    const rawResponse = await fetch(url, { headers });

    if (!rawResponse.ok) {
        throw new Error(
            `HTTP Error: Status ${rawResponse.status} ${rawResponse.statusText}`,
        );
    }

    const jsonResponse = await rawResponse.json();

    if (jsonResponse.status === "error" && jsonResponse.data !== undefined) {
        throw new Error(`An API error occurred: ${jsonResponse.data}`);
    } else if (jsonResponse.status !== "ok") {
        throw new Error("An unknown API error occurred.");
    }

    return jsonResponse.data as T;
};
