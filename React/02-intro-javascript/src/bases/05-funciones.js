// Funciones en JS
const saludar = function ( nombre ) { 
    return `Hola, ${ nombre }`;
} // Función Tradicional

// funcion de flecha
const saludar2 = ( nombre ) => { 
    return `Hola, ${ nombre }`;
}

const saludar3 = ( nombre ) => `Hola, ${ nombre }`;

const saludar4 = ( ) => `Hola Mundo`;

console.log( saludar('Goku') );
console.log( saludar2('Vegeta') );
console.log( saludar3('Bulma') );
console.log( saludar4() );

const getUser = () => ({
        uid: 'ABC123',
        username: 'El_Papi1502'
    });

const user = getUser();
console.log( user );

// Tarea
// 1. Tranformar a una función de Flecha.
// 2. Tiene que retornar un objeto implícito
// 3. Pruebas
// function getUsuarioActivo(nombre) {
//     return {
//         uid: 'ABC567',
//         username: nombre
//     }
// };

// const usuarioActivo = getUsuarioActivo('Victor');
// console.log( usuarioActivo );
// Resultado:
const getUsuarioActivo = (nombre) => ({
    uid: 'ABC567',
    username: nombre,
});

const usuarioActivo = getUsuarioActivo('Victor');
console.log( usuarioActivo );