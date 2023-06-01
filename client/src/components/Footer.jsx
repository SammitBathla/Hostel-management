import React from 'react'
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn
} from "react-icons/fa"


const Footer = () => {
  return (
   <div className='bg-sky-700 text-white'>
   <div className='grid grid-cols-3 gap-24  mt-24 px-12 text-center pt-8'>
      <div>
        <h3 className='font-bold pb-4 text-2xl'>Useful links</h3>
        <ul>
          <li>Privacy Policy</li>
          <li>Services</li>
          <li>Amenities</li>
          <li>Gallery</li>
        </ul>
      </div>
      <div className=''>
        <h3 className='font-bold pb-4 text-2xl'>Contact</h3>
        <p>Men's Indoor stadium, VIT, Katpadi, Vellore, Tamil Nadu</p>
        <p>801456</p>  
      </div>
      <div className=''>
        <h3 className='font-bold pb-4 text-2xl'>Connect</h3>
        <div className='flex gap-8 ml-16'>
          <span>
            <FaFacebookF size={24} className='text-white'/>
          </span>
          <span>
            <FaTwitter size={24} className='text-white'/>
          </span>
          <span>
            <FaInstagram size={24} className='text-white'/>
          </span>
          <span>
            <FaLinkedinIn size={24} className='text-white'/>
          </span>
        </div>
      </div>
      </div>
      <div className='bg-slate-200 border-t-2 border-slate-400 mt-6 py-2 text-blue-900'>
        <p className='pl-12'>© Copyrights 2023 - 2024. VIT Hostel. All Rights Reserved.</p>
      </div>
   </div>
  )
}

export default Footer