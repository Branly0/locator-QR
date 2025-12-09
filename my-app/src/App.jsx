import { useState } from 'react'
import { useRef } from 'react';

import './App.css'

import cameraImg from './assets/icons8-camera-50.png';
import bgImg from './assets/boBGHome.png';

function App() {
  const [count, setCount] = useState(0)

  const [zoom, setZoom] = useState(1);

  const zoomIn = () => {setZoom(prev => Math.min(prev + 0.1, 3));};
  const zoomOut = () => {setZoom(prev => Math.max(prev - 0.1, 0.5));};

  const videoRef = useRef(null);

  const openCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
    } catch (err) {
      console.error("Error accessing camera: ", err);
      alert("Unable to access camera. Please check permissions.");
    }
  };


  return (
    <>

      <div className="w-screen h-screen bg-center bg-no-repeat bg-cover relative"
          style={{ backgroundImage: `url(${bgImg})`,
          backgroundSize: `${zoom * 100}% auto`,
         }}
        >
        <div className="flex gap-2 justify-center">
          <button onClick={zoomIn} className="px-4 py-2 text-white rounded-lg border shadow font-bold">+</button>
          <button onClick={zoomOut} className="px-4 py-2 text-white rounded-lg border shadow font-bold">-</button>
        </div>
      </div>
      <div className="container">
        <header className="flex items-center justify-between px-4 py-2 gap-3 fixed top-7 left-8">
          <h1 className="text-sm  font-semibold border-3 border-solid border-black rounded-2xl p-3">My Home Map</h1>
          <img
            onClick={openCamera}
            src={cameraImg}
            alt=""
            className="
              w-14 h-14 border-3 border-black rounded-2xl p-2.5
              hover:shadow-lg
              active:scale-90
              transition-transform duration-150
              cursor-pointer
            "
          />
          <div className="absolute top-50 flex flex-col gap-2 ">
            <video 
              ref={videoRef} 
              autoPlay 
              className="mt-4 w-full max-w-sm border rounded-2xl"
            ></video>
            <div className="z-50 text-red-800 font-bold bg-white border-2 rounded-full">X</div>
          </div>

        </header>

        


        <footer  className='fixed bottom-6 border-solid border-2 border-black rounded-full px-4 py-2 left-1/2 transform -translate-x-1/2 w-4/5 text-left'>
          <p className='ml-7 font-bold'>Made by branly0</p>
        </footer>
      </div>
    </>
  )
}

export default App
