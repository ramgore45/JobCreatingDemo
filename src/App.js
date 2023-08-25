
import "./App.css";
import { Route, Routes } from "react-router";
import { Cart } from "./Page/Cart";
import { Form } from "./Page/Form";
import { NavLink } from "react-router-dom";
import  { useEffect } from 'react'
import { Updatepage } from "./Page/Updatepage";
import { useContext } from "react";
import { AppContext } from "./contextAPI/ContextAPI";


function App() {

   const { fetchData, edit} = useContext(AppContext)

   useEffect(()=>{
    fetchData()
   },[edit])
  


  return (
    <div className="m-[30px]">
      {edit === false &&
        <div>
        <NavLink to='/createjob'> 
          <button 
          className='ml-[30px] text-[17px] font-semibold text-white bg-blue-500 px-3 py-2 tracking-[1px] rounded-md
          hover:scale-110 transition duration-300 ease shadow-md'>
            Create Job
          </button>
        </NavLink>
        
      </div>}


      <Routes>
        <Route path="/" element={<Cart />}/>
        <Route path="/createjob" element={<Form/>} />
        <Route path="/update/:id" element={<Updatepage  />}/>
       
      </Routes>
    </div>
  );
}

export default App;
