import jsCookie from 'js-cookie';
import React from 'react'

const GetRequest= async()=>{
   console.log('get')
   const {loginCookie} = jsCookie.get()
   const res = await fetch("/getReq", {
     //authentication request
     method: "POST",
     headers: { "Content-Type": "application/json" },
     body: JSON.stringify({ loginCookie }),
   }).then((res) => res.json());
    return(res)
}

export default GetRequest
