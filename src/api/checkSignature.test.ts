import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";

import { buildNodeConfiguration } from "../utils/public";
import { checkSignature } from "./checkSignature";

const server = setupServer();

describe("Function: checkSignature", () => {
    // MSW Setup
    beforeAll(() => server.listen());
    afterEach(() => server.resetHandlers());
    afterAll(() => server.close());

    it("returns true when signature is valid", async () => {
        // ARRANGE
        const nodeConfiguration = buildNodeConfiguration({
            url: "http://localhost",
        });

        const mockResponse = {
            status: "ok",
            data: true,
            coint: "arionum",
        };

        let requestUrl = "";

        server.use(
            http.get(`http://localhost/api.php`, (info) => {
                requestUrl = info.request.url;
                return HttpResponse.json(mockResponse);
            }),
        );

        // ACT
        const response = await checkSignature(nodeConfiguration, {
            data: "1.00000000-0.00250000-PXGAMER--2-PZ8Tyr4Nx8MHsRAGMpZmZ6TWY63dXWSCyk7aKeBJ6LL44w5JGSFp82Wb1Drqicuznv1qmRVQMvbmF64AeczjMtV72acGLR9RsiQ2JccemNrSPkKi8KDk72t4-1533911370",
            signature:
                "AN1rKroKawax5azYrLbasV7VycYAvQXFKrJ69TFYEfmanXwVRrUQTCx5gQ1eVNMgEVzrEz3VzLsfrVVpUYqgB5eT2qsFtaSsw",
            publicKey:
                "PZ8Tyr4Nx8MHsRAGMpZmZ6TWY63dXWSCyk7aKeBJ6LL44w5JGSFp82Wb1Drqicuznv1qmRVQMvbmF64AeczjMtV72acGLR9RsiQ2JccemNrSPkKi8KDk72t4",
        });

        // ASSERT
        expect(requestUrl).toContain(
            "data=1.00000000-0.00250000-PXGAMER--2-PZ8Tyr4Nx8MHsRAGMpZmZ6TWY63dXWSCyk7aKeBJ6LL44w5JGSFp82Wb1Drqicuznv1qmRVQMvbmF64AeczjMtV72acGLR9RsiQ2JccemNrSPkKi8KDk72t4-1533911370",
        );
        expect(requestUrl).toContain(
            "public_key=PZ8Tyr4Nx8MHsRAGMpZmZ6TWY63dXWSCyk7aKeBJ6LL44w5JGSFp82Wb1Drqicuznv1qmRVQMvbmF64AeczjMtV72acGLR9RsiQ2JccemNrSPkKi8KDk72t4",
        );
        expect(requestUrl).toContain(
            "signature=AN1rKroKawax5azYrLbasV7VycYAvQXFKrJ69TFYEfmanXwVRrUQTCx5gQ1eVNMgEVzrEz3VzLsfrVVpUYqgB5eT2qsFtaSsw",
        );

        expect(response).toEqual(true);
    });

    it("returns false when signature is invalid", async () => {
        // ARRANGE
        const nodeConfiguration = buildNodeConfiguration({
            url: "http://localhost",
        });

        const mockResponse = {
            status: "ok",
            data: false,
            coint: "arionum",
        };

        let requestUrl = "";

        server.use(
            http.get(`http://localhost/api.php`, (info) => {
                requestUrl = info.request.url;
                return HttpResponse.json(mockResponse);
            }),
        );

        // ACT
        const response = await checkSignature(nodeConfiguration, {
            data: "test",
            signature: "abc",
            publicKey:
                "PZ8Tyr4Nx8MHsRAGMpZmZ6TWY63dXWSCyk7aKeBJ6LL44w5JGSFp82Wb1Drqicuznv1qmRVQMvbmF64AeczjMtV72acGLR9RsiQ2JccemNrSPkKi8KDk72t4",
        });

        // ASSERT
        expect(requestUrl).toContain("data=test");
        expect(requestUrl).toContain(
            "public_key=PZ8Tyr4Nx8MHsRAGMpZmZ6TWY63dXWSCyk7aKeBJ6LL44w5JGSFp82Wb1Drqicuznv1qmRVQMvbmF64AeczjMtV72acGLR9RsiQ2JccemNrSPkKi8KDk72t4",
        );
        expect(requestUrl).toContain("signature=abc");

        expect(response).toEqual(false);
    });
});
