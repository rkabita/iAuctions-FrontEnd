import React,{useState,useEffect} from 'react';
import {Form,Col,Button,Container} from "react-bootstrap"
import {getAllCatagories} from "../services/CatagoriesService"
import {UpdateListing} from "../services/ListingService"
import { toast } from 'react-toastify';
import { useParams,useHistory } from 'react-router-dom'

function EditListing(props) {
    let history=useHistory()
    const {id}=useParams()
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
      const {data,status}=await UpdateListing(id,cat);
      if(status===400 || status===404){
        toast.error(data.message);     
  
      }else{ 
        toast.success("listing updated sucessfully");    
        history.push("/listings")
  
      } 
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
    
    return (
<Container  style={{marginTop:20}}>
        <Form onSubmit={handleSubmit} style={{alignSelf:"center",border:"2px solid #ccc",padding:10}}>
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
      
      
          <Form.Group as={Col} controlId="formGridCatagory">
            <Form.Label>Catagory (optional)</Form.Label>
            <Form.Control as="select" onChange={handlechange} defaultValue="Choose...">
              <option>none</option>
              {catagories.map((cat)=>{
                return  <option  key={cat.id} id={cat.id} value={cat.id}>{cat.name}</option>
              })
   
              }
            </Form.Control>
          </Form.Group>
      
        <Button variant="primary" type="submit">
          Update Listing
        </Button>
      </Form>
</Container>
    );
}

export default EditListing;