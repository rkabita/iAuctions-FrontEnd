import React, { useEffect, useState } from 'react';
import {getAllCatagories,DeleteCatagory} from "../services/CatagoriesService"

import {Link } from "react-router-dom"
import {Table,Button} from "react-bootstrap"
import { toast } from 'react-toastify';


function CatagoriesTable(props) {
    const [catagories,setcatagories]=useState([]);
    useEffect( ()=>{
        async function fetchdata(){
            const {data,status}=await getAllCatagories();
            if(status!==401){
                setcatagories(data);
            }else{
                setcatagories([])
            }
        }
        fetchdata();
    },[catagories]);

    const handleDelete=  (event)=>{
        const id=event.target.id;
        async function deletecat(id){
            const {data,status} = await DeleteCatagory(id);
            if(status===400){
                toast.error(data.message);
            }
            else{   
                toast.success("removed Sucessfully");
            }
            
        }
        deletecat(id);
    }

    function renderTags(id){
        return <><td><Link to={`catagories/edit/${id}`}  ><Button  id={id} style={{backgroundColor:"green"}}>Edit</Button></Link></td>
        <td><Button onClick={handleDelete} id={id} style={{backgroundColor:"red"}}>Delete</Button></td></>
        
    }
    return (
<Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Name</th>
    </tr>
  </thead>
  <tbody>
  {catagories.map((cat)=>{
      return <tr key={cat.id}>
          <td><Link to={`/catagories/${cat.id}`}>{cat.id}</Link></td>
          <td>{cat.name}</td>
          {renderTags(cat.id)}
      </tr>
  })}
  </tbody>
</Table>
    );
}

export default CatagoriesTable;