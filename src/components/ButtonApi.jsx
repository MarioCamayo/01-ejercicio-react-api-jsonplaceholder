// export const ButtonApi = (props)=>{
     
//   return(
//     <div>
//       <h1>{props.users} </h1>
//       <button onClick= {
//          ()=>{
//            fetch('https://jsonplaceholder.typicode.com/users')
//            .then(res=>res.json())
//            .then(data=>console.log(data))
//          }
//       } >Send</button>
//     </div>
//   )
// }

import  { useState, useEffect } from 'react';
import {VscAccount} from'react-icons/vsc'

export const ButtonApi = ({ users }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const fetchUsers = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const usersData = await response.json();
      setData(usersData);
    } catch (err) {
      setError(err.message);
      console.error('Fetch error:', err);
    }
  };
  
  const clearUsers = () => {
    setData([]); // Esto limpia la lista de usuarios
  };
 

  // useEffect(() => {
  //   fetchUsers(); // Llamar a la API al montar el componente
  // }, []); // El arreglo vacío significa que solo se ejecuta una vez

  return (
    <div>
      <h1>{users}</h1>
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      <ul>
        {data.map(user => (
          <li key={user.id}>{user.name}</li>
          ))}
      </ul>
          <button
           onClick={fetchUsers}>
             <VscAccount className='btnVsc'/>
            Obtener
          </button>
          <button
           onClick={clearUsers}>
          <VscAccount className='btnVsc'/>
           Borrar
          </button>

    </div>
  );
};
