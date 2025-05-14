const apiKey = '4UQr28mWPHZHBJ90ac6eB6ZvAbmhjsyl';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);

// peticion.then( resp => {
//     resp.json().then( data => {
//         console.log(data);
//     })
// })
// .catch( console.warn );
peticion
    .then( resp => resp.json() )
    .then( ({data}) => {
        // console.log( data.images.original.url ); se destructura 
        const { url } = data.images.original;
        console.log( url );

        const img = document.createElement('img');
        img.src = url;

        document.body.append( img );
    })
    .catch( console.warn );