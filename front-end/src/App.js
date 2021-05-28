import {Route,Switch} from "react-router-dom";
import {useHistory} from "react-router-dom"


import Nav from "./components/Nav"
import LoginForm from "./components/LoginForm"
import RegisterForm from "./components/RegisterForm"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from "react";
import Listings from "./components/Listings";
import Catagories from "./components/Catagories";
import ViewListingDetail from "./components/ViewListingDetail";
import DeleteListing from "./components/DeleteListing";
import EditListing from "./components/EditListing";
import EditCatagory from "./components/EditCatagory"
import ViewCatagoryDetail from "./components/ViewCatagoryDetail";
import Users from "./components/Users";
import EditUser from "./components/EditUser";


function App() {
  let history=useHistory()
  const [user,setuser]=useState('');
  const handleRegister=({token,id,user,error})=>{
    if(token && user){
      setuser(user.email);
      toast.success("User Registered Sucessfully")
      user.token=token;
      user.id=id
      localStorage.setItem("user",JSON.stringify (user));
      history.push("/listings")
      
    }else{
      toast.error(error)
    }


  }
  const handleLogin=({token,id,user,error})=>{
    if(token && user){
      console.log(id)
      setuser(user.email);
      toast.success("User loggedin Sucessfully")
      user.token=token;
      user.id=id;
      console.log(token)
      localStorage.setItem("user",JSON.stringify (user));
      history.push("/listings")
      
    }else{
      toast.error(error)
    }


  }
  useEffect(()=>{
    if(localStorage.getItem('user')){
      setuser(JSON.parse(localStorage.getItem('user')).email);
      
    }else{
      setuser('');
    }
  },[user])
  return (
    <>
    <Nav onLogout={()=>setuser(null)} user={user}/>
    <main>
      <Switch>
      <Route exact path="/users/edit/:id" component={EditUser}></Route>
      <Route exact path="/users" component={Users}></Route>
      <Route exact path="/catagories/edit/:id" component={EditCatagory}></Route>
      <Route exact path="/catagories/:id" component={ViewCatagoryDetail}></Route>
      <Route exact path="/catagories" component={Catagories}></Route>
      <Route exact path="/listings/edit/:id" component={EditListing}></Route>
      <Route exact path="/listings/delete/:id" component={DeleteListing}></Route>
      <Route exact path="/listings/:id" component={ViewListingDetail}></Route>
      <Route exact path="/listings" component={Listings}></Route>
      <Route exact  path="/register"  component={()=><RegisterForm OnRegistered={handleRegister}/>}></Route>
      <Route exact path="/login" component={()=><LoginForm OnLoggedIn={handleLogin}/>}></Route>
      </Switch>
    </main>
    <ToastContainer/>
    </>
  );
}

export default App;
