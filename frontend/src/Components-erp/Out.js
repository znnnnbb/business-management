import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Signup from './Signup'
import { useState } from 'react'
import Login from './Login'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import LandingPage from './LandingPage'
function Out(props) {
   const Navigate = useNavigate()
//    const [canvas, setcanvas] = useState()   
const canvas=()=>{
  Navigate('/Login')
}
 const auth =()=>{
     props.Auth()
 }

let effectCount=0;


  return (
   <>
   <div className='w-screen h-screen bg-inherit' >
   <Routes>
       <Route path='Signup' element={<Signup/>}></Route>
       <Route path='Login' element={<Login  auth={auth} />}></Route>
       <Route path='/' element={<LandingPage/>}></Route>
   </Routes>
   {()=>{canvas()}}
   </div>
   </>
  )
}

export default Out