import React, { useState } from 'react';
import {Container ,Form,FormControl,Button} from "react-bootstrap"
import BidsTable from './BidsTable';
import { useHistory, useParams } from 'react-router-dom'
import {AddBidToListing} from "../services/ListingService"
import { toast } from 'react-toastify';

function Bids(props) {
    const {id}=useParams();
    const [amount,setamount]=useState(0);
    const handleAmount=(event)=>{
        setamount(event.target.value);
    }
    const handleSubmit=async (event)=>{
        event.preventDefault();
        const {data,status}=await AddBidToListing(id,{amount:Number(amount)});
        if(status===400){
            toast.error(data.message);     

          }else{ 
            toast.success("new bid added sucessfully");    
            setamount(' ')  
          }    }
    return (
        <Container fluid>
           <BidsTable />
           <Form inline onSubmit={handleSubmit}>
                <FormControl onChange={handleAmount} style={{width:"100%"}} type="number" placeholder="Place a bid add amount" className=" mr-sm-1" />
                <Button style={{width:"100%"}} type="submit">Add Bid</Button>
            </Form>
        </Container>

    );
}

export default Bids;