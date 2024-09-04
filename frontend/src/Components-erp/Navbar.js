import React, { useState } from "react";
import { Link, NavLink, Router, useNavigate } from "react-router-dom";
import jsCookie from "js-cookie";
import GetRequest from "./GetRequest";
import GetDetails from "./GetDetails";
import { useEffect } from "react";
import {  AiTwotonePrinter } from "react-icons/ai";

function Navbar(props) {
  const Navigate = useNavigate()
  let Details;
  const [navwidth, setnavwidth] = useState("w-44");
  const [iconRotate, seticonRotate] = useState("rotate-0");
  const [scaller, setscaller] = useState("scale-100");
  const [iconScaller, seticonScaller] = useState(125);
  const [hoverScale, sethoverScale] = useState("");
  const [enableHover, setenableHover] = useState("");
  const [name, setname] = useState("");
  const [Edition, setEdition] = useState('')
  // const  = () => {
  //   if (navwidth === "w-52") {
  //     setnavwidth("w-14");
  //     console.log(navwidth);
  //     seticonRotate("rotate-180");
  //     setscaller("scale-0");
  //   } else {
  //     setnavwidth("w-52");
  //     console.log(navwidth);
  //     seticonRotate("rotate-0");
  //     console.log(iconRotate);
  //     setscaller("scale-100");
  //     console.log(scaller);
  //   }
  // };
  const hoverButton = () => {
    if (enableHover === "") {
      setenableHover("hover:w-52");
      sethoverScale("group-hover:scale-100");
    } else if (enableHover === "hover:w-52") {
      setenableHover("");
      sethoverScale("");
    }
  };

  let effectCount = 0;
  useEffect (() => {
     Get()
  },)
  const Get=async()=>{
    const aaa=()=>{

      const nam = localStorage.getItem("name");
      const nae = JSON.parse(nam);
      setname(nae);
      console.log('nae',name)
      const ty = localStorage.getItem("Type")
      const typ = JSON.parse(ty)
      
      setEdition(typ)

    }
    await aaa()
  }

  return (
    <>
      <div
        className={`min-h-full ${navwidth}   bg-slate-900   group    ${enableHover} transition-all border-r-gray-500 border-r-2 `}
      >
        <div
          className="border-b-2 border-white mb-5 hover:cursor-pointer "
          onClick={() => {
            Navigate("/profile");
          }}
        >
          <div className="p-5 text-md text-white">{`${name}`}</div>
        </div>
        <div className="text-white w-44 text-center text-xl absolute bottom-5 ">
          <div className="text-xl">AUDDIT</div>
          <div className="text-sm  text-center w-full   grid  grid-col-2 justify-items-center">
            <div className="pl- pr-1">{`${Edition}`}</div>
            <div>Edition</div>
          </div>
        </div>

        <div className="bg-transparent  font-extralight">
          {/* {home button} */}
          <Link to={"/"}>
            <div className="bg-transparent flex w-inherit  cursor-pointer rounded-md ml-1 hover:bg-purple-500 ">
              <div className=" w-12 place-items-center   ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  viewBox="0 0 20 20"
                  fill="white"
                >
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
              </div>
              <div
                className={`text-white grid justify-items-center items-center text-sm   ${scaller}  ${hoverScale}  `}
              >
              <div>Home</div>
              </div>
            </div>
          </Link>
          {/* 2 btn accounts */}
          <Link to="/Account">
            <div className="bg-transparent flex w-inherit  cursor-pointer rounded-md ml-1  mt-4 hover:bg-purple-500 ">
              <div className=" w-12 place-items-center  ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  viewBox="0 0 20 20"
                  fill="white"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2h.01a1 1 0 100-2H10zm-4 1a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1zm1-4a1 1 0 100 2h.01a1 1 0 100-2H7zm2 1a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm4-4a1 1 0 100 2h.01a1 1 0 100-2H13zM9 9a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zM7 8a1 1 0 000 2h.01a1 1 0 000-2H7z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div
                className={`text-white grid justify-items-center items-center text-sm   ${scaller}  ${hoverScale}  `}
              >
              <div>Accounts</div>
              </div>
            </div>
          </Link>
          {/* 3 btn     statements  */}
          <Link to="/invoices">
            <div className="bg-transparent flex w-inherit  cursor-pointer rounded-md ml-1  mt-4 hover:bg-purple-500">
              <div className=" w-12 place-items-center  ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  viewBox="0 0 20 20"
                  fill="white"
                >
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                  <path
                    fillRule="evenodd"
                    d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div
                className={`text-white grid justify-items-center items-center text-sm   ${scaller}  ${hoverScale}  `}
              >
              <div>Create Invoice +</div>
              </div>
            </div>
          </Link>
          <Link to="/Print">
            <div className="bg-transparent flex w-inherit  cursor-pointer rounded-md ml-1  mt-4  hover:bg-purple-500">
              <div className=" w-12 place-items-center   ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  viewBox="0 0 20 20"
                  fill="white"
                >
                  <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <div
                className={`text-white grid justify-items-center items-center text-sm   ${scaller}  ${hoverScale}  `}
              >
              <div>Invoices</div>
              </div>
            </div>
          </Link>
          <Link to="/Transactions">
            <div className="bg-transparent flex w-inherit  cursor-pointer rounded-md ml-1  mt-4 hover:bg-purple-500">
              <div className=" w-12 place-items-center  ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10  "
                  viewBox="0 0 20 20"
                  fill="white"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div
                className={`text-white grid justify-items-center items-center text-sm   ${scaller}  ${hoverScale}  `}
              >
              <div>Home</div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
