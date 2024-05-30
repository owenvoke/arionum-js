import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";

import { buildNodeConfiguration } from "../utils/public";
import { getBase58 } from "./getBase58";

const server = setupServer();

describe("Function: getBase58", () => {
    // MSW Setup
    beforeAll(() => server.listen());
    afterEach(() => server.resetHandlers());
    afterAll(() => server.close());

    it("returns a Base 58 encoded string", async () => {
        // ARRANGE
        const nodeConfiguration = buildNodeConfiguration({
            url: "http://localhost",
        });

        const mockResponse = {
            status: "ok",
            data: "3yZe7d",
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
        const response = await getBase58(nodeConfiguration, {
            data: "test",
        });

        // ASSERT
        expect(requestUrl).toContain("data=test");

        expect(response).toEqual("3yZe7d");
    });
});
