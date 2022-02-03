export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=6eW1sOnQOE5BUOtyoCej5uTXe9lueqFu`;
    const resp = await fetch(url);
    const {data} = await resp.json(); //recibimos la respuesta en formato json
    
    const gifs = data.map( (img) => {    //mutar el arreglo para que sea mas facil de ver/leer
        return {
            img: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
    
    return gifs;
}

