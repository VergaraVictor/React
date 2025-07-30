import { fireEvent, render, screen } from '@testing-library/react';
import { MultipleCustomHooks } from "../../src/03-examples/MultipleCustomHooks";
import { useCounter, useFetch } from '../../src/Hooks';

jest.mock('../../src/Hooks/useFetch');
jest.mock('../../src/Hooks/useCounter');

describe('Pruebas en <MultipleCustomHooks />', () => {

    const mockIncrement = jest.fn();
    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement
    });

    beforeEach( () => {
        jest.clearAllMocks();
    });

    test('debe de mostrar el componente por defecto', () => {

        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null
        });
        
        render( <MultipleCustomHooks /> );

        expect( screen.getByText('Cargando') );
        expect( screen.getByText('Información de Pokémon') );

        const nextButton = screen.getByRole('button',{ name: 'Siguiente' });
        // expect(nextButton.disabled).toBeTruthy();
        // screen.debug();
    });

    test('debe de mostrar un Pokémon', () => {
        
        const mockPokemonData = {
            name: 'pikachu',
            sprites: {
                front_default: 'front_url',
                front_shiny: 'front_shiny_url',
                back_default: 'back_url',
                back_shiny: 'back_shiny_url'
            }
        };

        useFetch.mockReturnValue({
            data: [{ author: 'Victor', quote: 'Hola Mundo' }],
            isLoading: false,
            hasError: null
        });

        useFetch.mockReturnValue({
            data: mockPokemonData,
            isLoading: false,
            hasError: null
        });

        render( <MultipleCustomHooks /> );
        
        // Check if Pokémon name is displayed
        expect(screen.getByText(mockPokemonData.name));
        
        const nextButton = screen.getByRole('button', { name: 'Siguiente' });
        expect(nextButton.disabled).toBeFalsy();
    });
    

    test('debe de llamar función de incrementar ', () => {

        const mockPokemonData = {
            name: 'pikachu',
            sprites: {
                front_default: 'front_url',
                front_shiny: 'front_shiny_url',
                back_default: 'back_url',
                back_shiny: 'back_shiny_url'
            }
        };

        useFetch.mockReturnValue({
            data: [{ author: 'Victor', quote: 'Hola Mundo' }],
            isLoading: false,
            hasError: null
        });

        useFetch.mockReturnValue({
            data: mockPokemonData,
            isLoading: false,
            hasError: null
        });

        render( <MultipleCustomHooks /> );
        const nextButton = screen.getByRole('button', { name: 'Siguiente' });
        fireEvent.click( nextButton );

        // expect(...).toHaveBeenCalled();
    })
    

});
