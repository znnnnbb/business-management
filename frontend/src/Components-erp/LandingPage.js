import React from "react";
import { useNavigate } from "react-router-dom";
function LandingPage() {
  const Navigate = useNavigate();
  return (
    <>
      <div className="w-screen h-screen">
        <div className="w-full  h-24 flex float-root bg-fixed">
          <div className="w-5 h-24 bg-black absolute left-2 mt-2 "></div>
          <div className="    ml-5  p-2 absolute left-4 inline-block">
            <div className="text-3xl font-bold">Auddit.com</div>
            <div className="">Accelerate your Business</div>
          </div>
          <div className="flex absolute  right-4    ">
            <a
              className="p-3 cursor-pointer  text-xl hover:border-b-2 hover:border-black "
              onClick={() => {
                Navigate("/");
              }}
            >
              Home
            </a>
            <a
              className="p-3 cursor-pointer  text-xl hover:border-b-2 hover:border-black "
              onClick={() => {
                Navigate("/login");
              }}
            >
              Login
            </a>
            <a
              className="p-3 cursor-pointer  text-xl hover:border-b-2 hover:border-black "
              onClick={() => {
                Navigate("/");
              }}
            >
              Contact Us
            </a>
            <a
              className="p-3 cursor-pointer  text-xl hover:border-b-2 hover:border-black "
              onClick={() => {
                Navigate("/");
              }}
            >
              Explore
            </a>
          </div>
        </div>
        <div className="top-52 left-4  absolute">
          <div className="text-5xl">Welcome To Auddit</div>
          <div className="font-bold">
            Access accounting data any time, anywhere.
          </div>
          <div className="font-bold">Enables scalability and flexibility.</div>
          <div className="font-bold">
            improved accounting & bookkeeping accuracy.
          </div>
        </div>
        <div className=" absolute bottom-56 w-screen  ">
          <div className="grid gap-5  justify-items-center">
            <div className="text-3xl  font-bold ">
              Start your new Journey With us
            </div>
            <button
              className="px-36 py-5   bg-blue-700 rounded-lg text-white hover:scale-105"
              onClick={() => Navigate("/login")}
            >
              Login
            </button>
            <div className="font-bold text-lg">or</div>
            <button
              className="px-32 py-5 scale-105  bg-blue-700 rounded-lg text-white  hover:scale-110 "
              onClick={() => {
                Navigate("/signup");
              }}
            >
              SignUp
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
