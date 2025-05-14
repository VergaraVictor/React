// import { heroes } from './data/heroes.js';
// import { heroes } from './data/heroes';
import heroes, { owners } from '../data/heroes';

console.log( owners );

// const getHeroeById = (id) => {
//     return heroes.find(( heroe ) => {
//         if (heroe.id === id ) {
//             return true;
//         } else {
//             return false;
//         }
//     });
// }

// ( heroe ) este es el argumento de la funcion

const getHeroeById = (id) => {
    return heroes.find( ( heroe ) => heroe.id === id );
}

console.log( getHeroeById(2) );

// find?, filter

const getHeroeByOwner = ( owner ) => heroes.filter( ( heroe ) => heroe.owner === owner );

console.log( getHeroeByOwner('Marvel') );

export {
    getHeroeById,
    getHeroeByOwner,
}