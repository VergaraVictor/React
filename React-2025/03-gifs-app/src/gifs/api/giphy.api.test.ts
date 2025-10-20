import { describe, expect, test } from "vitest";
import { giphyApi } from "./giphy.api";

describe('giphApi', () => {
    test('should be configured correctly', () => {

        const params = giphyApi.defaults.params

        console.log(params);

        expect(giphyApi.defaults.baseURL).toBe('https://api.giphy.com/v1/gifs');
        expect(params.lang).toBe('es');
        expect(params.api_key).toBe(import.meta.env.VITE_GIPHY_API_KEY);

        expect(params).toStrictEqual({
            lang: 'es',
            api_key: 'kp5WrGSW9zloViMhugvtJmmQ3pYQl1yS'
        });
    });
});
