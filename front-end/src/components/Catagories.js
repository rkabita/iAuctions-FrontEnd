import React ,{useState}from 'react';

import {Container,Form,Col,Button} from "react-bootstrap"

import { toast } from 'react-toastify';
import CatagoriesTable from "./CatagoriesTable";
import {AddNewCatagory} from "../services/CatagoriesService"

function Catagories(props) {
  const [name,setname]=useState('')

  const handleName=(event)=>{
    setname(event.target.value);
  }

  const handleSubmit=async (event)=>{
    event.preventDefault();
    const {data,status}=await AddNewCatagory({name:name});
    if(status===400){
      toast.error(data.message);     

    }else{ 
      toast.success("new catagory  added sucessfully");    

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
     <Form onSubmit={handleSubmit} style={{flexShrink:2,alignSelf:"center",border:"2px solid #ccc",padding:10}}>
     <Form.Row>
       <Form.Group as={Col} controlId="formGridTitle">
         <Form.Label>Name</Form.Label>
         <Form.Control onChange={handleName} type="text" placeholder="Enter title" />
       </Form.Group>
       </Form.Row>
   
     <Button variant="primary" type="submit">
       New Catagory
     </Button>
   </Form>
   <CatagoriesTable/>
   </>
   }else
   {
     return <h3 style={{width:"100%"}}>Please Login to create and view Catagories </h3>
   }
 }
return (
<Container  style={{marginTop:20,display:"flex",textAlign:"center"}}>
{renderTags()}
</Container>
    );
}

export default Catagories;