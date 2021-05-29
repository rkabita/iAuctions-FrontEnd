import React, { useState } from 'react';

import {Form,Button,Container} from "react-bootstrap"

import Registeruser from "../services/UserService"

function RegisterForm({OnRegistered}) {
    const [email,setemail]=useState('');
    const [password,setpassword]=useState('');
    const handleEmail=(event)=>{
        setemail(event.target.value);
    }
    const handlePassword=(event)=>{
        setpassword(event.target.value);
    }
    const handleSubmit=async (event)=>{
        event.preventDefault();
        const user={
            email,password
        }
        const result=await Registeruser(user);
        if( result.status===400) {
            if(result.data){
                OnRegistered({error:result.data.message})
            
            }
        }else if(result.status===404){
          OnRegistered({error:result.statusText})

        }else{
          OnRegistered({token:result.data.token,user,id:result.data.user.id});

        }

    }
return (
<Container style={{marginTop:20}}>
<h3 style={{textAlign:"center",width:"100%"}}>Enter details to register</h3>
<Form onSubmit={handleSubmit}>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control onChange={handleEmail} type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>
  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control onChange={handlePassword} type="password" placeholder="Password" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Signup
  </Button>
</Form>
</Container>
    );
}

export default RegisterForm;