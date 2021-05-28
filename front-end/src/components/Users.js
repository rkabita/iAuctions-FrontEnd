import React ,{useState}from 'react';

import {Container,Form,Col,Button} from "react-bootstrap"

import { toast } from 'react-toastify';
import UsersTable from "./UsersTable";
import {AddNewUser} from "../services/UsersService"

import {useHistory} from "react-router-dom"

function Users(props) {
  let history=useHistory()
  const [email,setemail]=useState('')
  const [password,setpassword]=useState('');

  const handleEmail=(event)=>{
    setemail(event.target.value);
  }
  const handlePassword=(event)=>{
    setpassword(event.target.value);
  }

  const handleSubmit=async (event)=>{
    event.preventDefault();
    const {data,status}=await AddNewUser({email:email,password:password});
    if(status===400){
      toast.error(data.message);     

    }else{ 
      toast.success("new user  added sucessfully");    

    } 
    }

  
  
  let user=null;
  try{
    user=JSON.parse(localStorage.getItem('user')).token
  }catch(exception){

  }
 const renderTags=()=>{
   if(user){
     return <>
     <Form onSubmit={handleSubmit} style={{border:"2px solid #ccc",padding:10}}>
     <Form.Row>
       <Form.Group as={Col} controlId="formGridTitle">
         <Form.Label>Email</Form.Label>
         <Form.Control onChange={handleEmail} type="email" placeholder="Enter Email" />
       </Form.Group>
    </Form.Row>
    <Form.Row>
       <Form.Group as={Col} controlId="formGridTitle">
         <Form.Label>Password</Form.Label>
         <Form.Control onChange={handlePassword} type="password" placeholder="Enter Password" />
       </Form.Group>
    </Form.Row>
   
     <Button variant="primary" type="submit">
       Add user
     </Button>
   </Form>
   <UsersTable/>
   </>
   }else
   {
     return <h3 style={{width:"100%"}}>Please Authenticate to create and view Users </h3>
   }
 }
return (
<Container  style={{marginTop:20,display:"flex",textAlign:"center"}}>
{renderTags()}
</Container>
    );
}

export default Users;