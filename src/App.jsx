import { useState, useEffect } from 'react'
import Background from "./assets/background.jpg"
import Stopwatch from './components/Stopwatch';

function App() {
  const [backgroundLoaded, setBackgroundLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setBackgroundLoaded(true);
    };
    img.src = Background;
  }, []);

  if (!backgroundLoaded) {
    return (
      <div className="h-dvh w-full flex justify-center items-center bg-black">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="relative h-screen w-screen flex flex-col lg:gap-6 md:gap-4 gap-2 justify-center items-center p-2">
      <div
          className="absolute inset-0 bg-no-repeat bg-center bg-cover filter blur-lg"
          style={{ backgroundImage: `url(${Background})` }}
      ></div>
      <h1 className='relative z-10 lg:text-6xl md:text-4xl text-2xl font-extralight text-white drop-shadow-[0_0_0.9rem_rgba(25,208,29,0.9)]'>Blip</h1>
      <Stopwatch />
    </div>
  )
}

export default App