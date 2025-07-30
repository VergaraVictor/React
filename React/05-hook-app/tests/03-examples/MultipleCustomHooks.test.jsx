import { render, screen } from '@testing-library/react';
import { MultipleCustomHooks } from "../../src/03-examples/MultipleCustomHooks";

describe('Pruebas en <MultipleCustomHooks />', () => {

    test('debe de mostrar el componente por defecto', () => {
        
        render( <MultipleCustomHooks /> );

        expect( screen.getByText('Cargando') );
        expect( screen.getByText('Información de Pokémon') );

        const nextButton = screen.getByRole('button',{ name: 'Siguiente' });
        console.log(nextButton.disabled);
        
        // screen.debug();

    });
});
