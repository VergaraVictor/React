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

    const handleSearch = (query: string = '') => {

        // Convertir el query a minúsculas y eliminar espacios en blanco
        query = query.trim().toLocaleLowerCase();
        // Validar que el query no esté vacío
        if (query.length === 0) return;
        // Evitar búsquedas duplicadas verificando si el término ya existe en previousTerms ( si existe, no hacer nada )
        if (previousTerms.includes(query)) return;
        // Actualizar previousTerms agregando el nuevo término al inicio y limitando a 8 elementos máximo, es decir no puede ser un arreglo de más de 8.
        // const currentTerms = previousTerms.slice(0.6);
        // currentTerms.unshift(query)

        setPreviousTerms([query, ...previousTerms].splice(0, 8));
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
            <SearchBar
                placeholder="Busca lo que quieras"
                onQuery={handleSearch}
            />

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
