import React, { useContext } from 'react'
import { Job } from '../Components/Job'
import { AppContext } from '../contextAPI/ContextAPI'


export const Cart = () => {

  const {items} = useContext(AppContext)

  return (
    <div>
      
      <div>
        {
            items.map((item,index)=> {
              return <Job key={index} item={item} />
            })
        }
        
      </div>
      

    </div>
  )
}
