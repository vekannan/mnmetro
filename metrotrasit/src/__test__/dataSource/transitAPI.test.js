import getTransitInfo from '../../dataSource/transitAPI'

describe("GIVEN fetch", () => {

    describe("WHEN fetch api returns value", () => {
        
        test("THEN it should show response", async () => {
            const testData = { routes: {"route1": "route"} }
            global.fetch = jest.fn(() =>
                Promise.resolve({
                    json: () => Promise.resolve(testData),
                })
            );
            const response = await getTransitInfo();
            expect(response).toEqual(testData);
            expect(fetch).toHaveBeenCalledTimes(1);
        });
    });

    describe("WHEN fetch api returns error", () => {
        
        test("THEN it should return error response", async () => {
            const testData = "API is down"
            fetch.mockImplementationOnce(() => Promise.reject(testData));

            const response = await getTransitInfo();
            expect(response).toEqual(testData);
            expect(fetch).toHaveBeenCalledTimes(1);
        });
    });
});