import axios from 'axios';
import type { GiphyResponse } from '../interfaces/giphy.response';
import type { Gif } from '../interfaces/gif.interface';



export const getGifsByQuery = async (query: string): Promise<Gif[]> => {
    const response = await axios.get<GiphyResponse>('https://api.giphy.com/v1/gifs/search',
        {
            params: {
                q: query,
                limit: 10,
                lang: 'es',
                api_key: 'kp5WrGSW9zloViMhugvtJmmQ3pYQl1yS',
            },
        }
    );

    // response.data.data[0]
    console.log(response.data);

    return response.data.data.map((gif) => ({
        id: gif.id,
        title: gif.title,
        url: gif.images.original.url,
        width: Number(gif.images.original.width),
        height: Number(gif.images.original.height),
    }));


    // fetch(
    //     `https://api.giphy.com/v1/gifs/search?api_key=kp5WrGSW9zloViMhugvtJmmQ3pYQl1yS&q=${query}&limit=25&offset=0&rating=g&lang=es&bundle=messaging_non_clips`
    // );
};