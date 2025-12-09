import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import cameraImg from './assets/icons8-camera-50.png';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
        <header className="flex items-center justify-between px-4 py-2 gap-3 fixed top-7 left-8">
          <h1 className="text-sm  font-semibold border-3 border-solid border-black rounded-2xl p-3">My Home Map</h1>
          <img src={cameraImg} alt="" className="w-14 h-14 border-3 border-solid border-black rounded-2xl p-2.5" />
        </header>
        <footer  className='fixed bottom-6 border-solid border-2 border-black rounded-full px-4 py-2 left-1/2 transform -translate-x-1/2 w-4/5 text-left'>
          <p className='ml-7 font-bold'>Made by branly0 </p>
        </footer>
      </div>
    </>
  )
}

export default App
