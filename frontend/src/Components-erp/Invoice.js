import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { BiUser } from "react-icons/bi";
import "../Components-erp/invoiceSchema.css";
import jsCookie from 'js-cookie'
import { useNavigate } from "react-router-dom";
function Invoice() {
  const Navigate = useNavigate()
  let srCount = 0;
  let effectCount = 0;
  const [countx, setcountx] = useState(0)
  const [Name, setName] = useState("");
  const [totalAmount, settotalAmount] = useState(0)
  const [CGST, setCGST] = useState(0)
  const [SGST, setSGST] = useState(0)
  const [GrandTotal, setGrandTotal] = useState(0)
  const [RoundOff, setRoundOff] = useState(0)
  const [count, setcount] = useState(0)
  const [BilledTo, setBilledTo] = useState('')
  const [ShippedTo, setShippedTo] = useState('')
  const [scaleBilledSearch, setscaleBilledSearch] = useState("scale-0")
  const [scaleShippedSearch, setscaleShippedSearch] = useState('scale-0')
 const invoice = [
   {
     srNo: Number,
     Description: String,
     D2: String,
     D3: String,
     Code: String,
     Price: Number,
     Unit: String,
     qty: Number,
     Amount: Number,
     Date: String,
     Month: String,
   },
 ];
  let  data = [{
    name:'',
    Username:''
  }]
  useEffect(() => {
   if(effectCount===0){
effectCount++
   }else{
     getUserData();
      append()
   }
  }, []);
  const getUserData = () => {      //function to get USer data 
    const nam = localStorage.getItem("Username");
    const nae = JSON.parse(nam);
    setName(nae);
  };
  const Amount = (e) => {       //function to sum amount value for each field *call handleTotal function
    const count = e.target.id[0];
    const getPrice = document.getElementById(`${count}price`).value;
    const getQty = document.getElementById(`${count}Qty`).value;
    const amount = getPrice * getQty;
    const getAmountDiv = document.getElementById(`amount${count}`);
    getAmountDiv.innerText = amount;
     handleTotal()
  };
  const handleTotal=()=>{       //function to set total amount value,gst and grand total value
    let amt = 0
    for(let i=1;i<=srCount;i++){
        const getAmountDiv = document.getElementById(`amount${i}`).innerText;
        console.log(getAmountDiv)
        const parseAmount = parseFloat(getAmountDiv)
        console.log(parseAmount)
        amt = amt+parseAmount
      }
      console.log(amt)
      settotalAmount(amt)
      let cGst = amt*9/100;
      let sGst = amt*9/100;
      setSGST(sGst)
      setCGST(cGst)
     let aa = amt + cGst+sGst
     console.log('aa',aa)
     const aaa = parseInt(aa)
     const off = aa - aaa
     setRoundOff(off)
     setGrandTotal(aaa)
      
  }
  const deleteElement=(e)=>{
    const id = e.target.id[0]
    const element = document.getElementById(`tr${id}`)
    element.remove()
    let aa = count-1
    console.log('aa',aa)
     setcount(aa)
    console.log('setCount',count)
  }
  const append = () => {       // function to create new data input field on button click 
    const parentElement = document.getElementById("tbody");
    srCount = count + 1;
    console.log('sr',srCount)
      setcount(srCount) 
    console.log("sr", count);
    const trElement = document.createElement("tr");
    const tdElement = document.createElement("td");
    const amountElement = document.createElement("div");
    const inputElement = document.createElement("input");
    trElement.setAttribute("id", `tr${srCount}`);
    parentElement.append(trElement.cloneNode(true));
    const createdTr = document.getElementById(`tr${srCount}`);
    for (let i = 1; i <= 8; i++) {
      tdElement.setAttribute("id", `${srCount}td${i}`);
      tdElement.setAttribute("style", `padding-left:2px`);
      createdTr.append(tdElement.cloneNode(true));
      const createdTd = document.getElementById(`${srCount}td${i}`);

      if (i === 1) {
        const srElement = document.createElement("div");
        srElement.setAttribute("class", "srNo");
        srElement.setAttribute("id", `srNo${srCount}`);
        createdTd.append(srElement.cloneNode(true));
        const createdSr = document.getElementById(`srNo${srCount}`);
        createdSr.innerText = srCount;
      } else if (i === 7) {
        amountElement.setAttribute(`id`, `amount${srCount}`);
        amountElement.setAttribute(`class`, `amount`);
        createdTd.append(amountElement.cloneNode(true));
      } else if (i === 4) {
        inputElement.setAttribute("id", `${srCount}Qty`);
        inputElement.setAttribute(`class`, ` input1`);
        inputElement.setAttribute(`Type`, `Number`);
        inputElement.setAttribute(`Type`, `Number`);
        inputElement.setAttribute(`key`, `${srCount}`);
        inputElement.addEventListener(`change`, (e) => Amount(e));
        createdTd.append(inputElement.cloneNode(true));
        const createdInput = document.getElementById(`${srCount}Qty`);
        createdInput.addEventListener(`change`, (e) => Amount(e));
      } else if (i === 5) {
        const unitElement = document.createElement("div");
        unitElement.setAttribute("id", `unit${srCount}`);
        unitElement.setAttribute("class", `unit`);
        createdTd.append(unitElement.cloneNode(true));
        const createdUnit = document.getElementById(`unit${srCount}`);
        createdUnit.innerText = "NOS";
      } else if (i === 6) {
        inputElement.setAttribute("id", `${srCount}price`);
        inputElement.setAttribute(`class`, ` input1`);
        inputElement.setAttribute(`Type`, `Number`)
        inputElement.addEventListener(`onchange`, () => console.log("click"));
        createdTd.append(inputElement.cloneNode(true));
        const createdInput = document.getElementById(`${srCount}price`);
        createdInput.addEventListener(`change`, (e) => Amount(e));
      }else if(i===8){
        createdTd.addEventListener('click',(e)=>{deleteElement(e)})
        createdTd.setAttribute('style','cursor:pointer')
        createdTd.innerText = 'X'
      }
       else {
        inputElement.setAttribute("id", `${srCount}input${i}`);
        inputElement.setAttribute("Type", `Text`);
        inputElement.setAttribute(`class`, ` input1`);
        createdTd.append(inputElement.cloneNode(true));
      }
    }
  };
  const handlechange=(e)=>{      //function to handle change Event for receiver details
      const id = e.target.id
      const value = e.target.value
      if(id==='Billed To'){
         setBilledTo(value)
      }else{
        setShippedTo(value)
      }
    appendSearch(id,value)
  }
  const deScaleSearch=()=>{              //function to descale search panel in billed to and shipped to
    setscaleShippedSearch('scale-0')
    setscaleBilledSearch('scale-0')
  }
  const searchData=()=>{          

  }
const appendSearch=async(id,value)=>{              //function to created search panel for b & shipped to
  let Element;
    console.log(value)
    const res = await fetch("/Search", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ value }),
    }).then((res) => res.json());
    console.log(res)
       
    const {list } = res
    console.log('list',list)
    data.push(res)
    console.log('data',data)
      if(id==='Billed To')
      {
             Element = 'billedtoSearch'
             setscaleBilledSearch('scale-100')

      }else{
        Element = 'shippedtoSearch'
        setscaleShippedSearch('scale-100')
      }
   const parentElement = document.getElementById(Element)
   data.shift()
   console.log(data.length)
    const divElement = document.createElement("div");
       
    for (let i = 0; i <= data.length; i++) {
      let d = data[i]
      console.log("in");
      console.log(`li${i}`);
      divElement.setAttribute("id", `div${i}`);
      divElement.setAttribute("style", "margin:2px");
      parentElement.append(divElement.cloneNode(true));

      const createddiv = document.getElementById(`div${i}`);

      divElement.setAttribute("id", `li${i}`);
      divElement.setAttribute("style", `cursor:pointer`);
      createddiv.append(divElement.cloneNode(true));

      const createdLi = document.getElementById(`li${i}`);
      createdLi.addEventListener("click", (e) => selectValue(e));
      createdLi.innerText =  d[i].Username
          console.log('sd',d[i].name)
    }
   
}
const selectValue=(e)=>{          //function to  set both values of b & shipped to 
  setBilledTo(e.target.innerText)
  setShippedTo(e.target.innerText)
   
}
  const submit = async() => {     //function to submit invoice
    console.log('srcount',count)
    let co = 0;
    let cot = 1;
    let countn = 2;
    let count2 = 3;
    let count3 = 4;
    let count4 = 5;
    let count5 = 6;
    let count6 = 7;
    
  const ddd = new Date();
    for(let i=1;i<=count ;i++){
        invoice.push({
        srNo: i,
        Description: document.getElementById(`${i}input${countn}`).value,
        // D2: document.getElementById(`${i}des${cot}`).value,
        // D3: document.getElementById(`${i}des${count}`).value,
        Code: document.getElementById(`${i}input${count2}`).value,
        Price: document.getElementById(`${i}price`).value,
        qty: document.getElementById(`${i}Qty`).value,
        Amount: document.getElementById(`amount${i}`).innerText,
       Unit:document.getElementById(`unit${i}`).innerText ,
        Month: ddd.getMonth(),
        Date: ddd.getDate(),
      });


    
    }
    invoice.shift()
   
    console.log(invoice)
     const Cookie = jsCookie.get()
    const {loginCookie}= Cookie
    const cookie = loginCookie
   const status = 'not paid'
   const Type = 'send'
    const res = await fetch("/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ invoice,cookie,SGST,CGST,GrandTotal,BilledTo,ShippedTo,Name,status,Type }),
    })
      const result =  await res.json()
  if(result==='probleum'){
      window.alert('a probleum occured')
    }else if(result==='created'){
      window.prompt("Invoice created ")
      Navigate('/print')
      
    }
  };


  return (
    <>
      <div className="w-full h-full overflow-auto ">
        <div className=" p-2  h-fit w-full  text-center ">
          <div className=" text-xl font-bold">{`${Name}`}</div>
          <div className="text-md font-semibold">Tax Invoice</div>
        </div>
        <div className="  w-full h-fit  ">
          <div className="m-5 mt-8 w-fit ">
            <div className=" flex border-b-2 border-black z-50">
              <div>{<BiUser />}</div>
              <input
                id="Billed To"
                className={`ml-2 font-semibold outline-none text-md `}
                placeholder="Billed To - Username"
                value={BilledTo}
                onChange={(e) => {
                  handlechange(e);
                }}
              ></input>
            </div>
            <div
              id="billedtoSearch"
              className={`h-fit w-1/6 bg-white  shadow-black shadow-lg rounded-sm absolute ${scaleBilledSearch}`}
              onMouseLeave={() => {
                deScaleSearch();
              }}
            ></div>
          </div>
          <div className="m-5 mt-10 w-fit     ">
            <div className="flex  border-b-2 border-black ">
              <div>{<BiUser />}</div>
              <input
                className="ml-2 font-semibold outline-none text-md "
                placeholder="Shipped To"
                value={ShippedTo}
                onChange={(e) => {
                  handlechange(e);
                }}
              ></input>
            </div>

            <div
              id="shippedtoSearch"
              className={`h-fit w-1/6 absolute bg-white shadow-lg rounded-sm  ${scaleShippedSearch}`}
              onMouseLeave={() => {
                deScaleSearch();
              }}
            ></div>
          </div>
        </div>

        <div className="w-full  h-fit">
          <div>
            <table className="w-full">
              <thead className="bg-gradient-to-r from-ameth1 to-ameth2">
                <tr>
                  <th className="text-sm">SrNo</th>
                  <th className="text-sm">Description</th>
                  <th className="text-sm">HNS/SAC Code</th>
                  <th className="text-sm">Qty.</th>
                  <th className="text-sm">Unit</th>
                  <th className="text-sm">Price</th>
                  <th className="text-sm">AMOUNT</th>
                </tr>
              </thead>
              <tbody id="tbody">
                {() => {
                  append();
                }}
              </tbody>
            </table>
            <div
              id="button"
              className=" bg-purple-400/25 border-2 border-purple-500   text-center    rounded-lg w-full  h-10"
              onClick={() => {
                append();
              }}
            >
              <div className="text-sm cursor-pointer ">Add (+)</div>
            </div>
            <div className="h-fit w-full font-serif  text-sm">
              <div className="bg-gray-300/50 h-8 w-full  grid grid-cols-2 justify-items-end">
                <div>Total</div>
                <div className="mr-5">{totalAmount}</div>
              </div>
              <div className="bg-gray-300/50 h-8 w-full  grid grid-cols-2 justify-items-end">
                <div>SGST</div>
                <div className="mr-5">{SGST}</div>
              </div>
              <div className="bg-gray-300/50 h-8 w-full  grid grid-cols-2 justify-items-end">
                <div>CGST</div>
                <div className="mr-5">{CGST}</div>
              </div>
              <div className="bg-gray-300/50 h-8 w-full  grid grid-cols-2 justify-items-end">
                <div>RoundOff</div>
                <div className="mr-5">{RoundOff}</div>
              </div>
              <div className="bg-gray-300/50 h-8 w-full  grid grid-cols-2 justify-items-end">
                <div> Grand Total</div>
                <div className="mr-5">{GrandTotal}</div>
              </div>
            </div>
          </div>
          <div className="ml-5 mt-5">
         
            <button class="bg-transparent hover:bg-purple-500 text-purple-700 font-semibold hover:text-white py-2 px-4 border border-purple-500 hover:border-transparent rounded"
             onClick={()=>submit()}>
              Create
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Invoice;
