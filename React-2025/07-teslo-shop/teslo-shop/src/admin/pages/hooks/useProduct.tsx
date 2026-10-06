import { useQuery } from "@tanstack/react-query";


export const useProduct = (id: string) => {

    const query = useQuery({
        queryKey: ['product', { id }],
        queryFn: () => getProductByIdAction(id),
        retry: false,
        staleTime: 1000 * 60 * 5, // 5 minutes
        // enabled: !!id,
    })

    // TODO: mutación

    return {
        ...query,
    }
}

async function getProductByIdAction(id: string): Promise<any> {
    const apiUrl = import.meta.env.VITE_API_URL;

    if (!apiUrl) {
        throw new Error("VITE_API_URL is not configured.");
    }

    const response = await fetch(`${apiUrl.replace(/\/$/, '')}/products/${encodeURIComponent(id)}`);

    if (!response.ok) {
        throw new Error(`Could not load product (${response.status}).`);
    }

    return response.json();
}
