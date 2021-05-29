import React, { useEffect, useState } from 'react';
import {getAllListings,DeleteListing} from "../services/ListingService"

import {NavLink,Link } from "react-router-dom"


import {Table,Button} from "react-bootstrap"
import { toast } from 'react-toastify';

function ListingTable(props) {
    const [listings,setlistings]=useState([]);
    useEffect( ()=>{
        async function fetchdata(){
            const {data,status}=await getAllListings();
            if(status!==401){
                setlistings(data);
            }else{
                setlistings([])
            }
        }
        fetchdata();

        

    },[listings]);
    const handleDelete=  (event)=>{
        const id=event.target.id;
        const original=listings;
        let lid;
        const filtered=listings.filter((list)=>{
            lid=list.id;
            return list.userId!==Number(id)
        })
        async function deleteListing(lid){
            const {data,status} = await DeleteListing(lid);
            if(status===400){
                toast.error(data.message);
            }
            else{
                
                toast.success("removed Sucessfully");
            }
            
        }
        deleteListing(lid);
    }
    const handleEdit=()=>{

    }
    function renderTags(id,lid){
        if(id===JSON.parse(localStorage.getItem('user')).id){
            return <><td><Link to={`listings/edit/${lid}`}  ><Button onClick={handleEdit} id={id} style={{backgroundColor:"green"}}>Edit</Button></Link></td>
            <td><Button onClick={handleDelete} id={id} style={{backgroundColor:"red"}}>Delete</Button></td></>
        }else{
            return <><td></td>
            <td></td></>            
        }
    }
    return (
<Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Title</th>
      <th>Price</th>
      <th>Description</th>
      <th>CatagoryId</th>
      <th>UserId</th>

    </tr>
  </thead>
  <tbody>
  {listings.map((listing)=>{
      return <tr key={listing.id}>
          <td><Link to={`/listings/${listing.id}`}>{listing.id}</Link></td>
          <td>{listing.title}</td>
          <td>{listing.price}</td>
          <td>{listing.description}</td>
          <td>{listing.catagoryId}</td>
          <td>{listing.userId}</td>
          
          {renderTags(listing.userId,listing.id)}
      </tr>
      
  })}
  </tbody>
</Table>
    );
}

export default ListingTable;