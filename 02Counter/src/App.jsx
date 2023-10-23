import { useState } from 'react'

import './App.css'

// ui updation ka pura kam react karta hai 
function App() {
  // const [count, setCount] = useState(0)
  const [counter, setCounter] = useState(0)
    //let counter = 0 ;
    function addEvent (){
      // counter = counter + 1; either ignore them or declare them as let
      // setCounter karke ham counter ka value change karte hai jiski wajah se evaluate karte time lekin previous value hi hogi
      if(counter<=19) {
          setCounter(counter + 1); 
      }
      else{
        setCounter(20)
      }
      
    }
    function downEvent (){
      // counter = counter - 1;
      if(counter>=1){
          setCounter(counter - 1);
      }
      else{
        setCounter(0);
      }
    
    }
  return (
    <>
     <h1>
      Counter 
     </h1>
     <button onClick ={addEvent}>
         up {counter}
     </button>
     <br />{counter}<br />
     <button onClick ={downEvent}>
        down {counter}
     </button>
    </>
  )
}

export default App
