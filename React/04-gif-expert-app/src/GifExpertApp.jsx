import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {

    const [  categories, setCategories ] = useState([ 'One Punch' ]);

    const onAddCategory = ( newCategory ) => {
        
        if ( categories.includes(newCategory) ) return;
        // categories.push('Valorant'); esta no es recoendable por ahora 
        // categories.push(newCategory);
        setCategories([ newCategory, ...categories ]) 
        // setCategories( cat => [ 'Valorant', ...cat ]); esta es otra  forma
    }
    
    return (
        <>  
            {/* titulo */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory 
                // setCategories={ setCategories }
                onNewCategory={ (value) => onAddCategory(value) }
            />

            {/* Api TfioeJvgjs0Kit3RlqVynZBDjQMSdo8o */}

            {/* Listado de Gif */}
            {/* <button onClick={ onAddCategory }>Agregar</button> */}
        
            { 
                categories.map( (category) => (
                    <GifGrid 
                        key={ category } 
                        category={ category } />
                )) 
            }
            
            {/* Git Item */}
        </>

    )
}
 