import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './component/Login'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Sigin from './component/Sigin'
import Home from './component/Home'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
     {/* <Header/> */}
      <Routes>
      
        <Route path='/login' element={<Login/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/sigin' element={<Sigin/>}/>
        {/* <Header/> */}
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
