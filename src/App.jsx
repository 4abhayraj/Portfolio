import { useState } from 'react'

import './App.css'
import Navbar from './components/navbar/Navbar'
import { Button } from './components/ui/button'
import TiltedCard from './components/TiltedCard/TiltedCard'
import ProfileImage from './assets/profile-image.png'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
import Contact from './components/Contact' 
import Footer from './components/Footer'
function App() {
  // const [count, setCount] = useState(0)

  return (
    <> 
    
    <div>
          <Navbar />
          <Home />
          <About />
          <Services />
          <Projects />
          <Contact />
          <Footer />
          
    </div>
        
    </>
  )
}

export default App















{/* <TiltedCard

  imageSrc={ProfileImage}

  altText="Kendrick Lamar - GNX Album Cover"

  captionText="Kendrick Lamar - GNX"

  containerHeight="150px"

  containerWidth="150px"

  imageHeight="150px"

  imageWidth="150px"

  rotateAmplitude={12}

  scaleOnHover={1.2}

  showMobileWarning={false}

  showTooltip={true}

  displayOverlayContent={true}

  overlayContent={

    <p className="tilted-card-demo-text">

      Kendrick Lamar - GNX

    </p>

  }

/> */}







