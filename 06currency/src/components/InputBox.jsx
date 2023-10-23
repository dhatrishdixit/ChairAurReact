import { useId } from "react";

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions=[],
    selectCurrency='usd',
    currencyDisabled = false,
    amountDisabled = false,
    className = "",
}) {
    
    const amountInputId = useId();
    // useId can be used to give different Id to all the components as it is not possible when iterated over , each of them and still all of them have same id 
    return (
        
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amountInputId}  className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5 text-black"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisabled}
                    value= {amount}
                    onChange={(e)=>{//onAmountChange is here just to check whether the function exists that is why we just pass the reference of the function it works as truthy or falsy value 
                        onAmountChange && onAmountChange(Number(e.target.value))}}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none text-black"
                    value ={selectCurrency}
                    disabled={currencyDisabled}
                    onChange = {
                        (e)=>{
                            //similarly here onCurrencyChange is used to check whether the function exists or not 
                            onCurrencyChange && onCurrencyChange(e.target.value)
                        }
                    }
                >
                
                {
                    //loops mei key dalte hai aur map use karte hai kyunki woh value return karta hai aur usko directly component mei use kar sakte hai 
                    currencyOptions.map(currency => (
                    <option value={currency} key={currency}>
                        {currency}
                    </option>)
                        
                    )
                }
                   
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;
