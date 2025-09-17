import React from 'react'

const Navbar = () => {

  const [isOpen, setIsOpen] = React.useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <nav className='bg-black w-screen fixed text-white left-0 px-10 md:px-16 lg:px-24 '>            
        <div className='container py-2 flex justify-between  md:justify-between '>
            <div className='text-2xl font-bold px-8 flex justify-start md:inline '> ABHAY RAJ </div>
            <div className='space-x-6 hidden justify-end md:inline'>
                <a href='#home' className='hover:text-gray-400 '>Home</a>
                <a href='#about' className='hover:text-gray-400 '>About me</a>
                <a href='#services' className='hover:text-gray-400 '>Services</a>
                <a href='#projects' className='hover:text-gray-400 '>Projects</a>
                <a href='#contact' className='hover:text-gray-400 '>Contact</a>
            </div>
            <button type="button" className="hidden bg-gradient-to-r from-indigo-700 to-purple-600 text-white font-medium rounded-lg px-7 py-3 shadow-md hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-300 md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full "> Contact me </button>

            <div className='flex flex-col items-end'>
             
            <div className='md:hidden'>
              <button onClick={toggleMenu} className='bg-white '>
                
                {isOpen ? (
                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
                ):(
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
                ) }   
                       
              </button>
            </div>

            <div className={`${isOpen ? 'fixed  ' : 'hidden'} md:hidden mt-15 transform${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out z-10`}>
              <div className='flex flex-col top-0 right-0 h-full w-30 bg-gray-800/95 p-5 items-end  justify-between'>
              <a href='#home' className='hover:text-gray-400 '>Home</a>
                <a href='#about' className='hover:text-gray-400  '>About me</a>
                <a href='#services' className='hover:text-gray-400  '>Services</a>
                <a href='#projects' className='hover:text-gray-400  '>Projects</a>
                <a href='#contact' className='hover:text-gray-400  '>Contact</a>
            </div>
            </div>
            </div>
            
        </div>
    </nav>
  )
}

export default Navbar