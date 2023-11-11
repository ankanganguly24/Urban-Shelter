import React from 'react'
import { useSelector } from 'react-redux'

const Profile = () => {
  const currentUser = useSelector((state) => state.user)
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-4xl font-bold text-center text-brown'>Profile</h1>
      <form className='flex flex-col gap-4'>
        <img src={currentUser.avatar} alt="Noimage" className='rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2'/>
        <input type="text" placeholder='Username' id="username" className='border p-3 rounded-lg'/>
        <input type="email" placeholder='Email' 
         id="email" className='border p-3 rounded-lg'/>
        <input type="password" placeholder='Password' id="password" className='border p-3 rounded-lg'/>
      
      <button className='bg-lightbrown font-bold rounded-lg text-brown '>Update</button>
      </form>
      <div className='flex justify-between mt-4'>
        <span className='cursor-pointer text-red-700 font-semibold'>
          Delete Account!
        </span>
        <span className='cursor-pointer text-red-700 font-semibold'>
          Sign-Out
        </span>
      </div>
    </div>
  )
}

export default Profile