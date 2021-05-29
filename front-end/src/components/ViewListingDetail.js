import React from 'react';
import {Container} from "react-bootstrap"

import UserDetail from "./UserDetail"
import ListingDetail from "./ListingDetail"
import Comments from './Comments';
import Bids from "./Bids"

function ViewListingDetail(props) {

    return (
        <Container style={{marginTop:20}}>
            <UserDetail />
            <Container style={{display:"flex",flexDirection:"row"}}>
            <div style={{marginTop:5,width:"18rem",display:"flex",flexDirection:"column"}}>
            <ListingDetail/>
            <Comments/>
            </div>
            <div style={{width:"100%"}}>
            <Bids />
            </div>
            </Container>
        </Container>
    );
}

export default ViewListingDetail;