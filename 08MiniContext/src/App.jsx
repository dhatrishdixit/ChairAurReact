import Login from "./components/Login"
import Profile from "./components/Profile"
import UserContextProvider from "./context/UserContextProivder"

function App() {


  return (
    <>
    <UserContextProvider>   
      <div className='text-3xl text-center text-orange-700'>
        hello
      </div>
      <Login />
      <Profile />
      </UserContextProvider>
   
    </>
  )
}

export default App
