import React, { useEffect, useState } from 'react';
import {getDetailedListing} from "../services/ListingService"

function ListingDetail(props) {
    const {id}=useParams()
    const [listing,setlisting]=useState({});
    useEffect(()=>{
        async function fetchdata(){
            const {data}=await getDetailedListing(id);
            if(data){
                setlisting(data);
            }
        }
        fetchdata();

    },[listing])

     
}

export default ListingDetail;