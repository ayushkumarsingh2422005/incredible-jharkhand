import { useState } from 'react';
import './App.css';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Footer, Home, Nev, Socials } from './Components';

gsap.registerPlugin(useGSAP);

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full'>
      <Nev />
      <Home />
      <br />
      <Socials />
      <Footer />
    </div>
  )
}

export default App
