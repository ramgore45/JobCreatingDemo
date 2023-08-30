import React, { useContext, useEffect, useState } from 'react'
import { Formone } from '../Components/Formone'
import { Formtwo } from '../Components/Formtwo'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import { AppContext } from '../contextAPI/ContextAPI'

export const Updatepage = () => {

  const {id} =useParams()
  const [step,setStep] = useState(true)  
  const {url,setEdit, setFormdata,formData,navigate} = useContext(AppContext)
  
  useEffect(()=>{
    axios.get(`${url}/${id}`)
    .then(res => {
      console.log(res.data)
      setEdit(true)
      setFormdata({
        jobTitle:res.data.jobTitle , companyName:res.data.companyName , industry:res.data.industry , location:res.data.location , remoteType:res.data.remoteType,
    
        expMin:res.data.expMin , expMax:res.data.expMax , salaryMin:res.data.salaryMin, salaryMax:res.data.salaryMax , totalEmp:res.data.totalEmp , mode:res.data.mode
      })
    })
    .catch(error => console.log(error))
  },[])

  function updateHandler (e ){
    e.preventDefault()
    axios.put((url+'/'+id), formData)
    .then(res => {
      setEdit(false)
      console.log(res.data)
      toast.success('Job Updated Successfully')
      navigate('/')
    })
    .catch(error=> console.log(error))
}
 
  return (
    <form className="w-full min-h-[100vh] flex justify-center font-semibold  ">
      {step ? 
      
      (<div className="w-[500px] h-[500px] flex flex-col rounded-lg border-2 gap-y-8 p-5 relative" >
          <Formone />
          
            <button className="bg-blue-500 w-fit p-[10px] rounded-lg text-white 
            hover:scale-110 transition duration-300 ease shadow-md " 
            onClick={()=>setStep(false)}>
                  Next 
            </button>
         
            
       </div>
       ):
       (
        <div className="w-[500px] h-[500px] flex flex-col rounded-lg border-2 gap-y-8 p-5 relative" >
          <Formtwo />
        <div className='flex gap-x-5 absolute bottom-0 right-0  p-5 '>
          <button className="bg-blue-500 w-fit p-[10px] rounded-lg text-white 
          hover:scale-110 transition duration-300 ease shadow-md" 
          onClick={()=> setStep(true)}>
                  prev 
          </button>

          
          <button className="bg-blue-500 w-fit p-[10px] rounded-lg text-white 
              hover:scale-110 transition duration-300 ease shadow-md"
              onClick={updateHandler}>
                      Update 
          </button>

          
          
        </div>
       </div>
      )

       }
    </form>
     
    
  )
}
