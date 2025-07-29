import { act, renderHook } from '@testing-library/react';
import { useForm } from '../../src/Hooks/useForm';

describe('Pruebas en useForm', () => {

    const initialForm = {
        name: 'Victor',
        email: 'victor@victor.com'
    }

    test('debe de regresar la información por defecto', () => {
        
        const { result } = renderHook( () => useForm(initialForm) );
        expect(result.current).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onInputChange: expect.any( Function ),
            onResetForm: expect.any( Function ),
        });
    });
    
    test('debe de cambiar el nombre del formulario', () => {

        const newValue = 'Juan';
        // Montar el hook
        const { result } = renderHook( () => useForm(initialForm) );
        // onIputChange() 
        const { onInputChange } = result.current;
        // act, event...
        act( () =>{
            onInputChange({ target: { name: 'name', value: newValue } });
        });
        // Expect, result.current.name === Juan
        // Expect, result.current.formState.name === Juan
        expect( result.current.name ).toBe( newValue );
        expect( result.current.formState.name ).toBe( newValue );

    });

    test('debe de realizar el reset del formulario', () => {

        const newValue = 'Juan';
        // Montar el hook
        const { result } = renderHook( () => useForm(initialForm) );
        // onIputChange() 
        const { onInputChange, onResetForm } = result.current;
        // act, event...
        act( () =>{
            onInputChange({ target: { name: 'name', value: newValue } });
            onResetForm();
        });

        expect( result.current.name ).toBe( initialForm.name );
        expect( result.current.formState.name ).toBe( initialForm.name );

    })
    

});
