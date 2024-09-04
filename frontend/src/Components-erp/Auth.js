import React from 'react'
import jsCookie from 'js-cookie';
import { useNavigate } from 'react-router-dom';

function Auth() {
  
    const Navigate = useNavigate()
        console.log('inAuth');
        const cookie = jsCookie.get();
        console.log(cookie);
        const { loginCookie } = cookie;
        console.log(loginCookie);
        if (!loginCookie) {
            console.log('token error');
           
            

        } else {
            try {
                console.log('in try');

                const Authenticate = async () => {
                    const res = await fetch("/Auth", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ loginCookie }),
                    }).then((res) => res.json());
                    console.log('res', res);
                    if (res === false) {
                      return('/')
                       
                    } else if (res === true) {
                       
                      return('/Print')
                    }


                };
               
            } catch (err) {
                console.log(err);
            }

        }
    }
     





export default Auth