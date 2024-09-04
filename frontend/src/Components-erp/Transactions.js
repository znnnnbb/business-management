import jsCookie from "js-cookie";
import React, { useEffect } from "react";
import "../Components-erp/Trans.css";

function Transactions(props) {
  var a = new Date();

  let data = [
    {
      Receiver: String,
      date: String,
      time: String,
      totalAmount: String,
      billno: String,
    },
  ];
  // let data1 = [
  //   {
  //     Receiver: "Receiver",
  //     totalAmount: 100,
  //     invoice: [
  //       {
  //         srNo: 1,
  //         Description: "rytxyx",
  //         Code: "cvuyf",
  //         Rate: "2",
  //         qty: "2",
  //         Amount: "4",
  //         Unit: "nos",
  //         Month: 7,
  //         Date: 22,
  //       },
  //     ],
  //   },
  //   {
  //     Receiver: "ffsdffsfs",
  //     totalAmount: 100,
  //     invoice: [
  //       {
  //         srNo: 1,
  //         Description: "rufu",
  //         Code: "f7f78",
  //         Rate: "7",
  //         qty: "3",
  //         Amount: "21",
  //         Unit: "nos",
  //         Month: 7,
  //         Date: 22,
  //       },
  //     ],
  //   },
  //   {
  //     Receiver: "ffsdffsfs",
  //     totalAmount: 100,
  //     invoice: [
  //       {
  //         srNo: 1,
  //         Description: "adasd",
  //         Code: "asdasd",
  //         Rate: "2",
  //         qty: "2",
  //         Amount: "4",
  //         Unit: "nos",
  //         Month: 7,
  //         Date: 25,
  //       },
  //       {
  //         srNo: 2,
  //         Description: "dazxc",
  //         Code: "asdasdas",
  //         Rate: "3",
  //         qty: "2",
  //         Amount: "6",
  //         Unit: "nos",
  //         Month: 7,
  //         Date: 25,
  //       },
  //       {
  //         srNo: 3,
  //         Description: "zc",
  //         Code: "cczx",
  //         Rate: "5",
  //         qty: "2",
  //         Amount: "10",
  //         Unit: "nos",
  //         Month: 7,
  //         Date: 25,
  //       },
  //     ],
  //   },
  //   {
  //     Receiver: "Receiver",
  //     totalAmount: 100,
  //     invoice: [],
  //   },
  //   {
  //     Receiver: "Receiver",
  //     totalAmount: 100,
  //     invoice: [
  //       {
  //         srNo: 1,
  //         Description: "wertwr",
  //         D2: "tnt",
  //         D3: "fgbg",
  //         Code: "bf",
  //         Rate: "2",
  //         qty: "2",
  //         Amount: "4",
  //         Unit: "nos",
  //         Month: 7,
  //         Date: 26,
  //       },
  //     ],
  //   },
  //   {
  //     Receiver: "ffsdffsfs",
  //     totalAmount: 100,
  //     invoice: [
  //       {
  //         srNo: 1,
  //         Description: "BALANCER SAMSUNG GREY T5 8737",
  //         D2: "3DXBL055RINGG01",
  //         D3: "(P.O - 440006155)",
  //         Code: "84509010",
  //         Rate: "22.30",
  //         qty: "600",
  //         Amount: "13380",
  //         Unit: "nos",
  //         Month: 7,
  //         Date: 26,
  //       },
  //       {
  //         srNo: 2,
  //         Description: "CLASP CIRCLE DL T1/T2/T3/T6",
  //         D2: "3DXSBADL0000001",
  //         D3: "(P.O - 440006155)",
  //         Code: "84509010",
  //         Rate: "2.48",
  //         qty: "4000",
  //         Amount: "9920",
  //         Unit: "nos",
  //         Month: 7,
  //         Date: 26,
  //       },
  //     ],
  //   },
  //   {
  //     Receiver: "Receiver",
  //     totalAmount: 100,
  //     invoice: [
  //       {
  //         srNo: 1,
  //         Description: "asd",
  //         D2: "asdas",
  //         D3: "dasdasd",
  //         Code: "asdasd",
  //         Rate: "2",
  //         qty: "",
  //         Amount: "0",
  //         Unit: "nos",
  //         Month: 8,
  //         Date: 25,
  //       },
  //       {
  //         srNo: 2,
  //         Description: "asdasd",
  //         D2: "asdas",
  //         D3: "dasd",
  //         Code: "sdasda",
  //         Rate: "123",
  //         qty: "12",
  //         Amount: "1476",
  //         Unit: "nos",
  //         Month: 8,
  //         Date: 25,
  //       },
  //       {
  //         srNo: 3,
  //         Description: "sdasda",
  //         D2: "sdasda",
  //         D3: "sdasdasd",
  //         Code: "asdasd",
  //         Rate: "231",
  //         qty: "12",
  //         Amount: "2772",
  //         Unit: "nos",
  //         Month: 8,
  //         Date: 25,
  //       },
  //     ],
  //   },
  //   {
  //     Receiver: "asdsad",
  //     totalAmount: 100,
  //     invoice: [],
  //   },
  //   {
  //     Receiver: "dixn",
  //     totalAmount: 100,
  //     invoice: [],
  //   },
  //   {
  //     Receiver: "sadasd",
  //     totalAmount: 100,
  //     invoice: [
  //       {
  //         srNo: 1,
  //         Description: "asdas",
  //         D2: "dasd",
  //         D3: "adasd",
  //         Code: "sdas",
  //         Rate: "3",
  //         qty: "2",
  //         Amount: "0",
  //         Unit: "nos",
  //         Month: 9,
  //         Date: 16,
  //       },
  //     ],
  //   },
  //   {
  //     Receiver: "sadasd",
  //     totalAmount: 100,
  //     invoice: [],
  //   },
  //   {
  //     Receiver: "sadasd",
  //     totalAmount: 100,
  //     invoice: [],
  //   },
  //   {
  //     Receiver: "sadasd",
  //     totalAmount: 100,
  //     invoice: [],
  //   },
  //   {
  //     Receiver: "sadasd",
  //     totalAmount: 100,
  //     invoice: [],
  //   },
  //   {
  //     Receiver: "sadasd",
  //     totalAmount: 100,
  //     invoice: [],
  //   },
  //   {
  //     Receiver: "sadasd",
  //     totalAmount: 100,
  //     invoice: [],
  //   },
  //   {
  //     Receiver: "sadasd",
  //     totalAmount: 100,
  //     invoice: [],
  //   },
  //   {
  //     Receiver: "sadasd",
  //     totalAmount: 100,
  //     invoice: [],
  //   },
  //   {
  //     Receiver: "sadasd",
  //     totalAmount: 100,
  //     invoice: [
  //       {
  //         srNo: 1,
  //         Description: "BALANCER SAMSUNG GREY T5 8737",
  //         D2: "3DXBL055RINGG01",
  //         D3: "(P.O - 440006155)",
  //         Code: "84509010",
  //         Rate: "4",
  //         qty: "1",
  //         Amount: "4",
  //         Unit: "nos",
  //         Month: 9,
  //         Date: 25,
  //       },
  //       {
  //         srNo: 2,
  //         Description: "CLASP CIRCLE DL T1/T2/T3/T6",
  //         D2: "3DXSBADL0000001",
  //         D3: "(P.O - 440006155)",
  //         Code: "84509010",
  //         Rate: "2",
  //         qty: "1",
  //         Amount: "2",
  //         Unit: "nos",
  //         Month: 9,
  //         Date: 25,
  //       },
  //     ],
  //   },
  //   {
  //     Receiver: "sadasd",
  //     totalAmount: 100,
  //     invoice: [],
  //   },
  //   {
  //     Receiver: "sadasd",
  //     totalAmount: 100,
  //     invoice: [],
  //   },
  //   {
  //     Receiver: "sadasd",
  //     totalAmount: 100,
  //     invoice: [],
  //   },
  //   {
  //     Receiver: "sadasd",
  //     totalAmount: 100,
  //     invoice: [],
  //   },
  //   {
  //     Receiver: "sadasd",
  //     totalAmount: 100,
  //     invoice: [],
  //   },
  //   {
  //     Receiver: "sadasd",
  //     totalAmount: 100,
  //     invoice: [],
  //   },
  //   {
  //     Receiver: "sadasd",
  //     totalAmount: 100,
  //     invoice: [],
  //   },
  //   {
  //     Receiver: "sadasd",
  //     totalAmount: 100,
  //     invoice: [],
  //   },
  //   {
  //     Receiver: "sadasd",
  //     totalAmount: 100,
  //     invoice: [],
  //   },
  //   {
  //     Receiver: "sadasd",
  //     totalAmount: 100,
  //     invoice: [],
  //   },
  //   {
  //     Receiver: "sadasd",
  //     totalAmount: 100,
  //     invoice: [],
  //   },
  //   {
  //     Receiver: "sadasd",
  //     totalAmount: 100,
  //     invoice: [
  //       {
  //         srNo: 1,
  //         Description: "BALANCER SAMSUNG GREY T5 8737",
  //         D2: "tnt",
  //         D3: "(P.O - 440006155)",
  //         Code: "84509010",
  //         Rate: "3",
  //         qty: "2",
  //         Amount: "6",
  //         Unit: "nos",
  //         Month: 9,
  //         Date: 26,
  //       },
  //     ],
  //   },
  //   {
  //     Receiver: "sadasd",
  //     totalAmount: 100,
  //     invoice: [
  //       {
  //         srNo: 1,
  //         Description: "BALANCER SAMSUNG GREY T5 8737",
  //         D2: "tnt",
  //         D3: "(P.O - 440006155)",
  //         Code: "84509010",
  //         Rate: "3",
  //         qty: "2",
  //         Amount: "6",
  //         Unit: "nos",
  //         Month: 9,
  //         Date: 26,
  //       },
  //     ],
  //   },
  // ];
  var x = 1;
  let k;
  const appendd = () => {
    data.shift()
    var h = "<table id='tables'>";
    const count  = data.length-1
      console.log(data)
    for (let i = 0; i < count; i++) {
      h += '<tr class="tr1">';
     k= i;
     ++k;
     
      if (x % 2 !== 0) {
        
          h += '<td class="tdx">' + k + "</td>";
          h += '<td class="td1">' + data[i].Receiver + "</td>";
          h += '<td class="td1">' + data[i].date + "</td>";
          h += '<td class="td1">' + data[i].time + "</td>";
          h += '<td class="td1">' + data[i].totalAmount + "</td>";
          h += '<td class="td1">' + data[i].time + "</td>";
          h += '<td class="td1">' +"<button>click<button/>" + "</td>";
            
        } else {
          h += '<td class="tdx">' + k + "</td>";
        h += '<td class="td1">' + data[i].Receiver + "</td>";
        h += '<td class="td1">' + data[i].date + "</td>";
        h += '<td class="td1">' + data[i].time + "</td>";
        h += '<td class="td1">' + data[i].totalAmount + "</td>";
        h += '<td class="td1">' + data[i].time + "</td>";
        h += '<td class="td1">' +"<button>click<button/>"+ "</td>";
      }
      h += "</tr>";
      x++;
    }
    document.getElementById("tableb").innerHTML = h;
  };

  const getData = async () => {
    console.log('in get data')
    const cookie = jsCookie.get();
    const { loginCookie } = cookie;
    const Cookie = loginCookie;
    const res = await fetch("/getTrans", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ Cookie }),
    }).then((res) => res.json());

    const invoices  = res

    console.log("data", invoices);
    
     for(let k=0;k<=invoices.length;k++){
       data.push(invoices[k])
     }
     console.log('invoice',data)

    await appendd();
  };
  let effectCount = 0;
  useEffect(() => {
    if (effectCount === 0) {
       getData()
       effectCount++
    }
  });
    // const print = () => {
    //   console.log("inn");
    //   var printContents = document.getElementById("printDiv").innerHTML;
    //   var originalContents = document.body.innerHTML;

    //   document.body.innerHTML = printContents;

    //   window.print();

    //   document.location.reload()
    //   document.body.innerHTML = originalContents;
    // };


  return (
    <>
      <div className="   ">
     {/* <div className="w-full h-36 bg-black" >

     </div> */}
          <div className=" " id="printDiv">
        <table id="table" className="w-full ">
            <thead className="bg-ameth2 ">
              <th className=" ths  ">Sr No.</th>
              <th className="th1   ">Receiver</th>
              <th className="th1 ">Date</th>
              <th className="th1 ">Time</th>
              <th className="th1 ">Amount</th>
              <th className="th1 ">Bill No.</th>
              <th className="th1 ">Open</th>
            </thead>
            <tbody id="tableb" className=""></tbody>
        </table>
      </div>

          </div>
    </>
  );
}

export default Transactions;
