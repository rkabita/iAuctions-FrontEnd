import React,{useState,useEffect} from 'react';
import {Table} from "react-bootstrap"
import { useParams } from 'react-router-dom'

import {getDetailedCatagory} from "../services/CatagoriesService"
function ViewCatagoryDetail(props) {
    const {id}=useParams()
    const [listings,setlistings]=useState([]);
    useEffect(()=>{
        async function fetchdata(){
            const {data}=await getDetailedCatagory(id);
            console.log(data)
            if(data){
                setlistings(data.listing);
            }
        }
        fetchdata();

    },[listings])
    return (
<Table striped bordered hover style={{marginTop:5}}>

<thead style={{fontSize:16,backgroundColor:"grey"}} >
<tr><th style={{textAlign:"center"}} colSpan={5}>Following listings are associated with this catagory</th></tr>
  <tr>
    <th>#</th>
    <th>Title</th>
    <th>Price</th>
    <th>description</th>
    <th>UserId</th>
  </tr>
</thead>
<tbody>
{listings.map((listing)=>{
    return <tr key={listing.id}>
        <td>{listing.id}</td>
        <td>{listing.title}</td>
        <td>{listing.price}</td>
        <td>{listing.description}</td>
        <td>{listing.userId}</td>
    </tr>
})}
</tbody>
</Table>
    );
}

export default ViewCatagoryDetail;