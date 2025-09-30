import { useState } from "react";
import { GifList } from "./gifs/components/GifList";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { mockGifs } from "./mock-data/gifs.mock";
import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";

export const GifsApp = () => {
    const [previousTerms, setPreviousTerms] = useState(['dragon ball z']);

    const handleTermClicked = (term: string) => {
        console.log({ term });
    };

    return (
        <>
            {/* Header */}
            <CustomHeader
                title="Buscador de Gifs"
                description="Descubre y comparte el Gif perfecto"
            />

            {/* Search */}
            {/* SearchBar */}
            <SearchBar placeholder="Busca lo que quieras" />

            {/* Busquedas Previas */}
            {/* PreviousSearches */}
            <PreviousSearches
                searches={previousTerms}
                onLabelClicked={handleTermClicked}
            />

            {/* Gifs */}
            {/* GifList: Props => gifs: Gif[] */}
            <GifList gifs={mockGifs} />
        </>
    )
};
