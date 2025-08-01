import React from 'react'
import AboutImage from '../assets/profile-image.png'
import TiltedCard from './TiltedCard/TiltedCard'
const About = () => {
  return (
    <div className=' bg-black text-white py-20' id='about'>
        <div className='container mx-auto px-8 md:px-16 lgLpx-24'>
          <h2 className='text-4xl font-bold text-center mb-12 '>About Me</h2>
          <div className='flex flex-col md:flex-row items-center md:space-x-12 '>

            <TiltedCard 
            imageSrc={AboutImage} 
            alt='profile image'
              containerHeight="320px"
              containerWidth="262px"
              imageHeight="320px"
              imageWidth="262px"
            className='w-72 h-80 rounded object-cover mb-8 md:mb-0 '  />
            <div className='flex-1'>
            <p className='text-lg mb-8'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus assumenda mollitia odio hic sit? Distinctio quibusdam ullam blanditiis alias! Incidunt cum nemo eligendi eveniet doloremque odit repudiandae aspernatur laboriosam.
            </p>
            <div className='space-y-4'>
               <div className='flex items-center'>
                <label htmlFor='htmlandcss' className='w-2/12'>HTML & CSS</label>
                <div className='grow bg-gray-800 rounded-full h-2.5'>
                    <div className='bg-gradient-to-r from-indigo-700 to-purple-600 h-2.5 rounded transform transition-transform duration-300 hover:scale-105 w-10/12'>
                    </div>
                </div>
               </div>
               {/* ================ */}
                <div className='flex items-center'>
                <label htmlFor='reactjs' className='w-2/12'>React JS</label>
                <div className='grow bg-gray-800 rounded-full h-2.5'>
                    <div className='bg-gradient-to-r from-pink-700 to-yellow-600 h-2.5 rounded transform transition-transform duration-300 hover:scale-105 w-9/12'>
                    </div>
                </div>
               </div>
{/* ======================= */}
                 <div className='flex items-center'>
                <label htmlFor='nodejs' className='w-2/12'>Node JS</label>
                <div className='grow bg-gray-800 rounded-full h-2.5'>
                    <div className='bg-gradient-to-r from-indigo-700 to-purple-600 h-2.5 rounded transform transition-transform duration-300 hover:scale-105 w-7/12'>
                    </div>
                </div>
               </div>
{/*==================  */}
<div className='flex items-center'>
                <label htmlFor='expressjs' className='w-2/12'>Express JS</label>
                <div className='grow bg-gray-800 rounded-full h-2.5'>
                    <div className='bg-gradient-to-r from-pink-700 to-yellow-600 h-2.5 rounded transform transition-transform duration-300 hover:scale-105 w-6/12'>
                    </div>
                </div>
               </div>
               {/* ====================== */}
               <div className='flex items-center'>
                <label htmlFor='javascript' className='w-2/12'>JavaScript</label>
                <div className='grow bg-gray-800 rounded-full h-2.5'>
                    <div className='bg-gradient-to-r from-indigo-700 to-purple-600 h-2.5 rounded transform transition-transform duration-300 hover:scale-105 w-8/12'>
                    </div>
                </div>
               </div>
               {/* ============================= */}
               <div className='flex items-center'>
                <label htmlFor='python' className='w-2/12'>Python</label>
                <div className='grow bg-gray-800 rounded-full h-2.5'>
                    <div className='bg-gradient-to-r from-pink-700 to-yellow-600 h-2.5 rounded transform transition-transform duration-300 hover:scale-105 w-11/12'>
                    </div>
                </div>
               </div>
               {/* ========================= */}

               <div className='flex items-center'>
                <label htmlFor='java' className='w-2/12'>Java</label>
                <div className='grow bg-gray-800 rounded-full h-2.5'>
                    <div className='bg-gradient-to-r from-indigo-700 to-purple-600 h-2.5 rounded transform transition-transform duration-300 hover:scale-105 w-7/12'>
                    </div>
                </div>
               </div>

            </div>
            {/* =========---------====----------=======-------- */}
                <div className='mt-12 flex  justify-between tet-center'>
                  <div>
                    <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 to-purple-600'>
                      0+ 
                    </h3>
                      <p>
                         Years Experience
                      </p>
                    
                  </div>

                
                {/* ============ */}
                
                  <div>
                    <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 to-purple-600'>
                      2+ 
                    </h3>
                      <p>
                         Projects Completed
                      </p>
                    
                  </div>

                
                {/* ============= */}
                
                  <div>
                    <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 to-purple-600'>
                      0+ 
                    </h3>
                      <p>
                         Happy Clients
                      </p>
                    
                  </div>

                </div>
                {/* ============== */}

            </div>
          </div>
        </div>
            
               
    </div>
  )
}

export default About







//   <TiltedCard

//   imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"

//   altText="Kendrick Lamar - GNX Album Cover"

//   captionText="Kendrick Lamar - GNX"

//   containerHeight="1rem"

//   containerWidth="1rem"

//   imageHeight="1rem"

//   imageWidth="1rem"

//   rotateAmplitude={12}

//   scaleOnHover={1.2}

//   showMobileWarning={false}

//   showTooltip={true}

//   displayOverlayContent={true}

//   overlayContent={

//     <p className="tilted-card-demo-text">

//       Kendrick Lamar - GNX

//     </p>

//   }

// />