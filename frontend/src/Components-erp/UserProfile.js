import { GState } from "jspdf";
import React from "react";
import { useState } from "react";
import jsCookie from "js-cookie";
import { Navigate, useNavigate } from 'react-router-dom';

import { useEffect } from "react";
import ProductCatalog from "./ProductCatalog";

const productdata = [
  {
    image: "logo.png",
    Productname: "Product A",
    Price: 200,
  }, {
    image: "logo.png",
    Productname: "Product A",
    Price: 200,
  }, {
    image: "logo.png",
    Productname: "Product A",
    Price: 200,
  }, {
    image: "logo.png",
    Productname: "Product A",
    Price: 200,
  }, {
    image: "logo.png",
    Productname: "Product A",
    Price: 200,
  }, {
    image: "logo.png",
    Productname: "Product A",
    Price: 200,
  }, {
    image: "logo.png",
    Productname: "Product A",
    Price: 200,
  },

];





function Userprofile() {
  const navigate = useNavigate()

  const [Name, setName] = useState("");
  const [Username, setUsername] = useState("");
  const [Adress, setAdress] = useState("");
  const [GSTIN, setGSTIN] = useState("");
  const [Email, setEmail] = useState("");
  const [Contact, setContact] = useState("");
  const [Type, setType] = useState("");
  let effectCount = 0
  useEffect(() => {
    if (effectCount === 0) {
      getData()
      effectCount++

    }
  },)


  const getData = async () => {
    const value = JSON.parse(localStorage.getItem("find"));
    console.log('value', value)
    const res = await fetch("/Search", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ value }),
    }).then((res) => res.json());
    console.log(res);
    const { name, Username, Adress, GSTIN, Email, Contact, Type } = res[0];

    setName(name);
    setAdress(Adress)
    setGSTIN(GSTIN)
    setEmail(Email)
    setType(Type)
    setUsername(Username)

  };

  const submit = async () => {
    const cookie = jsCookie.get();
    const { loginCookie } = cookie;
    const Cookie = loginCookie;

    const res = await fetch("/addClient", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ Username, Cookie }),
    }).then((res) => res.json());
    if (res === "Sucessfull") {
      window.alert("Added SucessFully");
    } else {
      window.alert("a Probleum occured");
    }
  }
  return (
    <>
      <div className="overflow-auto h-screen ">
        <div className="w-full flex font-medium ">
          <div className="w-1/4 ml-2 border-2 outline m-4 mr-2">
            <img className="w-full " src="logo.png" alt="" />
          </div>
          <div className=" m-4 mr-6 w-3/4 h-80 border   p-4">
            <div className="mt-4 ml-2 flex ">
              <div className="-mt-8 h-80 -ml-8 pl-4 bg-stone-100 text-black">
                <span className="mr-20  ">Businesses Name:</span>
                <br />
                <br />
                <span className="mr-40  ">Adress:</span>
                <br />
                <br />
                <span className="mr-40 ">Email:</span>
                <br />
                <br />
                <span className="mr-40 ">GSTIN:</span>
                <br />
                <br />
                <span className="mr-24 ">Businesses Type:</span>
                <br />
                <br />
                <span className="mr-40 "> Contact:</span>

                <br />
                <br />
              </div>
              <div className="-mt-8 h-80  pl-4  font-normal text-black w-full bg-stone-100">
                <span className="text-l  p-2">{`${Name}`}</span>
                <br />
                <br />
                <span className="text-l  p-2 ">{`${Adress}`}</span>
                <br />
                <br />
                <span className="text-l  p-2 "> {`${GSTIN}`}</span>
                <br />
                <br />
                <span className="text-l  p-2 "> {`${Email}`}</span>
                <br />
                <br />
                <span className="text-l  p-2 "> {`${Type}`}</span>
                <br />
                <br />
                <span className="text-l  p-2 "></span>
                <div className="w-full grid justify-items-center ">
                  <button className="  relative right-3  bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                    onClick={() => { submit() }}>
                    Add Client
                  </button><button className="  relative left-36 -top-11  bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                    onClick={() => { navigate('/ProductCatalog') }} >
                    Product Catalog
                  </button>
                </div>
                <br />
                <br />
              </div>
            </div>
          </div>
        </div>
        <div className="  h-3/6 overflow-">
          <div className="w-full  items-center justify-center flex flex-wrap">
            {productdata.map((product, i) => (
              <div className="w-1/5 border outline-black  m-4 shadow shadow-black bg-white-900 text-black">
                <img
                  className=" p-auto mb-1"
                  src={`${product.image}`}
                  alt="img"
                />

                <span className=" px-20 text-l text-grey-300">
                  {product.Productname}
                </span>
                <br />
                <span className=" px-20 text-xl">{product.Price}</span>
                <br />

                <div className="grid w-full justify-items-center items-center ">
                  <button className="   bg-transparent hover:bg-purple-500 text-purple-700 font-semibold hover:text-white py-2 px-4 border border-purple-500 hover:border-transparent rounded">
                    Add
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Userprofile;
