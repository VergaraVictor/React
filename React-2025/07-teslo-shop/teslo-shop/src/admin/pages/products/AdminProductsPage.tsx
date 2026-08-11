import { AdminTitle } from "@/admin/components/AdminTitle"
import { CustomPagination } from "@/components/custom/CustomPagination"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Button } from "@base-ui/react"
import { PlusIcon } from "lucide-react"
import { Link } from "react-router"

export const AdminProductsPage = () => {
    return (
        <>
            <div className="flex justify-between items-center">
                <AdminTitle 
                    title="Productos"
                    subtitle="Aquí puedes ver y administrar tus productos"
                />

                <Link to="/admin/products/new">
                    <Button>
                        <PlusIcon />
                        Nuevo producto
                    </Button>
                </Link>
            </div>

            <Table className="bg-white p-10 shadow-xs border border-gray-200 mb-10">
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">ID</TableHead>
                        <TableHead>Image</TableHead>
                        <TableHead>Nombre</TableHead>
                        <TableHead>Precio</TableHead>
                        <TableHead>Categoría</TableHead>
                        <TableHead>Inventario</TableHead>
                        <TableHead>Tallas</TableHead>
                        <TableHead className="text-right">Acciones</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell className="font-medium">1</TableCell>
                        <TableCell>
                            <img
                                src='https://placehold.co/250x250'
                                alt="Product"
                                className="w-20 h20 object-cover rounder-md"
                            />
                        </TableCell>
                        <TableCell>Product 1</TableCell>
                        <TableCell>$250.00</TableCell>
                        <TableCell>Categoría 1</TableCell>
                        <TableCell>100 stock</TableCell>
                        <TableCell>XS,S,L</TableCell>
                        <TableCell className="text-right">
                            {/* <Link to={`t-shirt-teslo`}> */}
                            <Link to={`/admin/products/t-shirt-teslo`}>
                                Editar
                            </Link>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
            
            <CustomPagination totalPages={10} />
        </>
    )
}