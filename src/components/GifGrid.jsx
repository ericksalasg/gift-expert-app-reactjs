import {GifItem} from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";


export const GifGrid = ({category}) => {

    const { images, isLoading } = useFetchGifs(category);


    return (
        <>
            <h3>{category}</h3>

        {
            isLoading && ( <div className="loader__container"><span className="loader"></span></div> )
        }

            {/* Mostrar titulos */}
            <div className="card-grid">
            {
                images.map((image) => 
                    ( 
                        <GifItem
                            key={image.id}
                            {...image}
                                />
                    )
                )
            
            }
            </div>
        </>
    )
}
