import React,{useState} from 'react';
import {Form,Col,Button,Container} from "react-bootstrap"
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
    
    return (
<Container  style={{marginTop:20}}>
        <Form onSubmit={handleSubmit} style={{alignSelf:"center",border:"2px solid #ccc",padding:10}}>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridTitle">
            <Form.Label>Email</Form.Label>
            <Form.Control onChange={handleEmail} type="email" placeholder="Enter email" />
          </Form.Group>
          </Form.Row>
          <Form.Row>
          <Form.Group as={Col} controlId="formGridTitle">
            <Form.Label>name</Form.Label>
            <Form.Control onChange={handlePassword} type="passsword" placeholder="Enter password" />
          </Form.Group>
          </Form.Row>
        <Button variant="primary" type="submit">
          Update user
        </Button>
      </Form>
</Container>
    );
}

export default EditUser;