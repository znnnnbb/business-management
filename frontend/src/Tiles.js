import React from 'react'

function Tiles() {
  return (
   <>
   <div className='min-h-screen w-auto  '>
    <div className='bbb  md:flex '>
    <div className=' h-20 w-auto rounded-lg bg-gradient-to-r from-ameth1 to-ameth2 shadow-lg cursor-pointer hover:scale-125 focus: '>
      <span  className='font-bold text-sm ml-2 text-white  ' >Total Invoice:</span>
      <div  className='text-white font-bold text-4xl ml-10 mt-4 ' >{`₹ ${70000}`}</div>
    </div>
    <div className='  h-28 w-56 rounded-lg bg-gradient-to-r from-ameth1 to-ameth2 shadow-lg cursor-pointer hover:scale-125 focus: '>
      <span  className='font-bold text-sm ml-2 text-white  ' >Total Invoice:</span>
      <div  className='text-white font-bold text-4xl ml-10 mt-4 ' >{`₹ ${70000}`}</div>
    </div>
    </div>
    
   </div>
   </>
  )
}

export default Tiles