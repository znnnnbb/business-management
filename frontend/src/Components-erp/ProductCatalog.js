import React from "react";
import { Modal, ModalHeader } from "reactstrap";
import { useState } from "react";
import jsCookie from "js-cookie";
import { useEffect } from "react";
const productdata = [
    // {
    //     image: "logo.png",
    //     Productname: '',
    //     Price: '',
    //     discription: ''
    // },
];

const customStyles = {
    content: {
        top: '10%',
        left: '90%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        'z-index' : '40'
    },
};

function ProductCatalog() {
  
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [Blur, setBlur] = useState('scale-0')
    const [Count, setCount] = useState(0)

    function openModal() {
        setIsOpen(true);
        setBlur('scale-100')
    }


    function closeModal() {
        setBlur('scale-0')
        setIsOpen(false);
    }

    function  sumbitModal (e) {
        console.log('start')
        e.preventDefault();
        productdata.push({
            Name: productname,
            Price: price,
            Description: discription,
            Quantity:20,
            Image:'logo.png'
        })
        const tempproductdata = [{
            Productname1: productname,
            Price1: price,
            discription: ''
        }];

        setIsOpen(false);
        const num = productdata.length - 1
        const product = productdata[num]
        const cookie =  jsCookie.get();
       const {loginCookie} = cookie;
       const Cookie = loginCookie
      
        const Post =async()=>{
            const res = await fetch("/addProduct", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ product,Cookie }),
              }).then((res) => res.json());
              console.log(res)
              if(res==='sucessfull'){
                window.alert('added sucessfully')
              }else{
                window.alert('probleum occured')
              }
        }
        Post()
        localStorage["Inventory"] = JSON.stringify(productdata);

        console.log('end')

    }
  let effectCount = 0
    useEffect(() => {
    if(effectCount===0){
        load()
        effectCount++;

    }

    },)
    

     
   const load=()=>{
    console.log('in load')
    const getdata  = localStorage.getItem('Inventory')
    if (productdata.length===0){

        const inventory = JSON.parse(getdata)
        console.log(inventory)
        inventory.map((index)=>{
            productdata.push(index)
        })
    }
    let a = productdata.length 
     setCount(a)
   let h;
 h+=`  <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">`
 h+=  `Update`
 h+=`  </button>`
    console.log('productdata',productdata)
    const parentElement = document.getElementById('tbody')
    const trElement = document.createElement('tr')
    const tdElement = document.createElement('td')
    const buttonElemet = document.createElement('button')
     const divElement = document.createElement('div')
    productdata.map((index,i)=>{
      trElement.setAttribute('id',`tr${i}`)
      parentElement.append(trElement.cloneNode(true))  
      const createdtr = document.getElementById(`tr${i}`)
        for(let j=1;j<=7;j++){
            tdElement.setAttribute('id',`${i}td${j}`)
             createdtr.append(tdElement.cloneNode(true))
             const createdTd = document.getElementById(`${i}td${j}`)
             let k=i
             k++
             switch(j)
             {
                case 1:
                    createdTd.innerText = k
                    break;
                    case 2:
                        createdTd.innerText = index.Name
                        break;
                    case 3:
                        createdTd.innerText = index.Description
                        break;
                        case 4:
                            createdTd.innerText = index.Price
                            break;
                            case 5:
                                createdTd.innerText = index.Quantity
                                break;
                                case 6 :
                                    createdTd.innerText = index.Sold;
                                    break;
                                    case 7:
                                       divElement.setAttribute('id',`button${i}`)
                                       createdTd.append(divElement.cloneNode(true))
                                       const createdDiv = document.getElementById(`button${i}`)
                                       createdDiv.innerHTML = h
                                       createdDiv.addEventListener('click',(e)=>{console.log(e)})
                                        break;

             }

            
        }
   
    })

   }


    const [productname, setproductname] = useState("");
    const [price, setprice] = useState("");
    const [discription, setdiscription] = useState("");
    return (
        <>
        

            <div className="w-full bg-stone-100  border-2 bg-fixed   ">
                <div className="flex">
                    <div style={{}} className=" p-5 ">
                        <div className=" text-sm 1px solid gray  ">
                            Total Product 
                        </div>
                        <div className="text-xl font-medium">{Count}</div>
                    </div>
                    <div className="p-5">
                        <div className="absolute top-10 right-12">
                            <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                                onClick={openModal} >
                                Add Products
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            < div >
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                    >
                   
                    <div style={{
                        position: 'absolute', top: "-40rem", border: '1px solid gray', borderRadius: '12px', left: '35rem', background: 'white', height: "12.5cm", padding: '5px', width: "13cm", color: "white", boxShadow: '10px 10px 5px gray'
                    }} className="absowhite-900 -top-96 ">
                        <h2 className=" pb-8 pl-40 text-xl text-black">Add New product</h2>
                        <form className="w-full max-w-lg ">
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full  px-3 mb-6 md:mb-0">
                                    <label className=" pl-52 block uppercase tracking-wide text-gray-700 text-xs font-medium mb-2 " >
                                        Product Name
                                    </label>
                                    <input style={{ border: '1px solid gray' }} className="appearance-none block w-full text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="product-name" type="text" placeholder="Product Name" value={productname} onChange={(e) => setproductname(e.target.value)} />

                                </div>
                                <div className="w-full md:w-1/2 px-3">
                                    <label className="pl-24 block uppercase tracking-wide text-gray-700 text-xs font-medium mb-2"  >
                                        Quantity
                                    </label>
                                    <input style={{ border: '1px solid gray' }} className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="qunatity" type="number" placeholder="quantity" />
                                </div>  <div className="w-full md:w-1/2 px-3">
                                    <label className="pl-28 block uppercase tracking-wide text-gray-700 text-xs font-medium mb-2"  >
                                        Price
                                    </label>
                                    <input style={{ border: '1px solid gray' }} className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="price" type="number" value={price} placeholder="Price" onChange={(e) => setprice(e.target.value)} />
                                </div>
                            </div>
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full px-3">
                                    <label className="pl-52 block uppercase tracking-wide text-gray-700 text-xs font-medium mb-2" >
                                        Discription
                                    </label>
                                    <input style={{ border: '1px solid gray' }} className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="discription" type="text" placeholder="Discription" value={discription} onChange={(e) => setdiscription(e.target.value)} />
                                </div>
                            </div>
                            <div className="flex -mt-2 ">
                                <button style={{  }} className="mb-4 mt-2 ml-20 pl-6 pr-6 bg-transparent hover:bg-blue-500 hover:border-transparent  hover:text-white text-blue-500 font-medium py-2 px-4 border-blue-500  border rounded" onClick={sumbitModal}>Add Image</button>
                                <button style={{  }} className="ml-12 mb-4 mt-2  pl-6 pr-6 bg-transperant hover:bg-blue-500 hover:border-transparent hover:text-white text-blue-500   font-medium py-2 px-4 border-blue-500 border rounded" onClick={sumbitModal}>Sumbit</button>
                            </div>
                        </form>
                    </div>
                </Modal>
            </div >

          <div className="w-full">

                <table className="w-full ">
                    <thead className="border-b bg-gray-800 text-white font-medium  w-full ">
                    <tr>
              <th scope="col" class="text-sm font-medium text-white px-6 py-4">
                SrNo
              </th>
              <th scope="col" class="text-sm font-medium text-white px-6 py-4">
                Name
              </th>
              <th scope="col" class="text-sm font-medium text-white px-6 py-4">
                Description
              </th>
              <th scope="col" class="text-sm font-medium text-white px-6 py-4">
                Price(per Unit)
              </th> <th scope="col" class="text-sm font-medium text-white px-6 py-4">
               Inventory
                </th> <th scope="col" class="text-sm font-medium text-white px-6 py-4">
                Sold
              </th><th scope="col" class="text-sm font-medium text-white px-6 py-4">
                Update
              </th>
            </tr>
                    </thead >

                   <tbody id="tbody" className="w-full   text-center"></tbody>
                </table >
          
            
          </div>
        </>


    );
}

export default ProductCatalog;




