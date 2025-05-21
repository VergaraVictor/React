import { useState } from "react";
import PropTypes from "prop-types"

export const CounterApp = ({ value }) => {

  const [ counter, setCounter ] = useState( value );

  // function handleAdd(event, newValue ) { 
  //   console.log(newValue) 
  // }
  const handleAdd = () => { 
    // console.log(event);
    setCounter( counter + 1 );
    // setCounter( (c) => c + 1) Otra manera de hacerlo
  }

  return (
    <>
        <h1>CounterApp</h1>
        <h2> { counter } </h2>

        <button onClick={ handleAdd }>
          +1
        </button>
    </>
  );
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}
