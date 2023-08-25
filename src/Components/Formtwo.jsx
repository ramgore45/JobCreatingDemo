
import { useContext, useEffect, useState } from "react"
import { AppContext } from "../contextAPI/ContextAPI"


export const Formtwo = () => {

    const {formData , changeHandler } = useContext(AppContext)

  return (

        <div className="w-full h-[500px] flex flex-col gap-y-8 rounded-lg">
            <div className="flex justify-between"> 
                <h1>Ceate a Job</h1>
                <span>Step 2</span>
            </div>
            
            <div className="w-full ">Experience  <sup className="text-red-400">*</sup><br/>
                <label className="flex gap-x-7">
                    <input 
                    required
                     className="w-full h-[35px] px-2 border border-gray-200 rounded-md outline-none"
                        type='text'
                        placeholder="in years"
                        name='expMin'
                        value={formData.expMin}
                        onChange={changeHandler}
                    />
                    <input 
                    required
                     className="w-full h-[35px] px-2 border border-gray-200 rounded-md outline-none"
                        type='text'
                        placeholder="in years"
                        name='expMax'
                        value={formData.expMax}
                        onChange={changeHandler}
                    />
                </label>
            </div>

            <div>Salary<sup className="text-red-400">*</sup>
                <label  className="flex gap-x-7">
                    <input 
                    required
                        className="w-full h-[35px] px-2 border border-gray-200 rounded-md outline-none"
                        type='text'
                        placeholder='ex. 50000' 
                        name='salaryMin'
                        value={formData.salaryMin}
                        onChange={changeHandler}
                    />
                    <input 
                    required
                        className="w-full h-[35px] px-2 border border-gray-200 rounded-md outline-none"
                        type='text'
                        placeholder='ex. 100000' 
                        name='salaryMax'
                        value={formData.salaryMax}
                        onChange={changeHandler}
                    />
                </label>
            </div>

            <div>Total Employees <sup className="text-red-400">*</sup>
                <label  className="flex gap-x-7">
                    <input
                     className="w-full h-[35px] px-2 border border-gray-200 rounded-md outline-none"
                        required
                        type='text'
                        placeholder='ex. 100' 
                        name='totalEmp'
                        value={formData.totalEmp}
                        onChange={changeHandler}/>
                </label>
                
            </div>

            <div >Apply Type <br/>
                <label  className="flex gap-x-5 mt-[10px]"> 
                <p  className="flex gap-x-2">
                    <input     
                        required
                         className="  border border-gray-200 rounded-md outline-none"
                            type='radio' 
                            name='mode'
                            value='Quick Apply'
                            checked={formData.mode==='Quick Apply'}
                            onChange={changeHandler}/>
                            Quick Apply
                </p>
                <p className="flex gap-x-2">
                    <input 
                        required
                         className="  border border-gray-200 rounded-md outline-none"
                            type='radio'
                            name='mode'
                            value='External Apply'
                            checked={formData.mode==='External Apply'}
                            onChange={changeHandler}/>
                            External Apply
                </p>
                    
                </label>
            </div>
    
        </div>

    
        
  )
}
