import React from "react";
import { Modal, ModalHeader } from "reactstrap";
import { useState } from "react";
const productdata = [
    // {
    //     image: "logo.png",
    //     Productname: '',
    //     Price: '',
    //     // discription: ''
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
    },
};

function Sample() {

    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }


    function closeModal() {
        setIsOpen(false);
    }

    function sumbitModal(e) {
        // let productname = document.getElementById("product-name").value
        // let price = document.getElementById("price").value
        // let discription = document.getElementById("discription").value
        // let image = document.getElementById("discription").value
        //     console.log(productname)
        //     console.log(price)
        //     console.log(discription)
        // // 
        e.preventDefault();
        productdata.push({
            image: "logo.png",
            Productname: productname,
            Price: price,
            // Productname:productname,
        })
        // console.log(productname)
        // console.log(price)
        const tempproductdata = [{
            Productname1: productname,
            Price1: price,
        }];

        setIsOpen(false);

        localStorage["productdata"] = JSON.stringify(productdata);
        // var datas = JSON.parse(localStorage["productdata"]);
    }




    const [productname, setproductname] = useState("");
    const [price, setprice] = useState("");
    const [discription, setdiscription] = useState("");
    return (
        <div className="h-3/4 overflow-auto">

            < div >
                <div>
                    <Modal
                        isOpen={modalIsOpen}
                        onRequestClose={closeModal}
                        style={customStyles}
                        contentLabel="Example Modal"
                    >
                        <div style={{
                            position: 'absolute', borderRadius: '12px',
                            top: '-40rem', left: '35rem', background: '#C2DED1', height: "9cm", padding: '5px', width: "13cm", color: "white"
                        }} className="absolute -top-96 bg-grey-200">
                            <h2 className="pb-8 pl-40 text-xl text-black">Add New product</h2>
                            <form className="w-full max-w-lg ">
                                <div className="flex flex-wrap -mx-3 mb-6">
                                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                        <label className=" pl-12 block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-white" >
                                            Product Name
                                        </label>
                                        <input className="appearance-none block w-full  text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="product-name" type="text" placeholder="Product Name" value={productname} onChange={(e) => setproductname(e.target.value)} />

                                    </div>
                                    <div className="w-full md:w-1/2 px-3">
                                        <label className="pl-12 block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"  >
                                            Price of one Quantity
                                        </label>
                                        <input className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="price" type="number" value={price} placeholder="Price" onChange={(e) => setprice(e.target.value)} />
                                    </div>
                                </div>
                                <div className="flex flex-wrap -mx-3 mb-6">
                                    <div className="w-full px-3">
                                        <label className="pl-52 block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                                            Discription
                                        </label>
                                        <input className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="discription" type="text" placeholder="Discription" value={discription} onChange={(e) => setdiscription(e.target.value)} />
                                    </div>
                                </div>
                                <div className="flex">
                                    <button className="mb-4 mt-2 ml-20 pl-6 pr-6 bg-blue-500 hover:bg-blue-900 text-white font-bold py-2 px-4 border border-blue-700 rounded" onClick={sumbitModal}>Add Image</button>
                                    <button className="ml-12 mb-4 mt-2  pl-6 pr-6 bg-blue-500 hover:bg-blue-900 text-white font-bold py-2 px-4 border border-blue-700 rounded" onClick={sumbitModal}>Sumbit</button>
                                </div>
                            </form>
                        </div>
                    </Modal>
                </div>

                <div className="h-3/4 overflow-auto" >
                    <div className=" w-full items-center justify-center flex flex-wrap ">


                        {
                            productdata.map((product, i) => (

                                <div className="w-1/5 border outline-black  m-4 shadow shadow-black bg-white-900 text-black">
                                    <img className=" p-auto mb-1 h-1/2" src={`${product.image}`} alt="img" />
                                    <br />
                                    <br />
                                    <span className=" px-20 text-l text-grey-300">
                                        {product.Productname}
                                    </span>
                                    <br />
                                    <span className=" px-20 text-xl">{product.Price}</span>
                                    <br />
                                    <br />
                                    <button className="bg-blue-900 w-24 text-white ml-16 hover:bg-sky-700 mb-1" >
                                        Click
                                    </button>
                                </div>



                            ))
                        }




                    </div>

                </div>
                <button style={{ marginLeft: '15cm' }} className=" mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" onClick={openModal}>
                    Add product
                </button>
            </div >
        </div >



    );
}

export default Sample;




