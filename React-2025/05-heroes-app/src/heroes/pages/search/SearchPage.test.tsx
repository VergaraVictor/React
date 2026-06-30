import { render } from "@testing-library/react";
import { beforeEach, describe, expect, test, vi } from "vitest";
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

const renderSearchPage = (initialEntries: string[] = ['/']) => {
    return render(
        <MemoryRouter initialEntries={initialEntries}>
            <QueryClientProvider client={queryClient}>
                <SearchPage />
            </QueryClientProvider>
        </MemoryRouter>
    );
};

describe('searchPage', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    test('should render searchPage with defaults values', () => {
        const { container } = renderSearchPage();

        expect(mockSearchHeroesAction).toHaveBeenCalledWith({
            name: undefined,
            strength: undefined,
        });

        expect(container).toMatchSnapshot();
    });

    test('should call search action with name parameter', () => {
        const { container } = renderSearchPage(['/search?name= superman']);

        expect(mockSearchHeroesAction).toHaveBeenCalledWith({
            name:' superman',
            strength: undefined,
        });

        expect(container).toMatchSnapshot();
    });
});