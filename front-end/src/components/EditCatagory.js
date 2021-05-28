import React,{useState} from 'react';
import {Form,Col,Button,Container} from "react-bootstrap"
import {UpdateCatagory} from "../services/CatagoriesService"
import { toast } from 'react-toastify';
import { useParams ,useHistory} from 'react-router-dom'

function EditListing(props) {
  let history=useHistory()
    const {id}=useParams()
    const [name,setname]=useState('')
    const handleName=(event)=>{
      setname(event.target.value);
    }
 
    const handleSubmit=async (event)=>{
      event.preventDefault();
      const {data,status}=await UpdateCatagory(id,{name:name});
      if(status===400 || status===404){
        toast.error(data.message);     
  
      }else{ 
        toast.success("catagory updated sucessfully"); 
        history.push("/catagories")   
  
      } 
    }
    
    return (
<Container  style={{marginTop:20}}>
        <Form onSubmit={handleSubmit} style={{alignSelf:"center",border:"2px solid #ccc",padding:10}}>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridTitle">
            <Form.Label>name</Form.Label>
            <Form.Control onChange={handleName} type="text" placeholder="Enter name" />
          </Form.Group>
          </Form.Row>
        <Button variant="primary" type="submit">
          Update Catagory
        </Button>
      </Form>
</Container>
    );
}

export default EditListing;