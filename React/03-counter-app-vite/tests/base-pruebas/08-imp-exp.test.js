import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";

describe('Pruebas en 08-imp-exp', () => {
    test('getHeroeById debe retornar un héroe por ID', () => {
        
        const id = 1;
        const hero = getHeroeById( id );
        console.log(hero);
        
        expect( hero ).toEqual({ id: 1, name: 'Batman', owner: 'DC' })

    });

    test('getHeroeById debe retornar undefined si no existe el Id', () => {
        
        const id = 100;
        const hero = getHeroeById( id );
        console.log(hero);
        expect( hero ).toBeFalsy();

    });

    // Tarea:
    // Debe de retornar un arreglo con los héroes de DC
    // Length === 3
    // toEqual al arreglo filtrado

    // debe retorna un arrego con los héroes de Marvel
    // Length === 2

    test('getHeroesByOwner debe retornar un arreglo con los héroes de DC', () => {
        
        const owner = 'DC';
        const heroes = getHeroesByOwner( owner );
        console.log(heroes);
        
        expect( heroes.length ).toBe( 3 );
        expect( heroes ).toEqual([  
            { id: 1, name: 'Batman', owner: 'DC' },                                                                                                                                            
            { id: 3, name: 'Superman', owner: 'DC' },                                                                                                                                          
            { id: 4, name: 'Flash', owner: 'DC' } 
        ]);
        expect( heroes ).toEqual( heroes.filter( (heroe) => heroe.owner === owner));
        expect( heroes ).toEqual[{}]

    });

    test('getHeroesByOwner debe retornar un arreglo con los héroes de Marvel', () => {
        
        const owner = 'Marvel';
        const heroes = getHeroesByOwner( owner );
        console.log(heroes);
        
        expect( heroes.length ).toBe( 2 );
        expect( heroes ).toEqual( heroes.filter( (heroe) => heroe.owner === owner));
        expect( heroes ).toEqual[{}]

    });
    
})
