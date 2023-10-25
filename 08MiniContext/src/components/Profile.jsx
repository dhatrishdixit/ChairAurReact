import React from 'react'
import { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {
  const {user} = useContext(UserContext)
  console.log(user)
  if(user === null) {return(
    <h3 className='text-3xl text-orange-700 text-center'>
    Please Login
  </h3>
  )}
  return (
    <>
    <h3 className='text-3xl text-orange-700 text-center'>
      {user.name} 
      {user.password}
    </h3>
    </>
  )
}

export default Profile