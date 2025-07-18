import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe('Prueba en el hook useFetchGifs', () => {

    test('Debe de regresar el estado inicial', () => {
        
        const { result } = renderHook( () => useFetchGifs('One Punch') );
        const { images, isLoading } = result.current;
        // const { images, isLoading } = useFetchGifs();

        expect( images.length ).toBe(0);
        expect( isLoading ).toBeTruthy();

    });

    test('Debe de retornar un arreglo de imagenes y isLoading en false', async() => {
        
        const { result } = renderHook( () => useFetchGifs('One Punch') );
        
        await waitFor(
            () => expect( result.current.images.length ).toBeGreaterThan(0)
        );
        
        const { images, isLoading } = result.current;

        expect( images.length ).toBeGreaterThan(0);
        expect( isLoading ).toBeFalsy();

    });

});
