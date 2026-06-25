import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, test, vi } from "vitest";
import { HomePage } from "./HomePage";
import { MemoryRouter } from "react-router";
import { usePaginatedHero } from "@/heroes/hooks/usePaginatedHero";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FavoriteHeroProvider } from "@/heroes/context/FavoriteHeroContext";

vi.mock('@/heroes/hooks/usePaginatedHero');

const mockUsePaginatedHero = vi.mocked(usePaginatedHero);

mockUsePaginatedHero.mockReturnValue({
    data: [],
    isLoading: false,
    isError: false,
    isSuccess: true
}as unknown as ReturnType<typeof mockUsePaginatedHero>); 

const queryClient = new QueryClient();

const renderHomePage = (initialEntries:string[] = ['/']) => {
    return render(
        <MemoryRouter initialEntries={initialEntries}>
            <FavoriteHeroProvider>
                <QueryClientProvider client={queryClient}>
                    <HomePage />
                </QueryClientProvider>
            </FavoriteHeroProvider>
        </MemoryRouter>
    );
};


describe('HomePage', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    // test('should render HomePage with default values', () => {
    //     const { container } = renderHomePage();
    //     expect(container).toMatchSnapshot();
    // });

    test('should render HomePage with default values', () => {
        renderHomePage();
        
        const allTab = screen.getByRole('tab', { name: /all/i });
        expect(allTab.getAttribute('aria-selected')).toBe('true'); // ✅ sin jest-dom
        
        expect(screen.getByRole('tab', { name: /favorites \(0\)/i })).toBeTruthy();
        expect(screen.getByRole('tab', { name: /heroes/i })).toBeTruthy();
        expect(screen.getByRole('tab', { name: /villains/i })).toBeTruthy();
    });

    test('should call usePaginatedHero with default values', () => {
        renderHomePage();
        expect(mockUsePaginatedHero).toHaveBeenCalledWith(1, 6, 'aa');
    });

    test('should call usePaginatedHero with custom query params', () => {
        renderHomePage(['/?page=2&limit=10&category=villains']);
        expect(mockUsePaginatedHero).toHaveBeenCalledWith(2, 10, 'villains');
    });

    test('should called usePanatedHero with default page and same limit on tab clicked', () => {
        renderHomePage(['/?tab=favorites&page=2&limit=10']);

        // const [allTabs, favoriteTab,  herosTab, villainsTab ] = screen.getAllByRole('tab');
        const [, , , villainsTab ] = screen.getAllByRole('tab');
        
        fireEvent.click(villainsTab);
        expect(mockUsePaginatedHero).toHaveBeenCalledWith(1, 10, 'villain');
    });
});