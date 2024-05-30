import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";

import { buildNodeConfiguration } from "../utils/public";
import { getAssetBalance } from "./getAssetBalance";

const server = setupServer();

describe("Function: getAssetBalance", () => {
    // MSW Setup
    beforeAll(() => server.listen());
    afterEach(() => server.resetHandlers());
    afterAll(() => server.close());

    it("returns asset balances for asset", async () => {
        // ARRANGE
        const nodeConfiguration = buildNodeConfiguration({
            url: "http://localhost",
        });

        const mockResponse = {
            status: "ok",
            data: [
                {
                    asset: "63XhfCKHGCDUhwzWgb61nhNY7SD5HTTAV1XZ9fVqPAAe9oGyRtQruojT13A3pmWFEugd99qMDgGbgbQzPCE5ciHE",
                    alias: "AUOS",
                    account:
                        "2MhGjby9kNXNgjViGNqACEASiZMxqT7JQGgiAbYnqG5mZ44AeUbtjRWDusAPKxFLng5ioi6dxyhFzQ33RzoH9SX5",
                    balance: 1234,
                },
            ],
            coin: "arionum",
        };

        let requestUrl = "";

        server.use(
            http.get(`http://localhost/api.php`, (info) => {
                requestUrl = info.request.url;
                return HttpResponse.json(mockResponse);
            }),
        );

        // ACT
        const response = await getAssetBalance(nodeConfiguration, {
            asset: "63XhfCKHGCDUhwzWgb61nhNY7SD5HTTAV1XZ9fVqPAAe9oGyRtQruojT13A3pmWFEugd99qMDgGbgbQzPCE5ciHE",
        });

        // ASSERT
        expect(requestUrl).toContain(
            "asset=63XhfCKHGCDUhwzWgb61nhNY7SD5HTTAV1XZ9fVqPAAe9oGyRtQruojT13A3pmWFEugd99qMDgGbgbQzPCE5ciHE",
        );

        expect(response).toEqual([
            {
                asset: "63XhfCKHGCDUhwzWgb61nhNY7SD5HTTAV1XZ9fVqPAAe9oGyRtQruojT13A3pmWFEugd99qMDgGbgbQzPCE5ciHE",
                alias: "AUOS",
                address:
                    "2MhGjby9kNXNgjViGNqACEASiZMxqT7JQGgiAbYnqG5mZ44AeUbtjRWDusAPKxFLng5ioi6dxyhFzQ33RzoH9SX5",
                balance: 1234,
            },
        ]);
    });

    it("returns asset balances for account", async () => {
        // ARRANGE
        const nodeConfiguration = buildNodeConfiguration({
            url: "http://localhost",
        });

        const mockResponse = {
            status: "ok",
            data: [
                {
                    asset: "63XhfCKHGCDUhwzWgb61nhNY7SD5HTTAV1XZ9fVqPAAe9oGyRtQruojT13A3pmWFEugd99qMDgGbgbQzPCE5ciHE",
                    alias: "AUOS",
                    account:
                        "2MhGjby9kNXNgjViGNqACEASiZMxqT7JQGgiAbYnqG5mZ44AeUbtjRWDusAPKxFLng5ioi6dxyhFzQ33RzoH9SX5",
                    balance: 1234,
                },
            ],
            coin: "arionum",
        };

        let requestUrl = "";

        server.use(
            http.get(`http://localhost/api.php`, (info) => {
                requestUrl = info.request.url;
                return HttpResponse.json(mockResponse);
            }),
        );

        // ACT
        const response = await getAssetBalance(nodeConfiguration, {
            address:
                "2MhGjby9kNXNgjViGNqACEASiZMxqT7JQGgiAbYnqG5mZ44AeUbtjRWDusAPKxFLng5ioi6dxyhFzQ33RzoH9SX5",
        });

        // ASSERT
        expect(requestUrl).toContain(
            "account=2MhGjby9kNXNgjViGNqACEASiZMxqT7JQGgiAbYnqG5mZ44AeUbtjRWDusAPKxFLng5ioi6dxyhFzQ33RzoH9SX5",
        );

        expect(response).toEqual([
            {
                asset: "63XhfCKHGCDUhwzWgb61nhNY7SD5HTTAV1XZ9fVqPAAe9oGyRtQruojT13A3pmWFEugd99qMDgGbgbQzPCE5ciHE",
                alias: "AUOS",
                address:
                    "2MhGjby9kNXNgjViGNqACEASiZMxqT7JQGgiAbYnqG5mZ44AeUbtjRWDusAPKxFLng5ioi6dxyhFzQ33RzoH9SX5",
                balance: 1234,
            },
        ]);
    });

    it("returns asset balances for public key", async () => {
        // ARRANGE
        const nodeConfiguration = buildNodeConfiguration({
            url: "http://localhost",
        });

        const mockResponse = {
            status: "ok",
            data: [
                {
                    asset: "63XhfCKHGCDUhwzWgb61nhNY7SD5HTTAV1XZ9fVqPAAe9oGyRtQruojT13A3pmWFEugd99qMDgGbgbQzPCE5ciHE",
                    alias: "AUOS",
                    account:
                        "2MhGjby9kNXNgjViGNqACEASiZMxqT7JQGgiAbYnqG5mZ44AeUbtjRWDusAPKxFLng5ioi6dxyhFzQ33RzoH9SX5",
                    balance: 1234,
                },
            ],
            coin: "arionum",
        };

        let requestUrl = "";

        server.use(
            http.get(`http://localhost/api.php`, (info) => {
                requestUrl = info.request.url;
                return HttpResponse.json(mockResponse);
            }),
        );

        // ACT
        const response = await getAssetBalance(nodeConfiguration, {
            publicKey:
                "PZ8Tyr4Nx8MHsRAGMpZmZ6TWY63dXWSCzZitehhR4qa7Xe2Fz3ZHHb3njMbyKFohQqdPeYvDKdtHzCCgC9Nqs4DwF294Qqqms5HMjMRCkqmpE7qc8nEarC6m",
        });

        // ASSERT
        expect(requestUrl).toContain(
            "public_key=PZ8Tyr4Nx8MHsRAGMpZmZ6TWY63dXWSCzZitehhR4qa7Xe2Fz3ZHHb3njMbyKFohQqdPeYvDKdtHzCCgC9Nqs4DwF294Qqqms5HMjMRCkqmpE7qc8nEarC6m",
        );

        expect(response).toEqual([
            {
                asset: "63XhfCKHGCDUhwzWgb61nhNY7SD5HTTAV1XZ9fVqPAAe9oGyRtQruojT13A3pmWFEugd99qMDgGbgbQzPCE5ciHE",
                alias: "AUOS",
                address:
                    "2MhGjby9kNXNgjViGNqACEASiZMxqT7JQGgiAbYnqG5mZ44AeUbtjRWDusAPKxFLng5ioi6dxyhFzQ33RzoH9SX5",
                balance: 1234,
            },
        ]);
    });
});
