import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const [color,setColor] = useState('olive');
// inline css ke liye react mein {{}} karna padta hai 
  const colorHandler = (e) =>{
       console.log(e.target.className);
       setColor(e.target.className);
  }
  // alag se likhne mei dikkat hogi kyunki onclick ko function chahiye hota hai 
  
  return (
    <>
    
    <div className='w-full h-screen m-0 p-0' style={{
      backgroundColor : color
    }}>
    <div className='fixed bottom-12 flex flex-wrap justify-center inset-x-4 px-2 bg-slate-200 rounded-xl '>
        <div className='outline-none text-white px-2 my-1 rounded-lg shadow-lg mx-2' style={{backgroundColor:'blue'}}>
        <button className='blue' onClick={colorHandler}>
          blue
        </button></div>
        <div className='outline-none text-white px-2 my-1 rounded-lg shadow-lg mx-2' style={{backgroundColor:'green'}}>
        <button className='green' onClick={colorHandler}>
          green
        </button></div>
        <div className='outline-none text-white px-2 my-1 rounded-lg shadow-lg mx-2' style={{backgroundColor:'red'}}>
        <button className='red' onClick={colorHandler}>
          red
        </button></div>
        <div className='outline-none text-white px-2 my-1 rounded-lg shadow-lg mx-2' style={{backgroundColor:'purple'}}>
        <button className='purple' onClick={colorHandler}>
          purple
        </button></div>
        <div className='outline-none text-white px-2 my-1 rounded-lg shadow-lg mx-2' style={{backgroundColor:'blue'}}>
        <button className='blue' onClick={colorHandler}>
          blue
        </button></div>
        <div className='outline-none text-white px-2 my-1 rounded-lg shadow-lg mx-2' style={{backgroundColor:'blue'}}>
        <button className='blue' onClick={colorHandler}>
          blue
        </button></div>
        <div className='outline-none text-white px-2 my-1 rounded-lg shadow-lg mx-2' style={{backgroundColor:'blue'}}>
        <button className='blue' onClick={colorHandler}>
          blue
        </button></div>
        <div className='outline-none text-white px-2 my-1 rounded-lg shadow-lg mx-2' style={{backgroundColor:'blue'}}>
        <button className='blue' onClick={colorHandler}>
          blue
        </button></div>
    </div>
    </div>
    </>
  )
}

export default App
