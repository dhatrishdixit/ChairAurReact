import { useState } from 'react'
import {InputBox} from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'
// import './App.css'

function App() {
  
  const [amount,setAmount] = useState(0);
  const [from,setFrom]=useState('usd');
  const [to,setTo] = useState('inr');
  const [convertedAmount,setConvertedAmout] = useState(0);
  
  const currencyInfo = useCurrencyInfo(from);
  const currencyOptions = Object.keys(currencyInfo);
   
  const swap = () =>{
     setFrom(to);
     setTo(from);
     setAmount(convertedAmount);
     setConvertedAmount(amount)
  }
  
  const convert = () => {
      setConvertedAmount(amount*currencyInfo[to])
  }
  const url ="https://source.unsplash.com/1600x900/?money"
  return (
    <>
    <h1 className='text-3xl text-green-400 bg-orange-700'>hello</h1>
      {/* <div
          className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
          style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=MnwxfDB8MXxyYW5kb218MHx8bW9uZXl8fHx8fHwxNjk4MDUyMzEx&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1600}')`,
          }}
      >
          <div className="w-full h-full">
              <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                  <form
                      onSubmit={(e) => {
                          e.preventDefault();
                         
                      }}
                  >
                      <div className="w-full mb-1">
                          <InputBox
                              label="From"
                              
                          />
                      </div>
                      <div className="relative w-full h-0.5">
                          <button
                              type="button"
                              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                              onClick={swap}
                          >
                              swap
                          </button>
                      </div>
                      <div className="w-full mt-1 mb-4">
                          <InputBox
                              label="To"
                              
                          />
                      </div>
                      <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                          Convert 
                      </button>
                  </form>
              </div>
          </div>
      </div> */}
    </>
  )
}

export default App


