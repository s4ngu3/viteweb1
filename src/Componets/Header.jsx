import React, { useState } from 'react'
import logo from './../assets/logo.png'
import person from './../assets/person.png'
import { BiSolidBible } from "react-icons/bi";

import { MdTv, MdChurch, MdPerson, MdMusicNote, MdOutlineSearch  } from "react-icons/md";
import HeaderItem from './HeaderItem';
import { TbDotsVertical, TbUserEdit } from "react-icons/tb";
import { BsCalendarDay } from "react-icons/bs";
import { FaTheaterMasks } from "react-icons/fa";
import { FaMusic } from "react-icons/fa6";
import { MdFestival } from "react-icons/md";
function Header() {
  const [toggle, settoggle] = useState(false)

  const menu = [

    { name: 'Início', icon: MdTv },

    { name: 'Procurar', icon: MdOutlineSearch },

    { name: 'Agenda', icon: BsCalendarDay },

    { name: 'Teatro', icon: FaTheaterMasks },

    { name: 'Música', icon: FaMusic },

    { name: 'Shows', icon: MdFestival },

  ]


  return (
    <div className='flex items-center justify-between p-4'>
      <div className='flex gap-8 items-center'>

        <img src={logo} className='w-[100px] md:w-[200px] object-cover m-2' />
        <div className='hidden md:flex gap-8 '>
          {menu.map((item,index) => (
            <HeaderItem key = {index} name={item.name} Icon={item.icon} />

          ))}

        </div>
        <div className='flex gap-5 md:hidden '>
          {menu.map((item, index) => index < 3 && (
            <HeaderItem key = {index} name={''} Icon={item.icon} />

          ))}
          <div className='md:hidden' onClick={ ()=>settoggle(!toggle)}>
            <HeaderItem name={''} Icon={TbDotsVertical} />
            {toggle ? (<div className='absolute mt-3 bg-slate-200 p-3 px-5 py-3'>

              {menu.map((item, index) => index > 2 && (
                <HeaderItem key = {index} name={item.name} Icon={item.icon} />

              ))}

            </div>) : <></>
            }
          </div>

        </div>
      </div>
      <div>

      </div>
      <img src={person} className='w-10px rounded-full bg-slate-400' />
    </div>
  )
}

export default Header