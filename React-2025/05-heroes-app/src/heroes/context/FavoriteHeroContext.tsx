import { createContext, useEffect, useState, type PropsWithChildren } from "react";
import type { Hero } from "../types/hero.interface";

interface FavoriteHeroContextValue {
    //state
    favorites: Hero[];
    favoriteCount: number;

    //Methods
    isFavorite: (hero: Hero) => boolean;
    toogleFavorite: (hero: Hero) => void;
}

export const FavoriteHeroContext = createContext({} as FavoriteHeroContextValue);

const getFavoritesFromLocalStorage = (): Hero[] => {
    const favorites = localStorage.getItem('favorite');
    return favorites ? JSON.parse(favorites) : [];
};

export const FavoriteHeroProvider = ({ children }: PropsWithChildren) => {

    const [favorites, setFavorites] = useState<Hero[]>(getFavoritesFromLocalStorage());

    const toogleFavorite = (hero: Hero) => {
        const heroExist = favorites.find((h) => h.id === hero.id);

        if (heroExist) {
            const newFavorites = favorites.filter((h) => h.id !== hero.id);
            setFavorites(newFavorites);
            return;
        }

        setFavorites([...favorites, hero]);
    }

    const isFavorite = (hero: Hero) => {
        return favorites.some((h) => h.id === hero.id);
    };

    useEffect(() => {
        localStorage.setItem('favorite', JSON.stringify(favorites));
    }, [favorites]);

    return (
        <FavoriteHeroContext
            value={{
                //state
                favoriteCount: favorites.length,
                favorites: favorites,
                //Methods
                isFavorite: isFavorite,
                toogleFavorite: toogleFavorite,
            }}
        >
            {children}
        </FavoriteHeroContext>
    );
};
