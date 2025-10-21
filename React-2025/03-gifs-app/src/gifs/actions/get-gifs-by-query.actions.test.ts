import { describe, expect, test } from "vitest";
import { getGifsByQuery } from "./get-gifs-by-query.actions";


describe('getGifsByQuery', () => {

    test('should return a list of gifs', async () => {

        const gifs = await getGifsByQuery('goku');
        const [gif1] = gifs;

        expect(gifs.length).toBe(10);

        expect(gif1).toEqual({
            id: expect.any(String),
            height: expect.any(Number),
            width: expect.any(Number),
            title: expect.any(String),
            url: expect.any(String),
        });
    });
});
