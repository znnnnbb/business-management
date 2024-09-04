import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Navbar from "./Navbar";
import Topbar from "./Topbar";

import { useNavigate } from "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Settings from "./Settings";
import Invoice from "./Invoice";
import PrintInvoices from "./PrintInvoices";
import Transactions from "./Transactions";
import Signup from "./Signup";
import Login from "./Login";
import GetDetails from "./GetDetails";
import Notificationbox from "./Notificationbox";
import Home from "./Home";
import WorkSpace from "./WorkSpace";
import jsCookie from "js-cookie";
import { useEffect } from "react";
import { AiOutlinePrinter } from "react-icons/ai";
import Accounts from "./Accounts";
import { BiPowerOff } from "react-icons/bi";
import CreditAccount from "./CreditAccount";
import { AiOutlineUserAdd } from "react-icons/ai";
import AddaDemoClient from "./AddaDemoClient";
import Sample from "./Sample";
import ChooseSearch from "./ChooseSearch";
import Profile from "./profile";
import SearchUser from "./SearchUser";
import UserProfile from "./UserProfile";
import ProductCatalog from "./ProductCatalog";


function Content(props) {
  const Navigate = useNavigate()
  const [contentMargin, setcontentMargin] = useState("ml-56");
  const [PromtYes, setPromtYes] = useState('')
  const [PromtNo, setPromtNo] = useState('')



  const [Promt, setPromt] = useState('there is an error')
  const [PromtScale, setPromtScale] = useState('scale-0')
  const changeContentPadding = () => {
    if (contentMargin === "ml-56") {
      console.log("asdas");
      setcontentMargin("ml-20");
    } else {
      console.log("a");
      setcontentMargin("ml-56");
    }
  };


  const print = () => {
    console.log("inn");
    var printContents = document.getElementById("printDiv");
    if (!printContents) {
      var x = 'cannot print on this Page'
      const fun = promt(x)
      if (fun === 'yes') {
        print()
      } else {

      }
    } else {

      var originalContents = document.body.innerHTML;

      document.body.innerHTML = printContents.innerHTML;

      window.print();

      document.location.reload();
      document.body.innerHTML = originalContents;
    }
  };

  const promt = async (x) => {

    const aaa = x
    setPromt(aaa)
    setPromtScale('scale-100')
  }
  const promtClose = () => {

    setPromtScale('scale-0')

  }
  const logout = async () => {
    //  document.cookie = 'logincookie' + ";max-age=0";
    // const log =  await  props.promt()
    // if(log === 'yes'){

    jsCookie.remove("loginCookie");
    localStorage.clear()
    Navigate("/login");
    window.alert("Logged Out");
    window.location.reload();
    // }else{

    // }
  };
  return (
    <>
      <div className="flex   bg-white h-fit  w-full    relative  ">
        <div className="">
          <Navbar promt={promt} />
        </div>
        <div
          className={`bg-transparent absolute w-screen h-screen z-50 grid justify-items-center ${PromtScale} `}
        >
          <div className="absolute h-fit w-3/6 top-24 bg-white shadow-xl rounded-lg p-10 border-2 text-center">
            <div
              className="absolute border-2  right-10 p-2 hover:bg-gray-200 cursor-pointer"
              onClick={() => {
                promtClose();
              }}
            >
              X
            </div>
            <div className="text-center font-bold text-2xl  ">MESSAGE</div>
            <br></br>
            <div className="text-lg font-bold ">{`${Promt}`}</div>
            <br></br>
            <div className=" grid col-span-2 gap-5">
              <button
                className="bg-blue-600 text-white pl-5 pr-5 pt-2 pb-2 rounded-lg   hover:bg-blue-700"
                onClick={() => {
                  setPromtYes("yes");
                }}
              >
                OK
              </button>
              <button
                className="border-2 pl-5 pr-5 pt-2 pb-2 rounded-lg  hover:bg-red-500 hover:text-black "
                onClick={() => {
                  setPromtNo("No");
                }}
              >
                NO
              </button>
            </div>
          </div>
        </div>
        <div
          className={`absolute ml-56 z-40 w-5/6 h-screen overflow-auto bg-white/75 blur-lg grid justify-items-center items-center ${PromtScale} `}
        ></div>
        <div className={`  h-screen   bg-inherit `}>
          <div className="absolute w-14   h-screen bg-white shadow-sm shadow-black right-0   ">
            <div className="m-2 mt-18  gap-4  h-5/6  justify-items-center">
              <div
                className=" p-2  text-center rounded-md cursor-pointer  "
                onClick={() => {
                  print();
                }}
              >
                <div>{<AiOutlinePrinter size={40} />}</div>
              </div>
              <div
                className=" p-2  text-center rounded-md cursor-pointer  "
                onClick={() => {
                  logout();
                }}
              >
                <div>{<BiPowerOff size={40} />}</div>
              </div>{" "}
              <div
                className=" p-2  text-center rounded-md cursor-pointer  "
                onClick={() => {
                  Navigate("/Search");
                }}
              >
                <div>{<AiOutlineUserAdd size={40} />}</div>
              </div>
            </div>
          </div>
          {/* Main workspace */}
          <div className="bg-white ml-1  w-5/6 absolute   h-screen       overflow-auto   ">
            <Routes>
              <Route exact path="/settings" element={<Settings />}></Route>
              <Route exact path="/Account" element={<Accounts />}></Route>
              <Route exact path="/Account" element={<Accounts />}></Route>
              <Route
                exact
                path="/AddDemoClient"
                element={<AddaDemoClient />}
              ></Route>
              <Route
                exact
                path="/CreditAccount"
                element={<CreditAccount />}
              ></Route>
              <Route exact path="/invoices" element={<Invoice />}></Route>
              <Route exact path="Print" element={<PrintInvoices />}></Route>
              <Route path="Transactions" element={<Transactions />}></Route>
              <Route path="Search" element={<ChooseSearch />}></Route>
              <Route path="sample" element={<Sample />}></Route>
              <Route path="profile" element={<Profile />}></Route>
              <Route path="searchUsers" element={<SearchUser />}></Route>
              <Route path="UserProfile" element={<UserProfile />}></Route>
              <Route path="productCatalog" element={<ProductCatalog/>}></Route>



              <Route path="/" element={<Home />}></Route>
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default Content;
