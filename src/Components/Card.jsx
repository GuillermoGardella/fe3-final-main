import React,{ useEffect, useState}from 'react'
import { Link } from 'react-router-dom'

const Card = () => {
    
  const [lista, setLista] = useState([])
  const url = 'https://jsonplaceholder.typicode.com/users'
  useEffect(() => {
    fetch (url).then((res) => {
      return res.json()
    }).then((data) => {
      setLista (data)
    })
  },[])
    
  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
  }

  return (
    <div style={{display: 'flex', justifyContent: 'center'}} className="card">
        {lista.map(user => (
          <Link to={url + user.id} key={user.id}>
                <div style={{margin: 25}} >
                <img src={require("../img/doctor.jpg")} alt="Card" width={200}/>
                <p>id: {user.id}</p>
                <p>Nombre y apellido: {user.name}</p>
                <p>nombre: {user.userName}</p>      
              </div>
              <div style={{display: 'flex', justifyContent: 'center'}}>
                <button onClick={addFav} className="favButton">⭐</button>
              </div>
          </Link>
      ))}

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        
    </div>
  );
};

export default Card;
