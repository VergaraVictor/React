import { render, screen } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';

describe('Pruebasa en <FirstApp />', () => {

    const title = 'Hola, Soy Goku';
    const subTitle = 'Soy un subtitulo';    
    // const name = 'Víctor Vergara';

    test('debe de hacer match en el snapshot', () => {
        
        const { container } = render( <FirstApp title={ title } /> );
        expect ( container ).toMatchSnapshot();
        
    });

    test('debe de mostrar el mensaje "Hola, Soy Goku"', () => {
        
        render( <FirstApp title={ title } /> );
        expect( screen.getByText(title) ).toBeTruthy();
        // screen.debug(); para ver el objeto

    });

    test('debe de mostrar el titulo en un h1', () => {
        
        render( <FirstApp title={ title } /> );
        expect( screen.getByRole('heading', { level: 1 }).innerHTML ).toContain( title );

    });

    test('debe de mostrar el subtitulo enviado por props ', () => {
        
        render( 
            <FirstApp 
                title={ title }
                subTitle={ subTitle } 
            /> 
        );

        expect( screen.getAllByText(subTitle).length ).toBe(2);
    })
    

});
