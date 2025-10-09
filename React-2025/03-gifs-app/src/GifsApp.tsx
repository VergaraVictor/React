import { GifList } from "./gifs/components/GifList";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { useGifs } from "./gifs/hooks/useGifs";
import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";


export const GifsApp = () => {

    const { gifs, handleTermClicked, handleSearch, previousTerms } = useGifs();

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
            <GifList gifs={gifs} />
        </>
    )
};
