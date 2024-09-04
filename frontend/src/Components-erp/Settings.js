import React, { useState } from "react";
import Navbar from "./Navbar";
function Settings(props) {
  const aaa = () => {
    const { innerWidth: width, innerHeight: height } = window;
    console.log(height);
    console.log(width);
  };
  let i=0
  var fff = ` <td className="pl-3 pr-3 border-2 border-black" >{i}</td>
     <td>
       <input type={'text'} className=' border-2 border-black'  ></input>

     </td>
     <td>
       <input type={'text'} className=' border-2 border-black'  ></input>

     </td>
     <td>
       <input type={'text'} className=' border-2 border-black'  ></input>

     </td>
     <td>
       <input type={'text'} className=' border-2 border-black'  ></input>

     </td>
     <tr   > 
     
     <td className="pl-3 pr-3 border-2 border-black" >${i}</td>
     <td>
       <input type={'text'} className=' border-2 border-black'  ></input>

     </td>
     <td>
       <input type={'text'} className=' border-2 border-black'  ></input>

     </td>
     <td>
       <input type={'text'} className=' border-2 border-black'  ></input>

     </td>
     <td>
       <input type={'text'} className=' border-2 border-black'  ></input>

     </td>
    </tr>`
  const inputTable=()=>{
   
     
   
    
      }
     
  const bbb=()=>{
    console.log(inputTable())
      document.getElementById('ccc').innerHTML = fff
  }
  return (
    <>
    <div id="ddd"  >
  
    </div>
      <div id="ccc" >
     
      </div>
     <button onClick={()=>bbb()} >ss</button>
    </>
  );
}

export default Settings;
