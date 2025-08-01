import React from 'react'
import ProfileImage from '../assets/profile-image.png'
const Home = () => {
  return (
    <div id='home' className='bg-black text-white text-center py-16 w-[100vw] h-[100vh] px-0'>
<img src={ProfileImage} alt="profile image" 
className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105'/>
     <h1 className='text-4xl font-bold'> I'm 
        <span className='text-transparent bg-clip-text  bg-gradient-to-r from-indigo-700 to-purple-600  rounded-half'> Abhay Raj </span>
        ,Full-Stack Developer
 
     </h1>
     <p className='mt-4 text-lg text-gray-300'>
        I specialized in building modern and responsive web applications.
        </p> 
     <div className='mt-8 space-x-4'>
        <button type="button" className="bg-gradient-to-r from-indigo-700 to-purple-600 text-white font-medium rounded-full px-7 py-3 shadow-md hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-300 md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full" > Connect with me </button>
        <button type="button" className='bg-gradient-to-r from-pink-700 to-yellow-600 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full' > Resume </button>
     </div>
     </div>
  )
}

export default Home