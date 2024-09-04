import React,{useState} from "react";
import Main from "./Components-erp/Main";
import "../src/App.css";
import { render } from "@testing-library/react";
import Signup from "./Components-erp/Signup";
import GetDetails from "./Components-erp/GetDetails";
import Login from "./Components-erp/Login"
import jsCookie from "js-cookie";
import { Navigate, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { set } from "date-fns";
import Notificationbox from "./Components-erp/Notificationbox";
import Out from "./Components-erp/Out";
import { useNavigate } from "react-router-dom";


function App() {
  const Navigate = useNavigate()
   const [content, setcontent] = useState(<Out/>)
  const changeState=()=>{
    
  }
  let effectCount=0;
  

   
 useEffect(() => {
   
    console.log('inn')
    Auth()
 
   
 }, [])
 
  const Auth=async()=>{
    
    console.log('inAuth')
     const cookie =  jsCookie.get();
     console.log(cookie);
    const {loginCookie} = cookie;
      console.log(loginCookie);
    if(!loginCookie){
      console.log('token error')

     setcontent(
       <>
       
         {/* <Login Auth={Auth} change={change} /> */}
         {/* <UnAuthUser auth = {Auth}  /> */}
         <Out Auth={Auth} />
       </>
     );
     
    }else{
      try{
      
    console.log('in try')
    
       const Authenticate=async()=>{
          const res = await fetch("/Auth", {   //authentication request
          method: "POST",
           headers: { "Content-Type": "application/json" },
          body: JSON.stringify({loginCookie }),
           }).then((res) => res.json());
        console.log('res',res)
          if(res ===false){
          setcontent(
            <>
            <Out Auth ={Auth} />
            
          </>)
        
       }else if(res===true){
            setcontent(<Main/>)

       }
      
         
       }
       Authenticate()
    }catch(err){
      console.log(err)
    }
      
    }
  }
  return (
    <div className="App">
    
      {content}
    </div>
  );
}

export default App;
