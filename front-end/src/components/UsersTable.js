import React, { useEffect, useState } from 'react';
import {getAllUsers,DeleteUser} from "../services/UsersService"

import {Link } from "react-router-dom"
import {Table,Button} from "react-bootstrap"
import { toast } from 'react-toastify';

import {useHistory} from "react-router-dom"

function UsersTable(props) {
    let history=useHistory();
    const [users,setusers]=useState([]);
    useEffect( ()=>{
        async function fetchdata(){
            const {data,status}=await getAllUsers();
            if(status!==401){
                setusers(data);
            }else{
                setusers([])
            }
        }
        fetchdata();
    },[users]);
   const handleEdit=(event)=>{
       console.log(event.target.id);
       console.log(JSON.parse(localStorage.getItem('user')).id)
       if(Number(event.target.id)!==JSON.parse(localStorage.getItem('user')).id){
        toast.error("not allowed")
       }else{
           history.push("/users/edit/"+Number(event.target.id))
       }
   }
    const handleDelete=  (event)=>{
        const id=event.target.id;
        async function deleteuser(id){
            const {data,status} = await DeleteUser(id);
            console.log(data);
            if(status===400 || status===403 || status===401 ){
                toast.error(data.message);
            }
            else{   
                toast.success("removed Sucessfully");
            }
            
        }
        deleteuser(id);
    }

    function renderTags(id){
        return <><td><Button onClick={handleEdit}  id={id} style={{backgroundColor:"green"}}>Edit</Button></td>
        <td><Button onClick={handleDelete} id={id} style={{backgroundColor:"red"}}>Delete</Button></td></>
        
    }
    return (
<Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>email</th>
    </tr>
  </thead>
  <tbody>
  {users.map((u)=>{
      return <tr key={u.id}>
          <td>{u.id}</td>
          <td>{u.email}</td>
          {renderTags(u.id)}
      </tr>
  })}
  </tbody>
</Table>
    );
}

export default UsersTable;