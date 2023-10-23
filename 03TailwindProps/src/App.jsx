import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Card } from './Card'

function App() {
  const [count, setCount] = useState(0)
  // props used to transfer values from one component to other 
  return (
    <>
    <button onClick={()=>{setCount(count+1)}}>{count}</button>
     <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind</h1>
     <Card name="dhatrish" count={count}/>
     <Card name="dhatrish" count={count}/>
     <Card name="dhatrish" count={count}/>
    </>
  )
}

export default App
