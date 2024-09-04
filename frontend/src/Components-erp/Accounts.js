import React from 'react'
import { useNavigate } from 'react-router-dom'

function Accounts() {
     const Navigate = useNavigate()
  return (
    <div className='w-full h-full '>
        <div className='w-full text-center font-bold' >Select an account to view</div>
      <div className='grid p-5 grid-cols-4 gap-5 '>
          <div className='h-fit w-52  bg-gradient-to-r from-lagoo1 to-lagoo2 rounded-lg shadow-xl cursor-pointer hover:scale-110 hover:shadow-slate-600 '
          onClick={()=>{Navigate('/CreditAccount')}}>
               <div className='pr-24 p-5 pt-0 text-xl text-white'>Credit:</div>
               <div className='pl-14 pb-12 text-white text-2xl'>7000</div>
          </div>
          <div className='h-fit w-52  bg-gradient-to-r from-purple-500 to-violet-600 rounded-lg shadow-xl cursor-pointer hover:scale-110 hover:shadow-slate-600 '>
               <div className='pr-24 p-5 pt-0 text-xl text-white'>Debit:</div>
               <div className='pl-14 pb-12 text-white text-2xl'>7000</div>
          </div>
          <div className='h-fit w-52  bg-gradient-to-r from-ameth1 to-ameth2 rounded-lg shadow-xl cursor-pointer hover:scale-110 hover:shadow-slate-600 '>
               <div className='pr-24 p-5 pt-0 text-xl text-white'>Cash:</div>
               <div className='pl-14 pb-12 text-white text-2xl'>7000</div>
          </div>
          <div className='h-fit w-52  bg-gradient-to-r from-intu1 to-intu2 rounded-lg shadow-xl cursor-pointer hover:scale-110 hover:shadow-slate-600 '>
               <div className='pr-24 p-5 pt-0 text-xl text-white'>Clients:</div>
               <div className='pl-14 pb-12 text-white text-2xl'>7000</div>
          </div>
          <div className='h-fit w-52  bg-gradient-to-r from-lagoo1 to-lagoo2 rounded-lg shadow-xl cursor-pointer hover:scale-110 hover:shadow-slate-600 '
           onClick={()=>{Navigate('/Transactions')}}>
               <div className='pr-24 p-5 pt-0 text-xl text-white'>Invoice</div>
               <div className='pl-14 pb-12 text-white text-2xl'>7000</div>
          </div>
      </div>
    </div>
  )
}

export default Accounts