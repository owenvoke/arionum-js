import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";

import { buildNodeConfiguration } from "../utils/public";
import { getAlias } from "./getAlias";

const server = setupServer();

describe("Function: getAlias", () => {
    // MSW Setup
    beforeAll(() => server.listen());
    afterEach(() => server.resetHandlers());
    afterAll(() => server.close());

    it("returns alias for address", async () => {
        // ARRANGE
        const nodeConfiguration = buildNodeConfiguration({
            url: "http://localhost",
        });

        const mockResponse = {
            status: "ok",
            data: "PXGAMER",
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
        const response = await getAlias(nodeConfiguration, {
            address:
                "51sJ4LbdKzhyGy4zJGqodNLse9n9JsVT2rdeH92w7cf3qQuSDJupvjbUT1UBr7r1SCUAXG97saxn7jt2edKb4v4J",
        });

        // ASSERT
        expect(requestUrl).toContain(
            "account=51sJ4LbdKzhyGy4zJGqodNLse9n9JsVT2rdeH92w7cf3qQuSDJupvjbUT1UBr7r1SCUAXG97saxn7jt2edKb4v4J",
        );

        expect(response).toEqual("PXGAMER");
    });

    it("returns alias with public key validation", async () => {
        // ARRANGE
        const nodeConfiguration = buildNodeConfiguration({
            url: "http://localhost",
        });

        const mockResponse = {
            status: "ok",
            data: "PXGAMER",
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
        const response = await getAlias(nodeConfiguration, {
            publicKey:
                "PZ8Tyr4Nx8MHsRAGMpZmZ6TWY63dXWSCyk7aKeBJ6LL44w5JGSFp82Wb1Drqicuznv1qmRVQMvbmF64AeczjMtV72acGLR9RsiQ2JccemNrSPkKi8KDk72t4",
        });

        // ASSERT
        expect(requestUrl).toContain(
            "public_key=PZ8Tyr4Nx8MHsRAGMpZmZ6TWY63dXWSCyk7aKeBJ6LL44w5JGSFp82Wb1Drqicuznv1qmRVQMvbmF64AeczjMtV72acGLR9RsiQ2JccemNrSPkKi8KDk72t4",
        );

        expect(response).toEqual("PXGAMER");
    });
});
