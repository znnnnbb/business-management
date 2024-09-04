import React from "react";
import Bottomnav from "./Bottomnav";

function SmallContent() {
  return (
    <>
      <div className="h-screen w-screen bg-gradient-to-br from-pink-600 to-indigo-600   dark:from-black dark:to-black  ">

        <div class="grid h-screen place-items-center  dark:text-white   ">
          
          <div className="h-72 w-72   bg-transparent dark:bg-gradient-to-r from-pink-600 to-indigo-600 rounded-lg inset-0  blur-md "></div>
        <div className="bg-white/50 dark:bg-black   absolute   h-72  grid place-items-center  rounded-lg  ">
        <div className="p-0 "  ><strong>AUDITT</strong></div>
        <div className="p-9"  >Your Device Is Not Supported!!</div>
        <button class="bg-blue-500 dark   text-white font-bold py-2 px-4 rounded   ">
          Notify Me When Supported
      
        </button>
        </div>
        </div>
      </div>
    </>
  );
}

export default SmallContent;
