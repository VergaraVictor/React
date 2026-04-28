import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { HeroStats } from "@/heroes/components/HeroStats";
import { SearchControls } from "./ui/SearchControls";
import { CustomBreadcrumbs } from "@/components/custom/CustomBreadcrumbs";
import { HeroGrid } from "@/heroes/components/HeroGrid";
import { useSearchParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { searchHeroesAction } from "@/heroes/actions/search-heros.actions";

export const SearchPage = () => {

    const [ searchParams ] = useSearchParams();

    const name = searchParams.get('name') ?? undefined;
    const strength = searchParams.get('strength') ?? undefined;

    // TODO: useQuery
    const { data: heroes = [] } = useQuery({
        queryKey: ['heroes', 'search', { name, strength }],
        queryFn: () => searchHeroesAction({ name, strength }),
        staleTime: 1000 * 60 * 5, // 5 minutos
    });

    return (
        <>
            <CustomJumbotron
                title="Búsqueda de SuperHéroes"
                description="Descubre, explora y administra superhéroes y villanos"
            />

            <CustomBreadcrumbs currentPage="Buscador de héroes"
            // breadcrumbs={
            //     [
            //         { label: 'Home1', to: '/' },
            //         { label: 'Home2', to: '/' },
            //         { label: 'Home3', to: '/' },
            //     ]
            // }
            />

            {/* Stats Dashboard */}
            <HeroStats />

            {/* Filter and search */}
            <SearchControls />

            {/* */}
            <HeroGrid heroes={heroes}/>
        </>
    )
};

export default SearchPage;
