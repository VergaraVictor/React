import { render } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import SearchPage from "./SearchPage";
import { MemoryRouter } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { searchHeroesAction } from "@/heroes/actions/search-heros.actions";

vi.mock('@/heroes/actions/search-heros.actions');
const mockSearchHeroesAction = vi.mocked(searchHeroesAction);

vi.mock('@/components/custom/CustomJumbotron', () => ({
    CustomJumbotron: () => <div data-testid="custom-jumbotrom"></div>
}));


const queryClient = new QueryClient();

const rendeSearchPage = (initialEntries:string[] = ['/']) => {
    return render(
        <MemoryRouter initialEntries={initialEntries}>
            <QueryClientProvider client={queryClient}>
                <SearchPage />
            </QueryClientProvider>
        </MemoryRouter>
    );
};

describe('searchPage', () => {
    test('should render searchPage with defaults values', () => {
        const { container } = rendeSearchPage();

        expect(mockSearchHeroesAction).toHaveBeenCalledWith({
            name: undefined,
            strength: undefined,
        });

        expect(container).toMatchSnapshot();
    });
});