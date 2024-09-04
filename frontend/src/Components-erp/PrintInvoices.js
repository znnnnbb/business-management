import { data } from "autoprefixer";
import { getDate, setDate } from "date-fns";
import React, { useEffect, useState } from "react";
import $ from "jquery";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import jsCookie from "js-cookie";
function PrintInvoices(props) {
  const [BilledTo, setBilledTo] = useState("");
 const [Receiver, setReceiver] = useState('')
 const [ReceiverAdress, setReceiverAdress] = useState('')
 const [ReceiverGSTIN, setReceiverGSTIN] = useState('')
   const [Self, setSelf] = useState("");
   const [SelfAdress, setSelfAdress] = useState("");
   const [SelfGSTIN, setSelfGSTIN] = useState("");
   const [SelfEmail, setSelfEmail] = useState("");
   const [GrandTotal, setGrandTotal] = useState()
//  const [props.Self, setprops.Self] = useState('')
//  const [props.SelfAdress, setprops.SelfAdress] = useState('')
//  const [props.SelfGSTIN, setprops.SelfGSTIN] = useState('')
 
  // const [Receiver, setReceiver] = useState({
  //   Name: "",
  //   Adress: "",
  //   GSTIN: "",
  //   Email: "",
  // });
  

  let detail = [];

  const transactions = [
    {
      Amount: String,
      Code: String,
      Description: String,
      Price: String,
      Unit: String,
      qty: String,
      SrNo: Number,
    },
  ];

  let count = 0;
  useEffect(() => {
    if (count === 0) {
      Getdata()
      getInvoice();

      count++;
    } else {
    }
  }, []);

  let k = 0;

  // const getData = async () => {
  //   const cookie = jsCookie.get();
  //   const { loginCookie } = cookie;
  //   const Cookie = loginCookie;
  //   const res = await fetch("/getdata", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ Cookie }),
  //   });
  //   const data = await res.json();
  //   const { Adress, name, GSTIN, Email } = data;
  //   // setData({ Name: Name });
  //   // setData({ Adress: Adress });
  //   // setData({ GSTIN: GSTIN });
  //   // setData({ Email: Email });
  //   // console.log('data',data)
  //   setprops.Self(name)
  //   setprops.SelfAdress(Adress)
  //   setprops.SelfGSTIN(GSTIN)

  // }

    const Getdata = () => {
      const nam = localStorage.getItem("Username");
      const name = JSON.parse(nam);
      const Adres = localStorage.getItem("Adress");
      const Adress = JSON.parse(Adres)
      const Emai = localStorage.getItem("Email");
      const Email = JSON.parse(Emai)
      const GSTI = localStorage.getItem("GSTIN");
      const GSTIN = JSON.parse(GSTI)
      setSelf(name);
      setSelfAdress(Adress);
      setSelfGSTIN(GSTIN);
      setSelfEmail(Email);
    };

  const getInvoice = async () => {
    const cookie = jsCookie.get();
    const { loginCookie } = cookie;
    const Cookie = loginCookie;
     
    const res = await fetch("/getBill", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ Cookie }),
    });
    const data = await res.json();
     console.log('asvdas',data)
    const { Transactions } = data;
    console.log(Transactions.length)
  let l=0;
      let count = Transactions.length - 1;
      
      for (count; count <= 0; count--) {
        console.log(Transactions[count])
        const { Type } = Transactions[count];
        if (Type === "Send") {
          l = count;
          console.log('l',l)
          break;
        } else {
        }
      }
     
    
    const { invoice } = Transactions[l];
    const { GrandTotal } = Transactions[l];
    const {Name} = Transactions[l]
    setGrandTotal(GrandTotal)
     const Receiver = Name
  //  await getReceiver(Receiver);
    
    for (let j = 0; j <= invoice.length -1 ; j++) {
      transactions.push(invoice[j]);

    }

   console.log('transaction',transactions)
    const parentElement = document.getElementById("tbody");
    const trElement = document.createElement("tr");
    trElement.setAttribute('style','border:2px Solid black')
    const tdElement = document.createElement("td");
    tdElement.setAttribute(
      "style",
      "border:2px solid black;text-align: center;"
    );
    tdElement.setAttribute("style", "text-align: center;");
    const desElement = document.createElement("div");
    const D2Element = document.createElement("div");
    const D3Element = document.createElement("div");
    for (let k = 1; k <= transactions.length-1; k++) {
      trElement.setAttribute("id", `${k}`);
      parentElement.append(trElement.cloneNode(true));
      const createdTr = document.getElementById(`${k}`);
      for (let m = 1; m <= 7; m++) {
        tdElement.setAttribute("id", `${k}td${m}`);
        createdTr.append(tdElement.cloneNode(true));
        const createdTd = document.getElementById(`${k}td${m}`);
        const index = transactions[1];
       
        switch (m) {
          case 1:
            createdTd.innerText = m;
            break;
          case 2:
            for (let h = 1; h <= 3; h++) {
              switch (h) {
                case 1:
                  desElement.innerText = index.Description;
                  createdTd.append(desElement.cloneNode(true));

                  break;
                case 2:
                  D2Element.innerText = index.D2;
                  createdTd.append(D2Element.cloneNode(true));
                  break;
                case 3:
                  D3Element.innerText = index.D3;
                  createdTd.append(D3Element.cloneNode(true));
                  break;
              }
            }

          case 3:
            createdTd.innerText = index.Code;
            break;
          case 4:
            createdTd.innerText = index.qty;
            break;
          case 5:
            createdTd.innerText = index.Unit;
            break;
            case 6:
              
              createdTd.innerText = index.Price
              break;
              case 7:
                createdTd.innerText = index.Amount
                  break;
        }

      }
    }
  };

  // const print = () => {
  //   console.log("inn");
  //   var printContents = document.getElementById("printDiv").innerHTML;
  //   var originalContents = document.body.innerHTML;

  //   document.body.innerHTML = printContents;

  //   window.print();

  //   document.body.innerHTML = originalContents;
  // };

  const getReceiver = async (Receiver) => {
    //convert this to post request to pass username of receiver
        console.log(Receiver)
    const res = await fetch("/getReceiver", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ Receiver }),
    });
    const data = await res.json();
    const { Adress, name, GSTIN, Email } = data;
    console.log('data',data)
    // setReceiver({ Name: Name });
    // setReceiver({ Adress: Adress });
    // setReceiver({ GSTIN: GSTIN });
    // setReceiver({ Email: Email });
    setReceiver(name)
    setReceiverAdress(Adress)
    setReceiverGSTIN(GSTIN)
  };

  return (
    <>
      <div
        id="printScreen"
        className="  overflow-auto  bg-white  grid justify-items-center text-black"
      >
        <div
          id="printDiv"
          className="border-2 bg-white w-full   space-y-4 h-full rounded-lg shadow-lg text-black "
        >
          GSTIN:{`${SelfGSTIN}`}
          <div className="border-2 border-black">
            {
              //headers
            }
            <div className="text-center font-bold  text-md ">TAX INVOICE</div>
            <div className="text-center font-bold  font-mono text-2xl ">
              {`${Self}`}
            </div>
            <div className="text-center text-md font-bold ">
              {`${SelfAdress}`}
            </div>
            <div className="text-center font-bold  text-md ">
              {`UTTRAKHAND INDIA-248197`}
            </div>
            <div className="text-center font-bold text-xs border-b-2 border-black ">
              {`Tel: 09258350222,9917468057 Email: diya.12018@yahoo.com`}
            </div>
            {
              //invoice details   2 sections flex container
            }
            <div className="grid grid-cols-2 ">
              <div className="font-bold text-xs border-r-2 border-b-2 border-black  ">
                <div>
                  {`Invoice Number`} {`:  2021/2022/465 `}
                </div>
                <div>
                  {`Date Of Invoice`}
                  {` : 13.03.2022 `}
                </div>
                <div>{`Place Of Supply  :  Uttrakhand `}</div>
                <div className="">{`Reverse Charge  : No `}</div>
                <div></div>
              </div>
              <div className="font-bold text-xs border-b-2 border-black ">
                <div className="pr-5">
                  {`Transportation Mode`}{" "}
                  {`: (Apply For Supply of Goods Only) `}
                </div>
                <div>
                  {`Date Of Invoice`}
                  {` : 13.03.2022 `}
                </div>
                <div>{`Place Of Supply  :  selaqui `}</div>
                <div>{`Eway Bill No.  :   `}</div>
                <div>{`P.o NO. & Date  :  `}</div>
              </div>
            </div>
            <div>
              {
                //supplier
              }
              <div className="grid grid-cols-2  border-b-2 border-black ">
                <div className="font-bold border-r-2 border-black  ">
                  <div className="font-bold  border-black ">
                    <div className="text-xs">Billed To:</div>
                    <div
                      id="ShippedTo"
                      className="text-xl"
                    >{`${Receiver}`}</div>
                    <div className="text-xs">
                      {`Adress :`} {`${ReceiverAdress}`}
                    </div>
                    <div className="text-xs">
                      {`State :`} {`Dehradun,Uttrakhand-248197`}
                    </div>
                    <div className="text-xs">
                      {`State Code:`} {`05`}
                    </div>
                    <div className="text-xs">
                      {`GSTIN No. : `} {`${ReceiverGSTIN}`}
                    </div>
                  </div>
                </div>
                <div className="font-bold text-xs    ">
                  <div className="font-bold  ">
                    <div className="text-xs">Shipped To:</div>
                    <div className="text-xl">{`${Receiver}`}</div>
                    <div className="text-xs">
                      {`Adress :`} {`${ReceiverAdress}`}
                    </div>
                    <div className="text-xs">
                      {`State :`} {`Dehradun,Uttrakhand-248197`}
                    </div>
                    <div className="text-xs">
                      {`State Code:`} {`05`}
                    </div>
                    <div className="text-xs">
                      {`GSTIN No. : `} {`${ReceiverGSTIN}`}
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full border-b-2 border-black">
                <table>
                  <thead className="border-b-2 border-black">
                    <tr>
                      <td className="border-r-2 text-sm w-1/12 border-black text-center font-bold ">
                        Sr No.
                      </td>
                      <td className="border-r-2 text-sm w-4/12 border-black text-center font-bold ">
                        Description of Goods
                      </td>
                      <td className="border-r-2 text-sm w-1/12 border-black text-center font-bold ">
                        HSN/SAC Code
                      </td>
                      <td className="border-r-2 text-sm w-1/12 border-black text-center font-bold ">
                        QTY.
                      </td>
                      <td className="border-r-2 text-sm w-1/12 border-black text-center font-bold ">
                        Unit
                      </td>
                      <td className="border-r-2 text-sm  w-1/12 border-black text-center font-bold ">
                        Price
                      </td>
                      <td className="border-r-2  border-black  text-center ">Amount</td>
                    </tr>
                  </thead>
                  <tbody id="tbody"></tbody>
                </table>
                <div className="border-b border-black ">
                  Amount :-{`${GrandTotal}`}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PrintInvoices;
