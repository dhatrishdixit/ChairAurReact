import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import About from './components/About/About.jsx'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import Contact from './components/Contact/Contact'
import User from './components/User/User'
import Github, { getInfoLoader } from './components/Github/Github'
import GithubDynamic from './components/Github/GithubDynamic'

const router = createBrowserRouter([
  {
    path:'/',
    element: <Layout/>,
    children:[
      {
        path:"",
        element:<Home />
      },{
        path:"about",
        element:<About />
      },{
        path:"contact",
        element:<Contact />
      }
    ]
  }
])

const router2 = createBrowserRouter(
    createRoutesFromElements(
     
      <Route path='/' element={<Layout />}>
          <Route path="" element ={<Home />} />
          <Route path="about" element ={<About />} >
              <Route path="checkme" element={GithubDynamic}/>
            </Route>
          
          <Route path="contact" element ={<Contact />} />
          <Route path="user/:id" element ={<User />} />
          <Route path="github" element ={<Github />}
           loader={getInfoLoader}
           >
            <Route path="check" element = {<GithubDynamic />} />
            </Route>
      </Route>
    )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router2}/>
  </React.StrictMode>,
)
