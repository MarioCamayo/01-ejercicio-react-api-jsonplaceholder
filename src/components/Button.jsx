import {useState} from 'react'

export const Button = () =>{
   const [name, setName] = useState('')

   const handleChange = (e)=>{
    //  console.log(e.target.value)
    setName(e.target.value)
  }
  
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      setName(''); // Limpia el input cuando el usuario presiona "Enter"
    }
  };

  // const handleSubmit = () => {
  //   console.log(name);  // Hace algo con el nombre ingresado
  //   setName('');        // Limpia el input después de usar el valor
  // };

   return(
     <div>
       <h1 style={{color:'orange'}}  >{name}</h1>
       <input
        type= 'text'
        value={name}  // Con esto el input refleja el estado del valor}
        onChange= {handleChange}
        onKeyPress={handleKeyPress} // Detecta la tecla "Enter"

        />
        {/* <button onClick={handleSubmit}>Enviar</button> Botón para limpiar el campo */}
        
     </div>
   )
 }