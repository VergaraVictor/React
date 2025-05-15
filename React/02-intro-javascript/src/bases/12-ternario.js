

const activo = true;

// let mensaje = '';

// if ( !activo ) {
//     mensaje = 'Activo';
// } else {
//     mensaje = 'Inactivo';
// } una forma de hacerlo 
// const mensaje = ( activo ) ? 'Activo' : 'Inactivo'; Otra forma de hacerlo
// const mensaje = ( activo ) ? 'Activo' : null; Otra forma
const mensaje = !activo && 'Activo'
// const mensaje = (activo === true) && 'Activo' Esta es otra forma

console.log(mensaje);
