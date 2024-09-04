import React from 'react'
import { useNavigate } from 'react-router-dom';
function ChooseSearch() {
    const Navigate = useNavigate()
  return (
    <div className="w-full h-screen  grid justify-items-center items-center ">
      <div className="text-xl absolute top-10 font-bold">
        Add an Client Or Supplier
      </div>
      <div className="">
        <div className='grid gap-5'>
            <div>

          <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-4 px-10 border border-blue-500 hover:border-transparent rounded"
          onClick={()=>{Navigate('/AddDemoClient')}}>
            Create +
          </button>
            </div>
            <div className='text-center'>OR</div>
            <div>

          <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-4 px-8 border border-blue-500 hover:border-transparent rounded"
          onClick={()=>{Navigate('/searchUsers')}}>
             Add user +
          </button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default ChooseSearch