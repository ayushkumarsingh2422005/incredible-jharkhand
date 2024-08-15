import { useState } from 'react';
import './App.css';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Fifth, First, Fourth, Second, Sixth, Third } from './Pages';
import { Footer, Home, Nev, Quot, Socials } from './Components';

gsap.registerPlugin(useGSAP);

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full'>
      {/* <Nev />
      <Home />
      <br />
      <Quot />
      <Socials />
      <Footer /> */}
      <First />
      <Second />
      <Third />
      <Fourth />
      <Fifth />
      <Sixth />
    </div>
  )
}

export default App
