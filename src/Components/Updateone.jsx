import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../contextAPI/ContextAPI'

export const Updateone = () => {

    const {  formData, changeHandler }= useContext(AppContext)

    return (
    
        <div className="w-full h-[400px]  flex flex-col gap-y-8 rounded-lg">
            <div className="flex justify-between"> 
                <h1>Ceate a Job</h1>
                <span>Step 1</span>
            </div>
            
            <div className="w-full ">
                <label>Job Title <sup className="text-red-400">*</sup><br/>
                    <input 
                    required
                     className="w-full h-[35px] px-2 border border-gray-200 rounded-md outline-none"
                        type='text'
                        placeholder="front-end developer"
                        name='jobTitle'
                        value={formData.jobTitle}
                        onChange={changeHandler}
                    />
                </label>
            </div>

            <div>
                <label>Company Name <sup className="text-red-400">*</sup>
                    <input 
                    required
                        className="w-full h-[35px] px-2 border border-gray-200 rounded-md outline-none"
                        type='text'
                        placeholder='ex. Developer' 
                        name='companyName'
                        value={formData.companyName}
                        onChange={changeHandler}
                    />
                </label>
            </div>

            <div>
                
                
                <label>Industry <sup className="text-red-400">*</sup>
                    <input
                     className="w-full h-[35px] px-2 border border-gray-200 rounded-md outline-none"
                        required
                        type='text'
                        placeholder='ex. Developer' 
                        name='industry'
                        value={formData.industry}
                        onChange={changeHandler}/>
                </label>
                
            </div>

            <div className="flex gap-x-5">
                <label>Location
                    <input     
                        required
                         className="w-full h-[35px] px-2 border border-gray-200 rounded-md outline-none"
                            type='text'
                            placeholder='ex. Mumbai' 
                            name='location'
                            value={formData.location}
                            onChange={changeHandler}/>
                </label>
                <label>Remote Type
                    <input 
                        required
                         className="w-full h-[35px] px-2 border border-gray-200 rounded-md outline-none"
                            type='text'
                            placeholder='in-office /work from home/hybrid ' 
                            name='remoteType'
                            value={formData.remoteType}
                            onChange={changeHandler}/>
                </label>
            </div>
       
        </div>


        
  )

}
