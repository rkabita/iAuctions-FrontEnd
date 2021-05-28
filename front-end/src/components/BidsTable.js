import React, { useEffect, useState } from 'react';
import {Table} from "react-bootstrap"
import { useParams } from 'react-router-dom'

import {getDetailedListing} from "../services/ListingService"

function BidsTable(props) {
    const {id}=useParams()
    const [bids,setbids]=useState([]);
    useEffect(()=>{
        async function fetchdata(){
            const {data}=await getDetailedListing(id);
            if(data){
                setbids(data.bids);
            }
        }
        fetchdata();

    },[bids])
    return (
<Table striped bordered hover style={{marginTop:5}}>

  <thead style={{fontSize:16,backgroundColor:"grey"}} >
  <tr><th style={{textAlign:"center"}} colSpan={3}>Bids</th></tr>
    <tr>
      <th>#</th>
      <th>Amount</th>
      <th>UserId</th>
    </tr>
  </thead>
  <tbody>
  {bids.map((bid)=>{
      return <tr key={bid.id}>
          <td>{bid.id}</td>
          <td>{bid.amount}</td>
          <td>{bid.userId}</td>
      </tr>
  })}
  </tbody>
</Table>
    );
}

export default BidsTable;