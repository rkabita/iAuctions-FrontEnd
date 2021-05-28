import React ,{useEffect, useState}from 'react';

import {Container,Form,Col,Button} from "react-bootstrap"
import ListingTable from './ListingTable';

import {getAllCatagories} from "../services/CatagoriesService"
import {AddNewListing} from "../services/ListingService"
import { toast } from 'react-toastify';

function Listings(props) {
  const [title,settitle]=useState('')
  const [price,setprice]=useState('')
  const [description,setdescription]=useState('')
  const [selected,setSlected]=useState('')
  const [catagories,setcatagories]=useState([])
  const handleTitle=(event)=>{
    settitle(event.target.value);
  }
  const handlePrice=(event)=>{
    setprice(Number(event.target.value));
  }
  const handleDescription=(event)=>{
    setdescription(event.target.value);
  }
  const handlechange=(event)=>{
    setSlected(event.target.value);
  }
  const handleSubmit=async (event)=>{
    event.preventDefault();
    let cat={}
    if(isNaN(selected)){
      cat={
        title,
        price,
        description,
      }
    }else{
      cat={
        title,
        price,
        description,
        catagoryId:Number(selected)
      }
    }
    const {data,status}=await AddNewListing(cat);
    if(status===400){
      toast.error(data.message);     

    }else{ 
      toast.success("new listing  added sucessfully");    

    } 
  }
  
  let user=null;
  try{
    user=JSON.parse(localStorage.getItem('user')).token
  }catch(exception){

  }
  useEffect(()=>{
    async function fetchdata(){
      const {data}=await getAllCatagories();
      if(data){
          setcatagories(data);
      }
  }
  fetchdata();
    
  },[])
 const renderTags=()=>{
   if(user){
     return <>
     <Form onSubmit={handleSubmit} style={{flexShrink:2,alignSelf:"center",border:"2px solid #ccc",padding:10}}>
     <Form.Row>
       <Form.Group as={Col} controlId="formGridTitle">
         <Form.Label>Title</Form.Label>
         <Form.Control onChange={handleTitle} type="text" placeholder="Enter title" />
       </Form.Group>
       
     <Form.Group controlId="formGridPrice">
       <Form.Label>Price</Form.Label>
       <Form.Control onChange={handlePrice} type="number" placeholder="Enter price" />
     </Form.Group>
     </Form.Row>
   
     <Form.Group controlId="formGridDescription">
       <Form.Label>Description (optional)</Form.Label>
       <Form.Control onChange={handleDescription} type="text" placeholder="Enter description" />
     </Form.Group>
   
     <Button variant="primary" type="submit">
       Create New Listing
     </Button>
   </Form>
   <ListingTable/>
   </>
   }else{
     return <h3 style={{width:"100%"}}>Please Login to create and view listings </h3>
   }
 }
return (

<Container  style={{marginTop:20,display:"flex",textAlign:"center"}}>
{renderTags()}

</Container>
    );
}

export default Listings;