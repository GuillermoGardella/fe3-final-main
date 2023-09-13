import React from 'react'
import { Link } from 'react-router-dom'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  
  const enlaces = [
    {titulo: 'Home', route: '/'}, 
    //{titulo: 'Detail', route: '/recipe/:id'}, 
    {titulo: 'favs', route: '/favs'},
    {titulo: 'Contact', route: '/contact'}
  ]

  return (
    
    <nav style={{display: 'flex', }}>
      {enlaces.map((enlace, indice) => (
            <Link to={enlace.route} key={indice}> 
                <h4 style={{margin: 10}} >{enlace.titulo}</h4>
            </Link>
        ))}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button>Change theme</button>
    </nav>
    
  )
}

export default Navbar