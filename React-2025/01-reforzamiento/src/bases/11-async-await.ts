import type { GiphyRandomResponse } from "../data/giphy.response";



const API_KEY = 'fkstXUCkI1rbrjRdhPPwSdeGRKYV3ujo';

const createImageInsideDOM = ( url: string ) => {
    const imgElement = document.createElement('img');
    imgElement.src = url;

    document.body.append(imgElement);
};

const getRandomGifUrl = async ():Promise<string> => {

    // Crear peticion Https
    const response = await fetch(
        `https://api.giphy.com/v1/gifs/random?api_key=${ API_KEY }`
    );

    const { data }: GiphyRandomResponse = (await response.json());

    return data.images.original.url;

};

// getRandomGifUrl().then((url) => createImageInsideDOM(url)); funciona igual cuando url que es un argumento que ese envia como refrenecia a la función se puede mandar lafuncion como refrenecia
getRandomGifUrl().then(createImageInsideDOM);