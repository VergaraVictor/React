import type { GiphyRandomResponse } from "../data/giphy.response";



const API_KEY = 'fkstXUCkI1rbrjRdhPPwSdeGRKYV3ujo';

// Crear peticion Https
const myRequest = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ API_KEY }`

);

// Se obtine con una  promesa

// myRequest.then( (response) => {
    
//     response.json().then( (data) => {
//         console.log(data);
//     });

// })
// .catch( err => {
//     console.error(err);
// }); Una mejor forma de hacerlo es la siguiente

const createImageInsideDOM = ( url: string ) => {
    const imgElement = document.createElement('img');
    imgElement.src = url;

    document.body.append(imgElement);
}

myRequest
    .then((response) => response.json())
    .then(({ data }: GiphyRandomResponse) => {
        const imageUrl = data.images.original.url;
        createImageInsideDOM(imageUrl);
    })
    .catch( err => {
        console.error(err);
    });