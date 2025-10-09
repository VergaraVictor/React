import { useState } from "react"
import { getGifsByQuery } from "../actions/get-gifs-by-query.actions";
import type { Gif } from "../interfaces/gif.interface";

const gifsCache: Record<string, Gif[]> = {};

export const useGifs = () => {

    const [gifs, setGifs] = useState<Gif[]>([])
    const [previousTerms, setPreviousTerms] = useState<string[]>([]);


    const handleTermClicked = async (term: string) => {
        if (gifsCache[term]) {
            setGifs(gifsCache[term]);
            return;
        }

        const gifs = await getGifsByQuery(term);
        setGifs(gifs);
    };

    const handleSearch = async (query: string = '') => {

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

        const gifs = await getGifsByQuery(query);
        setGifs(gifs);

        gifsCache[query] = gifs;
        console.log(gifsCache);

    };

    return {
        // props
        gifs,

        // Methods
        handleSearch,
        handleTermClicked,
        previousTerms,
    };
};

