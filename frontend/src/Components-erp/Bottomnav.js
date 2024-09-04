import React from 'react'
import { Link, Navigate } from 'react-router-dom';
import {home} from './homme.svg'
import { useNavigate } from 'react-router-dom';
function Bottomnav() {
  const  nchange=(event)=>{
    console.log(event)
     const name = event.target
     console.log(name)

  }
  return (
    <>
      <div className="text-white bg-inherit  inset-x-0 bottom-0 h-28 fixed lg:h-10   ">
        <Link  className='absolute bg-blue-400 h-full w-44'></Link>
        <button
          name="home"
          
          className="h-full w-44 "
          onClick={(event) => {
            nchange(event);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-full w-44"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
        </button>
      </div>
    </>
  );
}

export default Bottomnav