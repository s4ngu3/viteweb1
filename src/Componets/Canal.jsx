import React from 'react'

const fotourl = 'https://api.judah.tv/uploads'

function Canal({item}) {
  return (
    <div className=' hover:scale-110 transition-all duration-100 ease-in' >
 
    <img  src={`${fotourl}/${item.fototv}.jpg`} className='w-[110px] h-[62px]  md:w-[260px]   md:h-[146px] object-cover rounded-lg hover:border-[4px] border-gray-400  cursor-pointer' />
    <h2 className='w-[110px]  md:w-[260px] text-[20px] text-black font-bold mt-4'>{item.username}</h2> 
</div>
  )
}

export default Canal