import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate= useNavigate()
  
  return (
    <div className='bg-cover h-[580px]' style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/elegant-restaurant-with-wooden-tables_1203-567.jpg?w=826&t=st=1685536697~exp=1685537297~hmac=fee269961c954c4f763162ae4de5f8fd1daae149fd62b589c9d342614624b911)' }}>
      <div className='flex pt-32 px-10 gap-16'>
        <div className='text-white w-1/2 px-16'>
          <h1 className='font-bold text-4xl mb-16'>Discover a Smarter Way to Stay at VIT Hostels</h1>
          <p>At VIT Hostel Management, we believe in making your experience hassle-free and convenient. That's why we have introduced our new housekeeping services platform, designed to provide you with a smarter way to manage your housekeeping needs. Sign up and gain exclusive access to a range of benefits</p>
        </div>
        <div className='w-1/3'>
            <div className='bg-white p-8 rounded-md shadow-lg shadow-purple-200'>
                <h1 className='text-2xl font-bold pb-8 text-center'>Login/SignUp</h1>
                <form className='border-black-100 px-4'>
                  <p>Username</p>
                  <input type='text' placeholder='Your username' className='my-4 border-b-2 w-full outline-none'></input>
                  <p>Password</p>
                  <input type='password' placeholder='Your password' className='my-4 border-b-2 w-full outline-none'></input>
                  <button className='btn btn-lg bg-purple-400 rounded-md text-white text-center py-2 w-full mt-4'>Login</button>
                </form>
                <p className='text-center mt-4 cursor-pointer underline' onClick={()=>navigate('/')}>Go to home page</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Login