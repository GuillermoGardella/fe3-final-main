import React, {useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const [lista, setLista] = useState({})

  const {id} = useParams()
  console.log(id)

  const url = `https://jsonplaceholder.typicode.com/users/:${id}`
  console.log(url);
  useEffect(() => {
    fetch (url).then((res) => {
      return res.json()
    }).then((data) => {
      setLista (data)
    })
  },[])


 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  return (
    <>
      <h1>Detail Dentist id </h1>
      <div>
        <h4>{lista.name}</h4>
      <img src={require("../img/doctor.jpg")} alt="Card" width={200}/>
      {/* <button onClick={() => setFavs([...favs, recipe])}>⭐</button> */}
    </div>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  )
}

export default Detail