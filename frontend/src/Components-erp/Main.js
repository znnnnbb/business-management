import React, { useState } from "react";

import { Route } from "react-router-dom";
import Content from "./Content";
import SmallContent from "./SmallContent";

function Main() {
  

  const selectDevice = () => {
    const { innerWidth: width, innerHeight: height } = window;
    console.log(width, height);
    if (width > 720 || height > 1280) {
        return <Content />;
      } else if (width < 1300 || height < 768) {
        return <SmallContent />;
      }
  };
  
  
  return (
    <>
      <div   >
        {selectDevice()}
       
      </div>
    </>
  );
}

export default Main;
