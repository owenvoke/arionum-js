import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";

import { buildNodeConfiguration } from "../utils/public";
import { generateAccount } from "./generateAccount";

const server = setupServer();

describe("Function: generateAccount", () => {
    // MSW Setup
    beforeAll(() => server.listen());
    afterEach(() => server.resetHandlers());
    afterAll(() => server.close());

    it("returns new account keypair", async () => {
        // ARRANGE
        const nodeConfiguration = buildNodeConfiguration({
            url: "http://localhost",
        });

        const mockResponse = {
            status: "ok",
            data: {
                address:
                    "2z2jCebUcMDWxsvVXxSjGCEspg3sobCoQQQJRZY3g6985uhLJKEAJ3ofcUeHU9rpN9dWYirNVGmneiaiYwb7Jxh",
                public_key:
                    "PZ8Tyr4Nx8MHsRAGMpZmZ6TWY63dXWSCy82Bs7eNrGVcNW1p9cgZMe954tCXagAhmKqd1VtjRzwBYCFdh8KuwXqDiX58nRhU4CGGXcRDzFEf9ttUMQjGFjzv",
                private_key:
                    "Lzhp9LopCGu1TVHr9BxkfhpyqrhjA6Sbtk8z5hG36SxibgMmtcibiAZ9aMxz8HDnEarEbcTDTERkfLS4oGcTW21oi9fcX5Json8bj6KNnKaXSvnfGtDLaJPyazm6pxCHjXAmZz6tshATrAUcjWuGPggBSQnuKQJSa",
            },
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
        const response = await generateAccount(nodeConfiguration);

        // ASSERT
        expect(response).toEqual({
            address:
                "2z2jCebUcMDWxsvVXxSjGCEspg3sobCoQQQJRZY3g6985uhLJKEAJ3ofcUeHU9rpN9dWYirNVGmneiaiYwb7Jxh",
            publicKey:
                "PZ8Tyr4Nx8MHsRAGMpZmZ6TWY63dXWSCy82Bs7eNrGVcNW1p9cgZMe954tCXagAhmKqd1VtjRzwBYCFdh8KuwXqDiX58nRhU4CGGXcRDzFEf9ttUMQjGFjzv",
            privateKey:
                "Lzhp9LopCGu1TVHr9BxkfhpyqrhjA6Sbtk8z5hG36SxibgMmtcibiAZ9aMxz8HDnEarEbcTDTERkfLS4oGcTW21oi9fcX5Json8bj6KNnKaXSvnfGtDLaJPyazm6pxCHjXAmZz6tshATrAUcjWuGPggBSQnuKQJSa",
        });
    });
});
