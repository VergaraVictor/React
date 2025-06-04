import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {

    const [  categories, setCategories ] = useState([ 'One Punch', 'Dragon ball' ]);

    const onAddCategory = () => {
        // categories.push('Valorant'); esta no es recoendable por ahora 
        // setCategories([ ...categories, 'Valorant' ]) esta es una forma
        setCategories( cat => [ 'Valorant', ...cat ]);
    }
    
    return (
        <>  
            {/* titulo */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory />

            {/* Api TfioeJvgjs0Kit3RlqVynZBDjQMSdo8o */}

            {/* Listado de Gif */}
            <button onClick={ onAddCategory }>Agregar</button>
            <ol>
                { categories.map( category => {
                        return <li key={ category }>{ category }</li>
                    }) 
                }
                {/* <li>ABC</li> */}
            </ol>
                {/* Git Item */}
        </>

    )
}
 