// function MensajeVergara () {
//     return (<h1>Todo es Posible</h1>);
// }

// const newMessage = {
//     message: 'Hola Mundo',
//     title: 'Fernando'
// };

// Si no hay alguna dependencia colocar las funciones u objetos fuera
// const getResult = (a, b) => {
//     return a + b;
// }
import PropTypes from 'prop-types';

export const FirstApp = ({ title, subTitle, name }) => {

    // console.log(props);
    // if ( !title ) {
    //     throw new Error('El title no existe');
    // }

    return (
        <>  
            {/* <h1>{'MensajeVergara'}</h1> */}
            {/* <code>{ JSON.stringify( newMessage ) }</code> */}
            {/* <h1>{ getResult(1,2) }</h1> */}
            <h1>{ title }</h1>
            <p>{ subTitle }</p>
            <p>{ name }</p>
        </>
    );
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string,
}

FirstApp.defaultProps = {
    name: 'Víctor Vergara',
    subTitle: 'No hay subtitulo',
    title: 'No hay titulo',
}