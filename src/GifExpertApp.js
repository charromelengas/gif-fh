import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifCollection } from './components/GifCollection'

const GifExpertApp = () => {
    //const categories = ['Goku', 'Vegeta', 'Piccolo']
    const [categories, setCategories] = useState(['Ok']) //Estos valores son por 'defecto'
    
  /*   const handleAdd = () => {
        setCategories([...categories, 'Gohan'])
        //setCategories( categorias => [...categorias, 'Gohan'])
    } */

    return (
        <>

            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr></hr>

            <ol>
               {
                       categories.map( (category) => (
                           <GifCollection 
                           key={category}
                           category={category} />
                       ))
               }              
            </ol>
        </>
    )
}

export default GifExpertApp;

//rafc