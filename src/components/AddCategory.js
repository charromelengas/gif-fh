import React, {useState} from 'react'

export const AddCategory = ({setCategories}) => {
    const [inputValue, setInputValue] = useState('');
    
    const handleInputChange = (e) => {
        //console.log(e.target.value) inputValue es la variable que contiene lo que el usuario escribio
        setInputValue(e.target.value)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log('Submit hecho');
        if(inputValue.trim().length > 2){
            setCategories( (cats) => [ inputValue, ...cats]); //este callback lo traemos desde giftexpertapp.js
            setInputValue('')
        }
    }

    return (
        <div className="animate__fadeInDownBig">
        <form onSubmit={handleSubmit} >
            <input
                type="text"
                placeholder='Ingresa algo aquí'
                value={inputValue}
                onChange={ handleInputChange }
            />
        </form>

        </div>
    )
}

export default AddCategory