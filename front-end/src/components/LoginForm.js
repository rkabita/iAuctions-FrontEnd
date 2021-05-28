import React,{useState} from 'react';
import {Form,Button,Container} from "react-bootstrap"

import LoginUser from "../services/LoginService"

function LoginForm({OnLoggedIn}) {
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
        const result=await LoginUser(user);
        if( result.status===409) {
            if(result.data){
                OnLoggedIn({error:result.data.message})
            }
        }else if(result.status===404) {
          OnLoggedIn({error:result.statusText})

        }else{
          console.log(result.data)
          OnLoggedIn({token:result.data.token,user,id:result.data.user.id});

        }

    }
    return (
<Container style={{marginTop:20}}>

<h3 style={{textAlign:"center",width:"100%"}}>Enter details to login</h3>
<Form onSubmit={handleSubmit}>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control onChange={handleEmail} type="email" placeholder="Enter email" />
  </Form.Group>
  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control onChange={handlePassword} type="password" placeholder="Password" />
  </Form.Group>
  <Button  variant="primary" type="submit">
    Login
  </Button>
</Form>
</Container>
    );
}

export default LoginForm;