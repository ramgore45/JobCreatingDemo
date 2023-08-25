import axios from 'axios'
import React, {  useState } from 'react'
import { createContext } from 'react'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router'

export const AppContext = createContext()
export const AppContextProvider = ({children}) => {

    const url = "https://64e23131ab0037358818ce9b.mockapi.io/home/jobs//createsjobs"
    const navigate = useNavigate()

    const [edit,setEdit] = useState(false)

    const [items , setItems] = useState([])
    console.log(items)

    const [formData , setFormdata] = useState({
        jobTitle:' ' , companyName:' ' , industry:' ' , location:' ' , remoteType:' ',
  
        expMin:' ' , expMax:' ' , salaryMin:' ', salaryMax:' ' , totalEmp:' ', mode:''
    })

    const changeHandler=(event)=>{
        setFormdata((prev )=> {
          return(
            {...prev,
            [event.target.name] :event.target.value}
          )}
          )             
    }

    const fetchData=()=>{
        axios.get(url)
        .then((res)=> {
            console.log(res.data)
            setItems(res.data)
        })
        .catch((error)=> console.log(error))
    }

    const submitHandler =(e)=>{
        e.preventDefault()
        axios.post(url, formData)
        .then(res => {
            setItems((prev)=> [...prev,res.data])
            toast.success('Job Added Successfully')
            setEdit(false)
            navigate('/')
            setFormdata({})
        })
        .catch(error => console.log(error))
    }

    function deleteHandler(id){
        
        axios.delete(`${url}/${id}`)
        .then(() => {
            axios.get(url)
            .then(res =>{ 
                setItems(res.data)
                console.log('Delete') 
                toast.error('Job Deleted From Storage')
            })
        })
        .catch(error => console.log(error))
        
    }


    const value = {
        url,edit,setEdit,navigate,
        setItems,items,
        setFormdata,formData,
        changeHandler, fetchData,
        submitHandler ,deleteHandler
    }

    return(
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}
