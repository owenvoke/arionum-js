import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";

import { buildNodeConfiguration } from "../utils/public";
import { checkAddress } from "./checkAddress";

const server = setupServer();

describe("Function: checkAddress", () => {
    // MSW Setup
    beforeAll(() => server.listen());
    afterEach(() => server.resetHandlers());
    afterAll(() => server.close());

    it("returns true when address is valid", async () => {
        // ARRANGE
        const nodeConfiguration = buildNodeConfiguration({
            url: "http://localhost",
        });

        const mockResponse = {
            status: "ok",
            data: true,
        };

        let requestUrl = "";

        server.use(
            http.get(`http://localhost/api.php`, (info) => {
                requestUrl = info.request.url;
                return HttpResponse.json(mockResponse);
            }),
        );

        // ACT
        const response = await checkAddress(nodeConfiguration, {
            address:
                "5ADfrJUnLefPsaYjMTR4KmvQ79eHo2rYWnKBRCXConYKYJVAw2adtzb38oUG5EnsXEbTct3p7GagT2VVZ9hfVTVn",
        });

        // ASSERT
        expect(requestUrl).toContain(
            "account=5ADfrJUnLefPsaYjMTR4KmvQ79eHo2rYWnKBRCXConYKYJVAw2adtzb38oUG5EnsXEbTct3p7GagT2VVZ9hfVTVn",
        );

        expect(response).toEqual(true);
    });

    it("returns false when address is invalid", async () => {
        // ARRANGE
        const nodeConfiguration = buildNodeConfiguration({
            url: "http://localhost",
        });

        const mockResponse = {
            status: "ok",
            data: false,
        };

        let requestUrl = "";

        server.use(
            http.get(`http://localhost/api.php`, (info) => {
                requestUrl = info.request.url;
                return HttpResponse.json(mockResponse);
            }),
        );

        // ACT
        const response = await checkAddress(nodeConfiguration, {
            address: "invalid",
        });

        // ASSERT
        expect(requestUrl).toContain("account=invalid");

        expect(response).toEqual(false);
    });
});
