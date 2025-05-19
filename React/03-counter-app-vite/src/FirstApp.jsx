// function MensajeVergara () {
//     return (<h1>Todo es Posible</h1>);
// }

// const newMessage = {
//     message: 'Hola Mundo',
//     title: 'Fernando'
// };

// Si no hay alguna dependencia colocar las funciones u objetos fuera
const getResult = (a, b) => {
    return a + b;
}


export const FirstApp = () => {

    return (
        <>  
            {/* <h1>{'MensajeVergara'}</h1> */}
            {/* <code>{ JSON.stringify( newMessage ) }</code> */}
            <h1>{ getResult(1,2) }</h1>
            <p>Soy un subtitulo</p>
        </>
    );
}