import { useState } from 'react'
import InputBox from './components/InputBox';
import useCurrencyInfo from './hooks/useCurrencyInfo'
// import './App.css'

function App() {
  const [amount,setAmount] = useState(0);
  const [from,setFrom]=useState('usd');
  const [to,setTo] = useState('inr');
  const [convertedAmount,setConvertedAmount] = useState(0);
  
  const currencyInfo = useCurrencyInfo(from);
  const currencyOptions = Object.keys(currencyInfo);
  console.log(currencyOptions)
  console.log(amount)
  const swap = () =>{
     setFrom(to);
     setTo(from);
     setAmount(convertedAmount);
     setConvertedAmount(amount)
  }
  
  const convert = () => {
      setConvertedAmount(amount*currencyInfo[to]);
      console.log(convertedAmount)
  }
  const url ="https://source.unsplash.com/1600x900/?money"
  return (
    <>
   
      <div
          className="w-screen h-screen flex flex-wrap justify-center items-center "
          style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=MnwxfDB8MXxyYW5kb218MHx8bW9uZXl8fHx8fHwxNjk4MDUyMzEx&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1600}')`,
          }}
      >
          <div className="w-full">
              <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                  <form
                      onSubmit={(e) => {
                          e.preventDefault();
                          convert() ;
                      }}
                  >
                      <div className="w-full mb-1">
                          <InputBox
                              label="From"
                              amount={amount}
                              currencyOptions={currencyOptions}
                              // onCurrencyChange={(currency) => setAmount(amount)}
                              onCurrencyChange={(currency) =>{setFrom(currency)}}
                              selectCurrency={from}
                              onAmountChange={value => setAmount(value)}
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
                              amount={convertedAmount}
                              currencyOptions={currencyOptions}
                              // onCurrencyChange={(currency) => setAmount(amount)}
                              onCurrencyChange={(currency) =>{setTo(currency)}}
                              selectCurrency={to}
                              onAmountChange={value => setConvertedAmount(value)}
                          />
                      </div>
                      <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                          Convert {from.toUpperCase()} to {to.toUpperCase()}
                      </button>
                  </form>
              </div>
          </div>
      </div>
    </>
  )
}

export default App

