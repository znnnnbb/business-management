import {React,useState} from 'react'
import {
  TiBusinessCard,
  TiLocation,
  TiTag,
  TiArrowSortedDown,
  TiUserAdd,
  TiMail,
} from "react-icons/ti";
import { TbDots } from "react-icons/tb";
import { History } from 'history';
import { Link, useNavigate } from 'react-router-dom';
import Cookie from 'js-cookie';
import jsCookie from 'js-cookie';
import { secondsInMinute } from 'date-fns/esm';
import Signup from '../Components-erp/Signup'
import Auth from './Auth';
import './login.css'

function Login(props) {
  const Navigate = useNavigate()
  
 const [Username, setUsername] = useState('')
 const [Password, setPassword] = useState('')


  const handleChange=(e)=>{
  
    const value  = e.target.value
    const id = e.target.id 
     if(id==='UserName'){
         setUsername(value)
         console.log(Username)

     }else{
         setPassword(value)
         console.log([Password])
     }
    
  }

 const Login= async(e)=>{


    

      console.log(Username,Password)

     const res = await fetch("/Login", {
       method: "POST",
       headers: { "Content-Type": "application/json" },
       body: JSON.stringify({ Username,Password }),
     }).then((res) => res.json());
     console.log(res);
     if(res==='error'){
       window.alert('invalid Credentials')

     }else{
       console.log('login')
        jsCookie.set('loginCookie',res)
          window.alert('login SucessFull')
 const cookie = jsCookie.get();
 const { loginCookie } = cookie;
 const Cookie = loginCookie;
 const result = await fetch("/getdata", {
   method: "POST",
   headers: { "Content-Type": "application/json" },
   body: JSON.stringify({ Cookie }),
 });
 const data = await result.json();
 console.log("res", data);
 const { user, account } = data;
 const { Adress, name, GSTIN, Email,Type,Product } = user;
 console.log(Adress);
 const { Transactions,Inventory } = account;
 console.log("Adress", Adress);
 console.log("GSTIN", GSTIN);
 console.log("Email", Email);
 console.log("name", name);
 localStorage.setItem("Username", JSON.stringify(name));
 localStorage.setItem("Adress", JSON.stringify(Adress));
 localStorage.setItem("GSTIN", JSON.stringify(GSTIN));
 localStorage.setItem("Email", JSON.stringify(Email));
 localStorage.setItem("name", JSON.stringify(name));
 localStorage.setItem("Type", JSON.stringify(Type));
 localStorage.setItem("Transactions", JSON.stringify(Transactions));
 localStorage.setItem("Accounts", JSON.stringify(account));
 localStorage.setItem("Inventory", JSON.stringify(Inventory));
 


         Navigate('/')
           document.location.reload()  // to be changed later to main dashboard 
     }
      
    
   

  }
const changeat=()=>{
  Navigate('/Signup')
}

  return (
    <>
      {/* <div className=" w-screen h-screen overflow-auto  bg-white  grid justify-items-center">
        <div className="border-2 bg-white  space-y-4 h-fit rounded-lg shadow-lg  absolute top-10 ">
          <div className="p-24">
            <header className="font-extrabold text-5xl  mt-16 text-center   ">
              AUDDIT
            </header>
            <h1 className=" font-bold text-3xl m-5  ">Sign in</h1>
            <h5 className="text-sm text-gray-500 font-serif ml-5">
              Enter The Required Details
            </h5>
            <div className="p-8 space-y-10">
              <div className="grid  grid-cols-1 justify-items-center  space-y-10  "></div>
              <div className="grid  grid-cols-1  space-y-10 justify-items-center   ">
                <div className="  flex   w-72 h-5 border-b-2 border-black hover:border-slate-700 space-x-2 ">
                  <div className="w-4 h-5 ">
                    <TiUserAdd size={20} />
                  </div>
                  <input
                    className="outline-none bg-inherit "
                    placeholder=" Username"
                    id="UserName"
                    onChange={(e) => handleChange(e)}
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
                    onChange={(e) => handleChange(e)}
                  ></input>
                </div>
              </div>
              <div className="grid justify-center  ">
                <button className=" bg-green-600 text-white  w-28 hover:bg-green-800 ">
                  <div
                    className="p-4  "
                    onClick={(e) => {
                      Login(e);
                    }}
                  >
                    Login
                  </div>
                </button>
                <div> New Here ? <button className='cursor-pointer text-blue-800' onClick={()=>{changeat()}} >Signup</button></div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="w-screen h-screen bg-gradient-to-r from-ameth1 to-ameth2 grid justify-items-center items-center  ">
        <div className="w-5/6 h-5/6  flex bg-white">
          <div className="relative left-0 w-1/2 h-full left">
            <div className="w-full h-full bg-ameth2/50 absolute   ">
              <div className="absolute left-2 text-7xl text-center ">
                AUDDIT
              </div>
              <p className="absolute top-32">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur et est sed felis aliquet sollicitudin
              </p>
            </div>
          </div>
          <div className="w-1/2 h-full bg-white">
            <div className="relative top-5 grid justify-items-center items-center text-5xl    ">
              Login
            </div>
            <div className="  ">
              {/* <input className='w-px-24  bg-gray-200 outline-none border-b-2 text-black' placeholder='Username' ></input>
             <input></input> */}
              <div className="">
                <header className="font-extrabold text-5xl  mt-16 text-center   ">
                  AUDDIT
                </header>
                {/* <h1 className=" font-bold text-3xl m-5  ">Sign in</h1>
                <h5 className="text-sm text-gray-500 font-serif ml-5">
                  Enter The Required Details
                </h5> */}
                <div className="p-8 space-y-10">
                  <div className="grid  grid-cols-1 justify-items-center  space-y-10  "></div>
                  <div className="grid  grid-cols-1  space-y-10 justify-items-center   ">
                    <div className="  flex   w-72 h-5 border-b-2 border-black hover:border-slate-700 space-x-2 ">
                      <div className="w-4 h-5 ">
                        <TiUserAdd size={20} />
                      </div>
                      <input
                        className="outline-none bg-inherit "
                        placeholder=" Username"
                        id="UserName"
                        onChange={(e) => handleChange(e)}
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
                        onChange={(e) => handleChange(e)}
                      ></input>
                    </div>
                  </div>
                  <div className="grid justify-center  ">
                    <button className=" bg-green-600 text-white  w-28 hover:bg-green-800 ">
                      <div
                        className="p-4  "
                        onClick={(e) => {
                          Login(e);
                        }}
                      >
                        Login
                      </div>
                    </button>
                    <div>
                      {" "}
                      New Here ?{" "}
                      <button
                        className="cursor-pointer text-blue-800"
                        onClick={() => {
                          changeat();
                        }}
                      >
                        Signup
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login