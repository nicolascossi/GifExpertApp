import { useState, useEffect } from "react"
import { getGifs } from '../helpers/GetGifs'


const useFetchGifs = (category) => {

    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState( true)

    const getImages = async() => {
        const newImages = await getGifs(category)
        setImages(newImages)
        setIsLoading(false)
    }

    // Utilizamos useEffect para hacer la peticion HTTP una sola vez
    useEffect( () => {
        // Traemos los gifs con este helpers
        getImages()
    },[])

    return {
        images,
        isLoading
    }

}

export default useFetchGifs
