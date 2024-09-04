import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'


function SearchUser() {
   const Navigate = useNavigate()
    const [Searchvalue, setSearchvalue] = useState('')
    const [Find, setFind] = useState('asd')
  
   let array =[]
 
  const navigate=()=>{
    // localStorage.setItem("FindProfile", JSON.stringify(FindProfile));
    // Navigate('/UserProfile')
    // navigate()
  }
  const Search=async()=>{
    // const value = document.getElementById('SearchInput').innerText
    const value = Searchvalue
    const res = await fetch("/Search", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ value }),
    }).then((res) => res.json());
    console.log(res)
    res.map((index)=>{
        array.push(index)
    })
    const open=(e)=>{
   let j = e.target.id[0]

   const value = array[--j].Username;
    localStorage.setItem('find',JSON.stringify(value))
    Navigate('/userProfile')

    }

     const appendElement = document.getElementById('tbody')
     const trElement = document.createElement('tr')
     const tdElement = document.createElement('td')
     let i=0
    array.map((index)=>{
        i++
        trElement.setAttribute('id',`${i}`)
       appendElement.append(trElement.cloneNode(true))
       const createdtr = document.getElementById(`${i}`)
       let n=0;
      
       for(let n=0;n<=5;n++)
       {
           tdElement.setAttribute('id',`${i}ts${n}`)
           createdtr.append(tdElement.cloneNode(true))
           const createdTd = document.getElementById(`${i}ts${n}`)
           switch(n){
            case 0:
                createdTd.innerText = i
                break;
            case 1:
                createdTd.innerText = index.name
                break;
                case 2:
                    createdTd.innerText = index.Username;
                       break;
                       case 3:
                        createdTd.innerText = index.Adress
                        break
                        case 4:
                        createdTd.innerText = index.GSTIN;
                        break;
                        case 5:
                         createdTd.innerText = 'view'
                            createdTd.addEventListener('click',(e)=>{open(e)}) 
                            createdTd.setAttribute('style','cursor:pointer;color:blue')
                            break;

           }
            
       }


    })
    
  }
  const handleChange=(e)=>{
    const value =  e.target.value;
    setSearchvalue(value)
    console.log(Searchvalue)
  }
  return (
    <>
      <div className="w-full h-full  " id="body">
        <div className="w-full text-center font-bold text-bold ">
          Search user using Username
        </div>

        <div className=" flex justify-center">
          <div className="">
            <div className="input-group relative flex flex-wrap items-stretch w-full mb-4">
              <input
                id="SearchInput"
                type="search"
                className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="button-addon3"
                value={Searchvalue}
                onChange={(e) => {
                  handleChange(e);
                }}
              ></input>
              <button
                className="btn inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                type="button"
                id="button-addon3"
                onClick={() => {
                  Search();
                }}
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <div>

        <table className="w-full">
          <thead className='bg-gray-900 text-white'>
          <tr>
          <th className='px-6 py-4 text-sm font-medium'>srNo</th>
          <th className='px-6 py-4 text-sm font-medium'>Name</th>
          <th className='px-6 py-4 text-sm font-medium'>Username</th>
          <th className='px-6 py-4 text-sm font-medium'>Adress</th>
          <th className='px-6 py-4 text-sm font-medium'>Gstin</th>
          <th className='px-6 py-4 text-sm font-medium'>Open</th>
          </tr>
          </thead>
          <tbody id='tbody' className='w-full text-center'>
          
          </tbody>
        </table>
        
        </div>
      </div>
    </>
  );
}

export default SearchUser