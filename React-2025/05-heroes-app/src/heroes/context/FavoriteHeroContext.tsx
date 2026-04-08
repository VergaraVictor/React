import { createContext, useState, type PropsWithChildren } from "react";
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

export const FavoriteHeroProvider = ({ children }: PropsWithChildren) => {

    const [favorites, setFavorites] = useState<Hero[]>([]);

    const toogleFavorite = (hero: Hero) => {
        const heroExist = favorites.find((h) => h.id === hero.id);

        if (heroExist) {
            const newFavorites = favorites.filter((h) => h.id !== hero.id);
            setFavorites(newFavorites);
            return;
        }

        setFavorites([...favorites, hero]);
    }

    return (
        <FavoriteHeroContext
            value={{
                //state
                favoriteCount: 0,
                favorites: [],
                //Methods
                isFavorite: () => { },
                toogleFavorite: toogleFavorite,
            }}
        >
            {children}
        </FavoriteHeroContext>
    );
};
