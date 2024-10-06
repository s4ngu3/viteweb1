import React, { useEffect, useRef, useState } from 'react'

import GlobalApi from '../Services/GlobalApi'

import { MdChevronLeft, MdChevronRight } from "react-icons/md";

import Canal from './Canal'
 

function CanaisLista({ lista }) {

    const barref = useRef();

    const [canaislist, setcanaislist] = useState([])
    useEffect(() => {
        getcanais()
    }, [])

    const getcanais = () => {

        GlobalApi.getCanais(lista).then(resp => {
            console.log(resp.data)
            setcanaislist(resp.data)
        })
    }

    const btesquerda = (barra) => {

        barra.scrollLeft -= 400
    }
    const btdireita = (barra) => {

        barra.scrollLeft += 400
    }


    return (
        <div>
        <MdChevronLeft className='hidden md:block  text-black text-[32px] absolute mx-1 mt-[100px] cursor-pointer' onClick={() => { btesquerda(barref.current) }} />
        <MdChevronRight className='hidden md:block text-black text-[32px] absolute mx-4 mt-[100px] cursor-pointer right-0' onClick={() => { btdireita(barref.current) }} />

        <div className='flex gap-8 overflow-x-auto scrollbar-hide scroll-smooth p-10' ref={barref}>


            {canaislist.map((item, index) => (
                <div key={index}>

                    <Canal item={item} />
                </div>



            ))}
        </div>
        
             </div>

    )
}

export default CanaisLista