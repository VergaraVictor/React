
import { use } from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { FavoriteHeroContext, FavoriteHeroProvider } from "./FavoriteHeroContext";

const TestComponent = () => {
    
    const { favoriteCount, favorites, isFavorite, toggleFavorite } = 
        use(FavoriteHeroContext);
    
    return (
        <div>
            <div data-testid="favorite-count">{ favoriteCount }</div>

            <div data-testid="favorites-list">
                { 
                    favorites.map((hero) => (
                        <div key={hero.id} data-testid={`hero-${hero.id}`}>
                            {hero.name}
                        </div>
                    )) 
                }
            </div>
        </div>
    );
};

const renderContextTest = () => {

    return render(
        <FavoriteHeroProvider>
            <TestComponent />
        </FavoriteHeroProvider>
    );

}

describe('FavoriteHeroContext', () => {

    test('should initialize with default values', () => {
        
        renderContextTest();

        screen.debug();

        expect(screen.getByTestId('favorite-count').textContent).toBe('0');
        expect(screen.getByTestId('favorites-list').children.length).toBe(0);
    });

});