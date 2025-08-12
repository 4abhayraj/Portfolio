import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-black w-screen fixed text-white left-0 px-10 md:px-16 lg:px-24 '>
        <div className='container py-2 flex justify-center md:justify-between items-center'>
            <div className='text-2xl font-bold hidden md:inline'> ABHAY RAJ </div>
            <div className='space-x-6'>
                <a href='#home' className='hover:text-gray-400 '>Home</a>
                <a href='#about' className='hover:text-gray-400 '>About me</a>
                <a href='#services' className='hover:text-gray-400 '>Services</a>
                <a href='#projects' className='hover:text-gray-400 '>Projects</a>
                <a href='#contact' className='hover:text-gray-400 '>Contact</a>
            </div>
            <button type="button" className="bg-gradient-to-r from-indigo-700 to-purple-600 text-white font-medium rounded-lg px-7 py-3 shadow-md hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-300 md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"> Contact me </button>
        </div>
    </nav>
  )
}

export default Navbar