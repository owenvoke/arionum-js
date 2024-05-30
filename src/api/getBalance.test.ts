import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";

import { buildNodeConfiguration } from "../utils/public";
import { getBalance } from "./getBalance";

const server = setupServer();

describe("Function: getBalance", () => {
    // MSW Setup
    beforeAll(() => server.listen());
    afterEach(() => server.resetHandlers());
    afterAll(() => server.close());

    it("returns the balance for an account", async () => {
        // ARRANGE
        const nodeConfiguration = buildNodeConfiguration({
            url: "http://localhost",
        });

        const mockResponse = {
            status: "ok",
            data: "12345",
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
        const response = await getBalance(nodeConfiguration, {
            address:
                "51sJ4LbdKzhyGy4zJGqodNLse9n9JsVT2rdeH92w7cf3qQuSDJupvjbUT1UBr7r1SCUAXG97saxn7jt2edKb4v4J",
        });

        // ASSERT
        expect(requestUrl).toContain(
            "account=51sJ4LbdKzhyGy4zJGqodNLse9n9JsVT2rdeH92w7cf3qQuSDJupvjbUT1UBr7r1SCUAXG97saxn7jt2edKb4v4J",
        );

        expect(response).toEqual("12345");
    });

    it("returns the balance for a public key", async () => {
        // ARRANGE
        const nodeConfiguration = buildNodeConfiguration({
            url: "http://localhost",
        });

        const mockResponse = {
            status: "ok",
            data: "12345",
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
        const response = await getBalance(nodeConfiguration, {
            publicKey:
                "PZ8Tyr4Nx8MHsRAGMpZmZ6TWY63dXWSCzZitehhR4qa7Xe2Fz3ZHHb3njMbyKFohQqdPeYvDKdtHzCCgC9Nqs4DwF294Qqqms5HMjMRCkqmpE7qc8nEarC6m",
        });

        // ASSERT
        expect(requestUrl).toContain(
            "public_key=PZ8Tyr4Nx8MHsRAGMpZmZ6TWY63dXWSCzZitehhR4qa7Xe2Fz3ZHHb3njMbyKFohQqdPeYvDKdtHzCCgC9Nqs4DwF294Qqqms5HMjMRCkqmpE7qc8nEarC6m",
        );

        expect(response).toEqual("12345");
    });

    it("returns the balance for an alias", async () => {
        // ARRANGE
        const nodeConfiguration = buildNodeConfiguration({
            url: "http://localhost",
        });

        const mockResponse = {
            status: "ok",
            data: "12345",
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
        const response = await getBalance(nodeConfiguration, {
            alias: "PXGAMER",
        });

        // ASSERT
        expect(requestUrl).toContain("alias=PXGAMER");

        expect(response).toEqual("12345");
    });
});
