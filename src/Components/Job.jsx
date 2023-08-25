
import React, { useContext } from 'react'
import { AiOutlineEdit } from 'react-icons/ai'
import { RiDeleteBin6Line } from 'react-icons/ri'
import {  NavLink } from 'react-router-dom'
import { AppContext } from '../contextAPI/ContextAPI'

export const Job = ({item}) => {
 
  const {deleteHandler} = useContext(AppContext)

  return (
   <div>
  
    <div className='w-[750px] h-fit border-2 mt-[20px] mb-[50px] flex justify-between p-8 rounded-md'>
      <div className='flex'>

        <img
        className='w-[70px] h-[70px] ' 
        src='download.png'></img>
        
        <div className='flex flex-col gap-y-6 pl-2'>
          <div className='flex flex-col gap-y-1'>
            <h1 className='font-bold text-3xl'>{item.jobTitle}</h1>
            <p className=' text-[18px] font-semibold'>Greate Vibes - {item.industry}</p>
            <p className=' text-[18px] font-semibold text-gray-300  '>{item.location} ,India ({item.remoteType})</p>
          </div>

          <div>
            <p className=' text-[18px] font-semibold'>Part-Time (9.00 am - 5.00 pm IST)</p>
            <p className=' text-[18px] font-semibold'>Experience ({item.expMin} - {item.expMax})</p>
            <p className=' text-[18px] font-semibold'>INR (₹)  ({item.salaryMin} - {item.salaryMax}) / Month</p>
            <p className=' text-[18px] font-semibold'>{item.totalEmp} Employees</p>

          </div>

          <div>
            <button 
            className=' text-[17px] font-semibold text-white bg-blue-500 p-3 tracking-[1px] rounded-md
            hover:scale-110 transition duration-300 ease shadow-md
            '>{item.mode}</button>
          </div>

        </div>
      </div>
      <div className='flex gap-x-6 h-fit'>

       <NavLink to={`/update/${item.id}`}>
          <p className='text-[28px] text-gray-500 cursor-pointer'
           ><AiOutlineEdit/></p>
       </NavLink>
         
        
        <p className='text-[28px] text-gray-500 cursor-pointer'
        onClick={()=>  deleteHandler(item.id)}><RiDeleteBin6Line/></p>
      </div>
    
    </div>

  </div>
  )
}
