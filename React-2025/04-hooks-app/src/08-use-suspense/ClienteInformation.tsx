import { useEffect } from "react"
import { getUserAction } from "./api/get-user.actions"




export const ClienteInformation = ({ id }: { id: number }) => {

    // const user = await getUserAction(id);


    useEffect(() => {
        getUserAction(id).then(console.log);
    }, [id]);

    return (
        <div className="bg-gradient flex flex-col gap-4">
            <h2 className="text-4xl font-thin text-white">Victor - #123</h2>

            <p className="text-white text-2xl">Ottawa, Canada</p>
            <p className="text-white text-xl">Un Role del Usuario</p>
        </div>
    )
}
