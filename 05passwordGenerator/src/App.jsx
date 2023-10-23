//import './App.css'

import { useCallback, useEffect, useState , useRef} from "react";



function App() {
  const [color,setColor] = useState('blue');
  const [buttonText,setButtonText] = useState('copy');
  const [length,setLength] = useState(8);
  const [numberAllowed,setNumberAllowed] = useState(false);
  const [charAllowed,setCharAllowed] = useState(false);
  const [password,setPassword] = useState('');
  const passwordRef = useRef("");
  function copyToClipboard(){
     passwordRef.current?.select();
     window.navigator.clipboard.writeText(password);
     setButtonText('copied');
     setColor('grey')
     
  }
  const memoizedCopy = useCallback(
    copyToClipboard,
    [password,setButtonText,setColor]
  )
  const passwordGenerator  = useCallback(()=>{
      let pass = "";
      let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
      
      if(numberAllowed) str+='0123456789'
      if(charAllowed) str += '~`!@#$%^&*()-_+={}[]|/\:;"`<>,.?'
     
      for(let i=0 ; i<length ; i++){
      
          const position = Math.floor(Math.random()*str.length + 1);
          pass += str[position];
      }
      
      setPassword(pass);

  },[length,numberAllowed,charAllowed,setPassword])
  // in dependencies ke change hone par memoize karke repeat karne ka kam karega 

  useEffect(passwordGenerator,[length,numberAllowed,charAllowed,passwordGenerator]);
  // used for function calls , api calls , etc

  // passwordGenerator();
  console.log(charAllowed)
  return (
    <>
 <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800 py-4">
  <h1 className="text-white text-center">Password Generator</h1>
  <div className="flex shadow rounded-lg overflow-hidden mb-4">
      <input 
        type="text"
        value = {password}
        className="outline-none w-full py-1 px-3"
        placeholder = "password"
        ref={passwordRef}
        readOnly
      />
      <button className="outline-none shrink-0 text-white px-3 text-center" onClick={memoizedCopy} style={{backgroundColor:color}}>
        {buttonText}
      </button>
  </div>


  <div className="flex gap-2 ">
    <input type="range" max={30} min={5} value={length} name="length" 
    onChange={(e)=>{
        setLength(e.target.value);
        setButtonText('copy');
        setColor('blue');
    }}
    />
    <label for="length">
        length : {length}
    </label>
    <div className="flex gap-2 ml-2">
       <input type="checkbox" value={charAllowed} name="char" 
      onChange={()=>{
        setCharAllowed((prev)=>!prev)
        setButtonText('copy')
        setColor('blue')
      }}
       />
       <label for="char">
        char 
    </label>
    <div className="flex gap-2">
       <input type="checkbox" value={numberAllowed} name="number" 
      onChange={()=>{
        setNumberAllowed((prev)=>!prev)
        setButtonText('copy')
        setColor('blue')
      }}
       />
       <label for="number">
        number
    </label>
    </div>
    </div>
  </div>
 </div>
  
    </>
  )
}

export default App
