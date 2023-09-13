import React from 'react'
import Card from '../Components/Card'
import { useOdontoStates } from '../Context/Context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const {odontologos} = useOdontoStates()
  return (
    <main className="" >
      {odontologos.map (odontologo => (<Card odontologo={odontologo} key={odontologo.id}/>))}
    </main>
  )
}

export default Home