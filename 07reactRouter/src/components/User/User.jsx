import React from 'react'
import { useParams } from 'react-router-dom';
//another method 
function User() {
    // const {id} = useParams()
    const params = useParams()
    console.log(params)
    // we cannot directly use javascript Objects in jsx
  return (
    <div className='text-center bg-gray-100 text-orange-700 text-4xl'>User :{params.id}</div>
  )
}

export default User