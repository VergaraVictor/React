import React from "react";
import ReactDOM from 'react-dom/client';
// import { HelloWorldApp } from './HelloWorldApp';
import { FirstApp } from './FirstApp';
import './styles.css'
import { CounterApp } from "./CounterApp";

ReactDOM.createRoot(document.getElementById('root') ).render(
    <React.StrictMode>
        <CounterApp value={ 20 } />
        {/* <FirstApp title="Hola, Soy Vegeta" subTitle={"No hay subtítulo"} name={"Víctor Vergara"} /> */}
    </React.StrictMode>
);