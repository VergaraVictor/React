import { render } from '@testing-library/react';
import { FirstApp } from '../../src/FirstApp';

describe('Pruebasa en <FirstApp />', () => {

    test('debe de hacer match en el snapshot', () => {
        
        const title = 'Hola, Soy Goku';
        // const name = 'Víctor Vergara';
        // const subTitle = 'No hay subtítulo';
        const { container } = render( <FirstApp title={ title } /> );
        
        expect ( container ).toMatchSnapshot();
        
    });

    test('debe de mostrar el título en un h1', () => {
        const title = 'Hola, Soy Goku';
        const { container, getByText } = render( <FirstApp title={ title } /> );
        expect( getByText(title) ).toBeTruthy();

        const h1 = container.querySelector('h1');
        expect(h1.innerHTML).toContain(title);
        

    });
    

});
