import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = () => {

    const [categorias, setCategorias] = useState(['One Piece']);

    // const handleAdd = () => {
    //     // setCategorias([...categorias, 'Hunter X Hunter']);
    //     setCategorias(cats => [...cats, 'Hunter x Hunter']);
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategorias={setCategorias} />
            <hr></hr>

            <ol>
                {
                    categorias.map(categoria =>
                        <GifGrid
                            key={categoria}
                            categoria={categoria}
                        />
                    )
                }
            </ol>

        </>
    )

}

export default GifExpertApp;