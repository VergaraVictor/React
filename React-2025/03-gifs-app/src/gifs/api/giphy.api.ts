import axios from 'axios';

const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;

export const giphyApi = axios.create({
    baseURL: 'https://api.giphy.com/v1/gifs',
    params: {
        lang: 'es',
        api_key: API_KEY,
    },
});