import { describe, test } from "vitest";
import { render, screen } from '@testing-library/react';
import { MyAwesomeApp } from "./MyAwesomeApp";



describe('MyAwesomeApp', () => {
    test('should render firstName and lastName', () => {
        // console.log(document.body);
        render(<MyAwesomeApp />);

        screen.debug();

        // console.log(container.innerHTML);
    });
});
