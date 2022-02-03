import React, { useState } from 'react';
import { GifCollectionItem } from './GifCollectionItem';
import {useFetchGifs} from '../hooks/useFetchGifs';
export const GifCollection = ({category}) => { 

    //const [images, setImages] = useState([]);
    const {data:images, loading} = useFetchGifs(category);
    /* const getGifs = async() => {
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
          
          console.log(gifs);
          setImages( gifs );
      } */
      //getGifs();
    return (
<>
        <h3>{category}</h3>
        {loading && <p>Cargando</p>}
        <div className="card-grid">
            {
                   images.map( img => (
                       <GifCollectionItem 
                       key={img.img}
                      {...img } />
                   ))
            } 
    </div>
</>

  )
};
