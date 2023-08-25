import React, { useContext, useState } from 'react'
import { Formone } from '../Components/Formone'
import { Formtwo } from '../Components/Formtwo'
import { AppContext } from '../contextAPI/ContextAPI'


export const Form = () => {

  const [step,setStep] = useState(true)  
  const {submitHandler} = useContext(AppContext)
  

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
                      onClick={submitHandler} >
                      Save 
          </button>
        
          
        </div>
       </div>
      )

       }
    </form>
     
    
  )
}
