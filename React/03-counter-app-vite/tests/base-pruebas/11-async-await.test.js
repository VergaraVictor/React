import { getImagen } from "../../src/base-pruebas/11-async-await";

describe('Pruebas en 11-async-await', () => {

    test('getImangen debe retornar un URL de la imagen debe retornar un error si no tenemos api key', async() => {
        const resp = await getImagen();  
        
        expect ( resp ).toBe('No se encontro la imagen');
    });
    
})
