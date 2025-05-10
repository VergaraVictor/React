const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 55321321,
        lat: 14.3232,
        lng: 34.9233321
    }
};

// console.table( { persona } );
console.log( { persona } );

// const persona2 = persona; //Esto no se debe realizar por que es una copia de la referencia
// si vas a copiar es asi, se va a tener un clon del objeto
const persona2 = { ...persona };
persona2.nombre = 'Peter';

console.log(persona);
console.log(persona2);
