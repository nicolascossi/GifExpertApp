import { useState } from "react"


// Le pasamos onAddCategoty desde el elemento padre como una prop
export default function AddCategory({onAddCategory}) {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = ({target}) => {
        setInputValue(target.value)
    }

    const onSubmit = ( event ) => {

        // Prevenimos que no actue por defecto para no recargar la pagina
        event.preventDefault()

        // Borramos espacios vacios adelante y atras de existirs
        const newInputValue = inputValue.trim().toUpperCase()

        // Revisamos que el campo no este vacio
        if (newInputValue.length <= 1) return;

        //Borramos espacion en blanco
        onAddCategory(newInputValue)

        // Limpiamos el input
        setInputValue('')
    }

  return (
    <form onSubmit={onSubmit}>
        <input 
        type="text"
        placeholder="Busque el GIF que desee"
        value={inputValue}
        onChange={ (event) => onInputChange(event) }
     />
    </form>
    
  )
}
