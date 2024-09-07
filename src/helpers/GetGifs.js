
export const getGifs = async(category) => {

    // Definimos la apiKey y la Url, donde ya nos traemos la categoria, ponemos la api y marcamos que solo queremos 20 gifs con el limit
    const apiKey = 'lIT2mrUbpXdIdPrYANE7luf4YJLtXugf'
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=10`

    // Definimos como respuesta lo que nos devuelve el fetch a la url y deseestructuramos la data en un json
    const resp = await fetch(url)
    const {data} = await resp.json()

    // Definimos un nuevo objeto con cada Gifs trayendonos solamente lo que necesitamos
    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))

    console.log(gifs)
    return(gifs)
}