import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";

import { buildNodeConfiguration } from "../utils/public";
import { getAddress } from "./getAddress";

const server = setupServer();

describe("Function: getAddress", () => {
    // MSW Setup
    beforeAll(() => server.listen());
    afterEach(() => server.resetHandlers());
    afterAll(() => server.close());

    it("returns address for valid ", async () => {
        // ARRANGE
        const nodeConfiguration = buildNodeConfiguration({
            url: "http://localhost",
        });

        const mockResponse = {
            status: "ok",
            data: "2z2jCebUcMDWxsvVXxSjGCEspg3sobCoQQQJRZY3g6985uhLJKEAJ3ofcUeHU9rpN9dWYirNVGmneiaiYwb7Jxh",
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
        const response = await getAddress(nodeConfiguration, {
            publicKey:
                "PZ8Tyr4Nx8MHsRAGMpZmZ6TWY63dXWSCy82Bs7eNrGVcNW1p9cgZMe954tCXagAhmKqd1VtjRzwBYCFdh8KuwXqDiX58nRhU4CGGXcRDzFEf9ttUMQjGFjzv",
        });

        // ASSERT
        expect(requestUrl).toContain(
            "public_key=PZ8Tyr4Nx8MHsRAGMpZmZ6TWY63dXWSCy82Bs7eNrGVcNW1p9cgZMe954tCXagAhmKqd1VtjRzwBYCFdh8KuwXqDiX58nRhU4CGGXcRDzFEf9ttUMQjGFjzv",
        );

        expect(response).toEqual(
            "2z2jCebUcMDWxsvVXxSjGCEspg3sobCoQQQJRZY3g6985uhLJKEAJ3ofcUeHU9rpN9dWYirNVGmneiaiYwb7Jxh",
        );
    });
});
