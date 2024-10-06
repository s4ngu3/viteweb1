import React, { useEffect, useRef, useState } from 'react'

import GlobalApi from '../Services/GlobalApi'



import { MdChevronLeft, MdChevronRight } from "react-icons/md";


const fotourl = 'https://api.judah.tv/uploads'

const tamanhotela = window.innerWidth;


function Slider() {

    const barref = useRef();

    const [trailerList, settrailerList] = useState([])
    useEffect(() => {
        getTrailer()
    }, [])

    const getTrailer = () => {

        GlobalApi.getTrailer.then(resp => {
            console.log(resp.data)
            settrailerList(resp.data)
        })
    }

    const btesquerda = (barra) => {

        barra.scrollLeft -= tamanhotela - 110
    }
    const btdireita = (barra) => {

        barra.scrollLeft += tamanhotela - 110
    }


    return (

        <div>
            <MdChevronLeft className='hidden md:block  text-black text-[32px] absolute mx-8 mt-[200px] cursor-pointer' onClick={() => { btesquerda(barref.current) }} />

            <MdChevronRight className='hidden md:block text-black text-[32px] absolute mx-8 mt-[200px] cursor-pointer right-0' onClick={() => { btdireita(barref.current) }} />

            <div className='flex overflow-x-auto w-full px-16 py-4 scrollbar-hide scroll-smooth' ref={barref}>
                {trailerList.map((item, index) => (
                    <img key={index} src={`${fotourl}/${item.fototv}.jpg`} className='min-w-full h-[200px] md:h-[400px] object-cover object-left-top mr-5 rounded-md hover:border-[4px] border-gray-400 transition-all duration-100 ease-in' />
                ))}

            </div>

        </div>

    )
}

export default Slider