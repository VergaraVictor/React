import { useState } from "react";
import PropTypes from "prop-types"

export const CounterApp = ({ value }) => {

  const [ counter, setCounter ] = useState( value );

    console.log('render');
    // API... FETCH... ... Tener presente que cuando hay un cambio en el estado va actualizilar toda la funcion o componente. 

  // function handleAdd(event, newValue ) { 
  //   console.log(newValue) 
  // }
  const handleAdd = () => { 
    // console.log(event);
    setCounter( counter + 1 );
    // setCounter( (c) => c + 1) Otra manera de hacerlo
  }

  // const handleSubstract = () => {
  //   setCounter( counter - 1);
  // } otra forma que es quitar la funcion de flecha
  const handleSubstract = () => setCounter( counter - 1);

  // const handleReset = () => {
  //   setCounter( value );
  // }
  const handleReset = () => setCounter( value );

  return (
    <>
        <h1>CounterApp</h1>
        <h2> { counter } </h2>

        <button onClick={ handleAdd }> +1 </button>
        <button onClick={ handleSubstract }> -1 </button>
        <button onClick={ handleReset }> Reset </button>
    </>
  );
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}
