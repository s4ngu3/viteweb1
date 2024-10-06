import { useState } from 'react'

import './App.css'
import Header from './Componets/Header'
import Slider from './Componets/Slider'
import CategoriaLista from './Componets/CategoriaLista'

function App() {
  const [count, setCount] = useState(0)

  return (

    <div className="">
      <Header></Header>
      <Slider></Slider>
      <CategoriaLista></CategoriaLista>
    
    </div>


  )
}

export default App
