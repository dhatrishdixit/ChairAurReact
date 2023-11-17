import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { ThemeContext } from './context/theme.js'
import App from './App'

const AppWrapper = () => {
  const [themeMode,setThemeMode] = React.useState('light') ; 
  React.useEffect(() => {  
    
    const html = document.querySelector('html');
    html.classList.remove('dark','light');
    html.classList.add(themeMode);
  }, [themeMode])


  const lightTheme = () =>{
    setThemeMode('light')
  }
  const darkTheme = () =>{
    setThemeMode('dark')
  }
  
  return (
    <ThemeContext.Provider value={{themeMode,lightTheme,darkTheme}}>
    <App />
    </ThemeContext.Provider>
  )
}



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AppWrapper />
  </React.StrictMode>,
)
