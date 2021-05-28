import React,{useEffect,useState} from 'react';
import {Row,Col}from "react-bootstrap"
import { useHistory, useParams } from 'react-router-dom'
import {getUser} from "../services/UsersService"
function UserDetail(props) {
    const {id}=useParams()
    const [user,setuser]=useState({});
    useEffect(()=>{
        async function fetchdata(){
            const {data}=await getUser(id);
            if(data){
                setuser(data);
            }
        }
        fetchdata();

    },[user])
    return (
        <Row style={{backgroundColor:"#F2F2F2",padding:10,borderRadius:20}} >
        <Col xs={6}>
        <label style={{marginRight:5,fontWeight:'bold'}}> 
        User :
        </label>
        <text style={{fontSize:16,letterSpacing:2}}>
        {user.email}
        </text>
         </Col>
        <Col xs={2} style={{fontStyle:"italic",fontWeight:500,letterSpacing:2,textAlign:"right"}}>
        <label style={{marginRight:5,fontWeight:'bold'}}> 
        userId :
        </label>
        <text>{user.id}</text>
        </Col>
    </Row>
    );
}

export default UserDetail;