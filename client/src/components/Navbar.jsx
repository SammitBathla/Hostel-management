import React from 'react'
import logo from '../assets/logo-black.png'
import { useRef } from 'react';
import { useContext } from 'react';
import {Context} from '../utils/context';
import {useNavigate} from 'react-router-dom'

const Navbar = () => {
  const {handleClick, scrollToRefs} = useContext(Context)
  const navigate= useNavigate()
  
  return (
    <nav className='bg-white w-full z-10 fixed border-b shadow-lg'>
      <div className='w-full px-10 pt-6 -mb-16' ref={scrollToRefs.ref5}>
        <div className='flex justify-between text-black'>
        <div className='relative bottom-12'><img src={logo} width='160px'/></div>
          <ul className='flex w-3/5 justify-between'>
            <li className='cursor-pointer hover:text-blue-400' onClick={()=>navigate("/")}>Home</li>
            <li onClick={()=>handleClick('ref1')} className='cursor-pointer hover:text-blue-400'>About Us</li>
            <li onClick={()=>handleClick('ref2')} className='cursor-pointer hover:text-blue-400'>Services</li>
            <li onClick={()=>handleClick('ref3')} className='cursor-pointer hover:text-blue-400'>Complaints</li>
            <li onClick={()=>handleClick('ref4')} className='cursor-pointer hover:text-blue-400'>Amenities</li>
            <li onClick={()=>handleClick('ref6')} className='cursor-pointer hover:text-blue-400'>Gallery</li>
            <li onClick={()=>handleClick('ref7')} className='cursor-pointer hover:text-blue-400'>Contact Us</li>
          </ul>
          <ul>
            <li><button onClick={()=>navigate('/login')}>Login | SignUp</button></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar