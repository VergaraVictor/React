import { persona, usContext } from "../../src/base-pruebas/06-deses-obj"

describe('Pruebas en 06-funciones', () => {
    test('getPersona debe retornar un objeto', () => {
        
        const testPersona = {
            nombre: 'Tony',
            clave: 'Ironman',
            edad: 45
        }

        const us = persona; 

        expect ( testPersona ).toEqual( us );
    });

    test('getUsContext debe retornar un objeto', () => {
        const testPersona = {
            nombre: 'Tony',
            clave: 'Ironman',
            edad: 45
        }
        const rango = 'Capitán'

        const us = usContext( testPersona );

        expect ( us ).toStrictEqual({
            nombreClave: testPersona.clave,
            anios: testPersona.edad,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        });
    });
});
