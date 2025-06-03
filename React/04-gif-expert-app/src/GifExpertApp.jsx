import { useState } from "react";

export const GifExpertApp = () => {

    const [  categories, setCategories ] = useState([ 'One Punch', 'Dragon ball' ]);

    console.log(categories);
    
    return (
        <>  
            {/* titulo */}
            <h1>GifExpertApp</h1>

            {/* Input */}

            {/* Api TfioeJvgjs0Kit3RlqVynZBDjQMSdo8o */}

            {/* Listado de Gif */}
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
 