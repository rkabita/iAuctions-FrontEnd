import React, { useEffect, useState } from 'react';
import {Container,Card,ListGroup} from "react-bootstrap"
import { useHistory, useParams } from 'react-router-dom'
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
    return (
        <Container fluid style={{marginBottom:5}}>
        <Card style={{ width: '100%',backgroundColor:"#F2F2F2" }}>
        <Card.Title style={{textAlign:"center"}}>Listing Detail</Card.Title>
        <ListGroup variant="flush" >

            <ListGroup.Item >
                <label style={{fontWeight:"bold"}}>title :</label>
                <text> {listing.title}</text>
            </ListGroup.Item>

            <ListGroup.Item >
                <label style={{fontWeight:"bold"}}>current price :</label>
                <text> {listing.price}</text>
            </ListGroup.Item>

            
            <ListGroup.Item >
                <label style={{fontWeight:"bold"}}>description :</label>
                <text>{listing.description}</text>
            </ListGroup.Item>

            
            <ListGroup.Item >
                <label style={{fontWeight:"bold"}}>catagoryId :</label>
                <text> {listing.catagoryId?listing.catagoryId:"not associated"}</text>
            </ListGroup.Item>
        </ListGroup>
        </Card>      
        </Container>
    );
}

export default ListingDetail;