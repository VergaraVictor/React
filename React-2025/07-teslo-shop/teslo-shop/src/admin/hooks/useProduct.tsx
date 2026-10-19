import { useMutation, useQuery } from '@tanstack/react-query';
import { getProductByIdAction } from '@/admin/actions/product.action';
import type { Product } from "@/interfaces/product.interface";
import { createUpdateProductAction } from '../actions/create-update-product.actions';



export const useProduct = (id: string) => {

    const query = useQuery({
        queryKey: ['product', { id }],
        queryFn: () => getProductByIdAction(id),
        retry: false,
        staleTime: 1000 * 60 * 5, // 5 minutes
        // enabled: !!id,
    })

    // TODO: mutación
    const mutation = useMutation({
        mutationFn: createUpdateProductAction,
        onSuccess: (product: Product) => {
            console.log('Todo salió bien', product);
            // TODO:
            // Invalidar caché
            // Actualizar queryData
        },
    })

    // const handleSubmitForm = async (productLike: Partial<Product>) => {
    //     console.log({ productLike });
    // };

    return {
        ...query,
        mutation,
    }
}
