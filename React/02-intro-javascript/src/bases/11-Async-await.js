

// const getImagenPromesa = () => new Promise( resolve => resolve('https://ajskdhaskjdhajs.com'))
// getImagenPromesa().then( console.log);

const getImagen = async() => {

    try {

        const apiKey = '4UQr28mWPHZHBJ90ac6eB6ZvAbmhjsyl';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json();

        const { url } = data.images.original;
        console.log( url );

        const img = document.createElement('img');
        img.src = url;

        document.body.append( img );

    } catch (error) {
        // manejo del error
        console.error(error);
    }
    
} 

getImagen();




