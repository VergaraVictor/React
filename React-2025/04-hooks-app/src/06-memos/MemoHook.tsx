import { useCallback, useState } from "react";
import { MySubTitle } from "./ui/MySubTitle";
import { MyTitle } from "./ui/MyTitle";

// const handleMyAPICall = (myValue: string) => {
//     console.log('Llamar a mi API ' + myValue);
// }

export const MemoHook = () => {

    const [title, setTitle] = useState('Hola');
    const [subTitle, setSubTitle] = useState('Mundo');


    const handleMyAPICall = useCallback(() => {
        console.log('LLamar a mi API - ', subTitle);
    }, [subTitle]);

    return (
        <div className="bg-gradient flex flex-col gap-4">
            <h1 className="text-2xl font-thin text-white">MemoApp</h1>

            <MyTitle title={title} />
            <MySubTitle
                subtitle={subTitle}
                callMyAPI={handleMyAPICall}
            />

            <h6>Mi Subtítulo</h6>

            <button className="bg-blue-500 text-white px-4 py2 rounded-md cursor-pointer"
                onClick={() => setTitle('Hello, ' + new Date().getTime())}
            >
                Cambiar título
            </button>
            <button className="bg-blue-500 text-white px-4 py2 rounded-md cursor-pointer"
                onClick={() => setSubTitle('world')}
            >
                Cambiar subtitulo
            </button>

        </div>
    );
};