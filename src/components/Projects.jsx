import React from 'react'
import SampleImage from '../assets/react.svg'
import Img1 from '../assets/img1.jpg'
import Img2 from '../assets/img2.jpg'
import Img3 from '../assets/img3.jpg'

const projects = [
    {
        id: 1,
        name: "Employee MS",
        technologies: "MERN Stack",
        image: Img1,
        github: "https://github.com/4abhayraj",
    },
    {
        id: 2,
        name: "Employee MS",
        technologies: "MERN Stack",
        image: Img2,
        github: "https://github.com/4abhayraj",
    },
    {
        id: 3,
        name: "Employee MS",
        technologies: "MERN Stack",
        image: Img3,
        github: "https://github.com/4abhayraj",
    },
    
    // =========================================================34:53
];

const Projects = () => {
  return (
    <div className='bg-black text-white py-20' id='projects'>
        <div className='container mx-auto px-8 md:px-16 lg:px-24'>
          <h2 className='text-4xl font-bold text-center mb-12 '>Projects</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {projects.map((project) => (
                <div key={project.id} className='bg-gray-800 p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105'> 
                    <img src= {project.image} alt="" className='max-w-full h-[250px] w-[512px] bg-auto rounded-lg mb-4 w-full h-48 object-cover' />
                    <h3 className='text-2xl font-bond mb-4'>{project.name}</h3>  
                    <p className='text-gray-400 mb-4'>{project.technologies}</p>
                    <a href={project.github} className="inline-block bg-gradient-to-r from-indigo-700 to-purple-600 text-white px-4 py-2 rounded-full" target="_blank" rel='noopener noreferrer'>GitHub</a>
                </div>
              ))}


          </div>
        </div>
    </div>
  )
};

export default Projects