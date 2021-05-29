import React,{ useEffect, useState } from 'react';
import {Container,Card,ListGroup,Form,FormControl,Button} from "react-bootstrap"
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify';
import {getDetailedListing} from "../services/ListingService"
import {AddCommentToListing} from "../services/commentService"
function Comments(props) {
    const {id}=useParams()
    const[comment,setComment]=useState('');
    const [comments,setcomments]=useState([]);
    const handlecomment=(event)=>{
        setComment(event.target.value);
    }
    const handleSubmit=async (event)=>{
        event.preventDefault();
        const {data,status}=await AddCommentToListing(id,{description:comment});
        if(status===400){
            toast.error(data.message);     

          }else{ 
            toast.success("new comment added sucessfully");    
          }    }
    useEffect(()=>{
        async function fetchdata(){
            const {data}=await getDetailedListing(id);
            if(data){
                setcomments(data.comments);
            }
        }
        fetchdata();

    },[comments])
    return (
        <Container fluid>
        <Card style={{ width: '100%',backgroundColor:"#F2F2F2" }}>
        <Card.Title style={{textAlign:"center"}}>Comments</Card.Title>
        <ListGroup variant="flush">
        {comments.map((comment)=>{
            return <ListGroup.Item >
                <label style={{fontWeight:"bold"}}>user : {comment.userId} </label>
                <p> {comment.description}</p>
            </ListGroup.Item>
        })}   
            <ListGroup.Item >
            <Form inline onSubmit={handleSubmit}>
                <FormControl onChange={handlecomment} style={{width:"100%"}} type="text" placeholder="Comment" className=" mr-sm-1" />
                <Button style={{width:"100%"}} type="submit">Post</Button>
            </Form>
            </ListGroup.Item>
        </ListGroup>
        </Card>      
        </Container>
    );
}

export default Comments;