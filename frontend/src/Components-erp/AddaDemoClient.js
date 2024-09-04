import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import jsCookie from "js-cookie";

import {
  TiBusinessCard,
  TiLocation,
  TiTag,
  TiArrowSortedDown,
  TiUserAdd,
  TiMail,
} from "react-icons/ti";
import { TbDots } from "react-icons/tb";

import { Link } from "react-router-dom";

function AddDemoAccount(props) {
  const navigate = useNavigate();

  const [TypeOfBusiness, setTypeOfBusiness] = useState("choose Type");
  const [TypeSecScale, setTypeSecScale] = useState("scale-0");
  const [IconRotate, setIconRotate] = useState("rotate-0");

  const userDetails = [
    {
      Name: String,
      GSTIN: String,
      Adress: String,
      Username: String,
      Type: String,
    },
  ];

  const chooseBusinessType = (e) => {
    console.log(e.target.id);
    setTypeOfBusiness(e.target.id);
    openTypeSection();
  };
  const openTypeSection = () => {
    console.log("open");
    if (TypeSecScale === "scale-0") {
      setIconRotate("rotate-180");
      setTypeSecScale("scale-100");
    } else {
      setIconRotate("rotate-0");
      setTypeSecScale("scale-0");
    }
  };
  const SubmitForm = async () => {
     const cookie = jsCookie.get();
     const { loginCookie } = cookie;
     const Cookie = loginCookie;
    const user = {
        name: document.getElementById("businessName").value,
        GSTIN: document.getElementById("GSTIN").value,
      Adress: document.getElementById("Adress").value,
      Username: document.getElementById("UserName").value,
      Email: document.getElementById("Email").value,
      Type: TypeOfBusiness,
      
    }
      

    console.log(userDetails);
    userDetails.shift();
    console.log(userDetails);
    const res = await fetch("/addDemoClient", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({user,Cookie}),
    }).then((res) => res.json());
    if(res==='Sucessfull'){
        window.alert('Added SucessFully')
    }else{
        window.alert('a Probleum occured')
    }
    
  };

  return (
    <div className=" bg-white  space-y-4 h-fit rounded-lg shadow-lg">
      <header className="font-extrabold text-5xl  mt-4 text-center ">
        AUDDIT
      </header>
      <h1 className=" font-bold text-3xl m-5  ">Add Offline Customer</h1>

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
        <div className="w-full  grid justify-items-center">

        <button
          class="bg-transparent w-2/6 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          onClick={() => {
              SubmitForm();;
            }}
            >
         Add
        </button>
            </div>
      </div>
    </div>
  );
}

export default AddDemoAccount;
