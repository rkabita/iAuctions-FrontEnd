import React,{useState} from 'react';
import {UpdateUser} from "../services/UsersService"
import { toast } from 'react-toastify';
import { useParams,useHistory } from 'react-router-dom'

function EditUser(props) {
    let history =useHistory()
    const {id}=useParams()
    const [email,setemail]=useState('')
    const [password,setpassword]=useState('')
    const handleEmail=(event)=>{
      setemail(event.target.value);
    }
    const handlePassword=(event)=>{
        setpassword(event.target.value);
      }
   
 
    const handleSubmit=async (event)=>{
      const user={
          email,password
      }
      event.preventDefault();
      const {data,status}=await UpdateUser(id,user);
      if(status===400 || status===404){
        toast.error(data.message);     
  
      }else{ 
        toast.success("userupdated sucessfully");   
        history.push("/users")
         
  
      } 
    }
    
    
}

export default EditUser;