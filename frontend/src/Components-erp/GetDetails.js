import React from 'react'

function GetDetails() {
  return (
   <>
   <div>

    <div className='min-h-screen flex items-center justify-center px-16 ' >
        <div  className='relative w-full max-w-lg '>
            <div className='absolute top-10 -left-4  w-72 h-72 bg-purple-500 rounded-full    mix-blend-multiply blur-xl '></div>
            <div className='absolute top-10 -right-4  w-72 h-72 bg-yellow-500 rounded-full   mix-blend-multiply blur-xl '></div>
            <div className='absolute  top-0 left-20  w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply blur-xl '></div>

        </div>
   </div>
       
    </div>
   </>
  )
}

export default GetDetails