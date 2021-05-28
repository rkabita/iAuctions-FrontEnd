import React, { useEffect } from 'react';
import {Navbar,Form,Button } from "react-bootstrap"
import {Nav as Ele}    from "react-bootstrap"
import {Link} from "react-router-dom"
import "./navbar.css"
const styles={
  navelem:{
   color:"whitesmoke",
   textDecoration:"none",
  
  }
}

function Nav({user,onLogout}) {
  function renderTags(){
    if(user){
      return <Button onClick={()=>{
        try{
          localStorage.clear();
          onLogout()
          
        }catch(exp){

        }
      }} variant="outline-light">Logout</Button>
    }else{
      return <Button variant="outline-light">Login</Button>
    }
  }

    return (
      <>
      <Navbar bg="primary" variant="dark" >
      <Navbar.Brand href="#home">iAuctions</Navbar.Brand>
      <Ele className="mr-auto" style={{display:"flex",flexDirection:"row"}} >

      <Ele.Link className="navelem" style={styles.navelem} >
      <Link style={styles.navelem} to="/listings">
      Listings
      </Link>
      </Ele.Link>
      <Ele.Link className="navelem" style={styles.navelem} >
      <Link style={styles.navelem} to="/catagories">
      Catagories
      </Link>
      </Ele.Link>
      <Ele.Link className="navelem" style={styles.navelem} >
      <Link style={styles.navelem} to="/users">
      Users
      </Link>
      </Ele.Link>
      <Ele.Link className="navelem" style={styles.navelem} >
      <Link to="/register" style={styles.navelem}>
      Register
      </Link>
      </Ele.Link>
      </Ele>  
      <Form inline>
      <Link to="/login">
      {user && <Button variant="outline-light">{user}</Button>}
      {renderTags()}

      </Link>
      </Form>
      </Navbar>
      </>


    );

}


export default Nav;