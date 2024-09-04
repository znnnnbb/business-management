import React from 'react'
import Tiles from './Tiles'
import Navbar from './Navbar'
import Content from './Content'
function Background(props) {
  return (
    
   <>
   <div className= {`h-screen bg-${props.bgcolor}-800 w-full  flex `}>
     <Navbar/>

     <Content  />
       
   </div>
   
   </>
  )
}

export default Background