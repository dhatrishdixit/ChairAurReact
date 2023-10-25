import React from 'react'
import UserContext from '../context/UserContext';

function Login() {
  const [name,setName] = React.useState(null);
  const [password,setPassword] = React.useState(null);
  const {setUser} = React.useContext(UserContext);
  const submitHandler = () =>{
     setUser({name,password})
  }
  return (
    <>
    <div className='flex flex-col gap-4 justify-center items-center'>
        <input type="text"
        value={name}
        className='border-2 border-black max-w-fit '
        onChange={(e)=>{
           setName(e.target.value)
        }}
        />
        <input 
        type="password"
        className='border-2 border-black max-w-fit'
        value={password}
        onChange={
            (e)=>{
            setPassword(e.target.value)
            }
        }
        /> 
        <button onClick={submitHandler}>
            submit
        </button>
    </div>
    </>
    
  )
}

export default Login