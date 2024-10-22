import React from 'react'
import CanaisLista from './CanaisLista'


function CategoriaLista() {


  const categorias = [
    { "id": 1, "name": "Teatro" },
    { "id": 2, "name": "Música" },
    { "id": 3, "name": "Shows" },
  ]

  return (
    <div>

      {categorias.map((item, index) => (
        <div key={index} className='p-4 md:p-4' >
          <h2 className='text-[30px] text-violet-300 font-bold '>{item.name}</h2>
          <CanaisLista lista={item.name}/>
        </div>
      ))}



    </div>
  )
}

export default CategoriaLista