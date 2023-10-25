import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';


function Github() {
   const data = useLoaderData();
//   const [data,setData]=useState({});
//   useEffect(()=>{
//     fetch('https://api.github.com/users/dhatrishdixit').then(res =>res.json()).then(Info => setData(Info))
//   },[])
  return (
    <>
    <div className='bg-gray-600 flex'>
        <img src={data.avatar_url}/>
      <div className='text-center text-3xl text-orange-700'>
        Github Followers: {data.followers}
      </div>
      </div>
      <Outlet />
    </>
  )
}

export default Github

export const getInfoLoader = async() =>{
    const response = await fetch("https://api.github.com/users/dhatrishdixit");
    const data = response.json();
    return data ;
}