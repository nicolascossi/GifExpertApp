
import GifItem from "./GifItem"
import useFetchGifs from "../hooks/useFetchGifs";


export default function GifGrid({category}) {

    const {images, isLoading } = useFetchGifs(category)

  return (
    <>
        <h3>{category}</h3>

       {
        isLoading && ( <h2>CARGANDO...</h2> )
       }

        <div className="card-grid">
            {
            images.map((image) => {
                return (
                    <GifItem 
                        key={image.id}
                        {...image}
                    />
                );
            })
            
            }
        </div>
        
        

    </>
  )
}
