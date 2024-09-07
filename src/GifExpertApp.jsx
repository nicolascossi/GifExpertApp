import { useState } from "react"
import {AddCategory, GifGrid} from '../src/components'


export const GifExpertApp = () => {

    const [categories, setCategories] = useState([])

    const onAddCategory = (nuevoElemento) => {

        // Verificamos que la categoria no exista asi no hay duplicados lo paso a upperCase para que no sea caseSensitive
        const existe = categories.includes(nuevoElemento.toUpperCase())

        // Agregamos el elemento a nuestro arreglo si es que no existe, si imprime tira errar en consola
        if(!existe){
            setCategories([nuevoElemento, ...categories])
        } else {
            return;
        }

        
    }

    return (
    <>
    <div className="header">
        {/** TITULO */}
        <h1>GIF Searcher</h1>

        {/** INPUT PASAMOS DESDE EL COMPONENTE PADRE AL HIJO onAddCategory */} 
        <AddCategory 
            onAddCategory={onAddCategory}
        /> 
    </div>
   

    {/** LISTADO GIFS */}

        {
        
        categories.map((category) => (
            <GifGrid 
            key={category} 
            category={category}
            />
        ))
        }
        {/** GIF LIST */}
    </>
  )
}

export default GifExpertApp
