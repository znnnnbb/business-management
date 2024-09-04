import React, { useState } from 'react'
import {  Navigate, useNavigate } from 'react-router-dom';
import {
  TiBusinessCard,
  TiLocation,
  TiTag, 
  TiArrowSortedDown,
  TiUserAdd,
  TiMail,
} from "react-icons/ti";
import { TbDots } from "react-icons/tb";

import { Link } from 'react-router-dom';




function Signup(props) {

 const navigate = useNavigate()
 
  const [TypeOfBusiness, setTypeOfBusiness] = useState('choose Type')
  const [TypeSecScale, setTypeSecScale] = useState('scale-0')
  const [IconRotate, setIconRotate] = useState('rotate-0')
  
  const userDetails = [
    {
      Name:String,
      GSTIN:String,
      Adress:String,
      Username:String,
      Type:String,

      
    }
  ]
   
    const chooseBusinessType=(e)=>{
     console.log(e.target.id)
     setTypeOfBusiness(e.target.id)
     openTypeSection()
    }
    const openTypeSection=()=>{
     console.log('open')
      if(TypeSecScale==='scale-0'){
         setIconRotate("rotate-180");
         setTypeSecScale("scale-100");
      }else{

        setIconRotate('rotate-0')
        setTypeSecScale('scale-0')
      }
    
      
    }
    const SubmitForm= async ()=>{

      userDetails.push({
        name:document.getElementById('businessName').value,
        GSTIN:document.getElementById('GSTIN').value,
        Adress:document.getElementById('Adress').value,
        Username:document.getElementById('UserName').value,
        Password:document.getElementById('Password').value,
        Email:document.getElementById('Email').value,
        Type:TypeOfBusiness,
        
       
      })
      console.log(userDetails)
      userDetails.shift()
      console.log(userDetails)
      const res = await fetch("/Register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({user:userDetails}),
      }).then( res=>res.json())
      console.log(res)
      
      const {errorCode} = res
     
      if(!errorCode){
        window.alert('registered sucessfully')
       navigate('/login')
      }else{
 window.alert(errorCode);
 console.log(errorCode);
      }

      
    }

   

  return (
    <div className=" w-screen h-screen overflow-auto  bg-white  grid justify-items-center">
      <div className="border-2 bg-white  space-y-4 h-fit rounded-lg shadow-lg">
        <header className="font-extrabold text-5xl  mt-4 text-center ">
          AUDDIT
        </header>
        <h1 className=" font-bold text-3xl m-5  ">Create Your New Account</h1>
        <h5 className="text-sm text-gray-500 font-serif ml-5">
          fill the form correctly to get verified
        </h5>
        <div className="p-8 space-y-10">
          <div className="grid  grid-cols-1 justify-items-center  space-y-10  ">
            <div className="  flex   w-72 h-5 border-b-2 border-black hover:border-slate-700 space-x-2 ">
              <div className="w-4 h-5 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="h-4 w-4"
                >
                  <path d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z" />
                </svg>
              </div>
              <input
                id="businessName"
                className="outline-none bg-inherit "
                placeholder="Business Name"
              ></input>
            </div>

            <div className="  flex  space-x-2   w-72 h-5 border-b-2 border-black hover:border-slate-700 ">
              <div className="">{<TiBusinessCard size={20} />}</div>
              <input
                className="outline-none bg-inherit "
                placeholder="GSTIN"
                id="GSTIN"
                type={"text"}
              ></input>
            </div>
          </div>
          <div className="grid  grid-cols-1  space-y-10 justify-items-center ">
            <div className="  flex   w-72 h-5 border-b-2 border-black hover:border-slate-700 space-x-2 ">
              <div className="w-4 h-4 pb-1 ">
                <TiLocation size={20} />
              </div>
              <input
                className="outline-none bg-inherit "
                placeholder="Adress"
                id="Adress"
              ></input>
            </div>
            <div className="  flex   w-72 h-5 border-b-2 border-black hover:border-slate-700 space-x-2 ">
              <div className="w-4 h-5 ">
                <TiMail size={20} />
              </div>
              <input
                className="outline-none bg-inherit "
                placeholder="Email"
                id="Email"
                type="Email"
              ></input>
            </div>
            <div className="  flex   w-72 h-5 border-b-2 border-black hover:border-slate-700 space-x-2 ">
              <div className="w-4 h-5 ">
                <TiUserAdd size={20} />
              </div>
              <input
                className="outline-none bg-inherit "
                placeholder="create a Username"
                id="UserName"
              ></input>
            </div>

            <div className="  flex   w-72 h-5 border-b-2 border-black hover:border-slate-700 space-x-2 ">
              <div className="w-4 h-5 ">
                <TbDots size={20} />
              </div>
              <input
                className="outline-none bg-inherit "
                placeholder="Password"
                type="Password"
                id="Password"
              ></input>
            </div>

            <div className="  flex  space-x-2     w-72 h-7 border-b-2 border-black hover:border-slate-700 ">
              <div className="w-14 h-6">{<TiTag size={20} />}</div>
              <input
                id="type"
                className="outline-none h-5 w-36 font-bold "
                value={TypeOfBusiness}
              ></input>
              <div
                onClick={() => {
                  openTypeSection();
                }}
                id="typeSecOpner"
                className={`${IconRotate} `}
              >
                {<TiArrowSortedDown size={20} />}
              </div>
              <div
                className={`absolute m-5 bg-white shadow-lg shadow-black ${TypeSecScale} rounded-lg  `}
              >
                <div
                  className="p-5 space-y-2   "
                  onMouseLeave={() => openTypeSection()}
                >
                  <div
                    className="cursor-pointer font-semibold "
                    id={`Manufacturing`}
                    onClick={(e) => chooseBusinessType(e)}
                  >
                    Manufacturing
                  </div>
                  <div
                    id="Retailer"
                    className="cursor-pointer font-semibold"
                    onClick={(e) => chooseBusinessType(e)}
                  >
                    Retailer
                  </div>
                  <div
                    id="Online Retailer"
                    className="cursor-pointer font-semibold"
                    onClick={(e) => chooseBusinessType(e)}
                  >
                    Online Retailer
                  </div>
                  <div
                    id=" Service"
                    className="cursor-pointer font-semibold"
                    onClick={(e) => chooseBusinessType(e)}
                  >
                    Service
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid justify-center">
            <button className=" bg-green-600 text-white ">
              <div
                className="p-4  "
                onClick={() => {
                  SubmitForm();
                }}
              >
                Submit
              </div>
            </button>
            <div className="font-serif mt-2">
              By Registering you agree to{" "}
              <span className="text-blue-600 cursor-pointer">
                terms and conditions{" "}
              </span>{" "}
              and join the preproduction Version
            </div>
            <div className="text-center">
              Already have an account ?
              <span className="cursor-pointer text-blue-600 font-semibold" onClick={()=>{navigate('/login')}} >
                Login
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup