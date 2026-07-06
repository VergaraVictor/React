import { render, screen } from "@testing-library/react";
import { describe, test } from "vitest";
import { SearchControls } from "./SearchControls";
import { MemoryRouter } from "react-router";


const renderWithRouter = ( initialEntries: string[] = ['/'] ) => {

    return render(
        <MemoryRouter initialEntries={initialEntries}>
            <SearchControls />
        </MemoryRouter>
    )
}

describe('SearchControls', () => {
    test('should render SearchControls with default values', () => {
        renderWithRouter();

        screen.debug();
    });
});
