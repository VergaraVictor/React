import { renderHook } from '@testing-library/react';
import { act } from 'react'; // Explicit import
import { useCounter } from '../../src/Hooks/useCounter';

describe('Pruebas en el useCounter', () => {
    
    test('debe de retornar los valores por defecto', () => {
        
        const { result } = renderHook( () => useCounter() );
        const { counter, decrement, increment, reset } = result.current;

        expect( counter ).toBe(10);
        expect( decrement ).toEqual( expect.any( Function ) );
        expect( increment ).toEqual( expect.any( Function ) );
        expect( reset ).toEqual( expect.any( Function ) );
    });
    
    test('Debe generar el counter con el valor de 100 ', () => {
        
        const { result } = renderHook( () => useCounter(100) );
        const { counter, decrement, increment, reset } = result.current;
        expect( result.current.counter ).toBe(100);

    })
    

});
