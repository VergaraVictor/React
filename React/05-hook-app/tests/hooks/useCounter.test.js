import { renderHook } from '@testing-library/react';
import { useCounter } from '../../src/Hooks/useCounter';

describe('Pruebas en el useCounter', () => {
    
    test('debe de retornar los valores por defecto', () => {
        
        const { result } = renderHook( () => useCounter() );
        console.log(result);

    });
    
});
