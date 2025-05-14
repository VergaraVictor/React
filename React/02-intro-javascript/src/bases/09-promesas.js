import { getHeroeById } from "./bases/08-imp-exp";

// const promesa = new Promise( (resolve, reject) => {
    
//     setTimeout( () => {
//         // Tarea
//         // Importen el 
//         // const heroe = getHeroeById(2);
//         // resolve(heroe);
//         const p1 = getHeroeById(2);
//         resolve( p1 );
//         // reject( 'No se pudo encontrar el héroe' );
//     }, 2000 )

// });

// promesa.then( (heroe) => {
//     console.log('heroe', heroe);
// })
// .catch( err => console.warn( err ));

const getHeroeByIdAsync = ( id ) => {
    return new Promise( (resolve, reject) => {
    
        setTimeout( () => {
            // Tarea
            // Importen el 
            // const heroe = getHeroeById(2);
            // resolve(heroe);
            const p1 = getHeroeById( id );
            if ( p1 ) {
                resolve( p1 );
            } else {
                reject( 'No se pudo encontrar el héroe' );
            }
        }, 2000 )

    });

    // return promesa; esto se usaba antes mejor se quita la contante y se retorna directamente la promesa

}

getHeroeByIdAsync(1)
    // .then( console.log('Heroe', heroe ))
    .then( console.log )
    // ??? catch ???
    // .catch( (err) => console.warn(err));
    .catch( console.warn);