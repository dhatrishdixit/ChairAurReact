import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Name } from './Name.jsx'
function checkKar(){
  return (
    <>
    <h1>check kar liya </h1>
    </>
  )
}
//functional syntax is converted to tree like the objects you created by the bundler you can directly pass the object- tree to your renderer it will do the job 

//apan khud ka bana hua object isliye pass nhi kara sakte kyunki render react ka ek personal function hai jiske liye kuch syntactical requirement , ki us ek type ka object hoga tab kam chalega
//this is the correct method to create object tree 

const site = 'google' ;
const reactElement = React.createElement(
  'a',
  {
    href:'https://google.com',
    targe:'_blank'
  },
  `click to visit google react Element`,
  site
);

// variable hai toh isko execute karane ki zarurat nhi hai 
const anotherElement = (
  <a href='https://google.com' target='_blank'>
       click to visit google
  </a>
)
const nestedElement = React.createElement(
  'div',
  {style: {
    backgroundColor:'red'
  }
},
  React.createElement(
    'p',
    {}
    ,'p inside a div'
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
    // App(),
   // checkKar()
   // <Name />
   //anotherElement
   //reactElement
   nestedElement
)
