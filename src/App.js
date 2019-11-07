//Importing section------------------------------------------------
import React, { Component } from 'react'
import { Navbar,Nav} from 'react-bootstrap';
import {BrowserRouter,Switch,Route}from "react-router-dom";
import Home from './component/Home'
import About from './component/About'
import Contact from './component/Contact'
import './App.css'
import SignUp from './component/SignUp';
import SignIn from './component/SignIn'


//Function section------------------------------------------------
export default class App extends Component {
  render() {
    return (
      
      <div>
     
<BrowserRouter>
<Navbar bg="dark" variant="dark">
    <Navbar.Brand href="/home">Home</Navbar.Brand>
    <Nav className="mr-auto">
      <Navbar.Brand href="/About">About us</Navbar.Brand>
      <Navbar.Brand href="/contact">Contact us</Navbar.Brand>
      </Nav>
      <Nav className="mr-autoo">
      <Navbar.Brand href="/signin">SignIn</Navbar.Brand></Nav>
      <Nav className="mr-autoo">
      <Navbar.Brand href="/signup">SignUp</Navbar.Brand>
      <Navbar.Brand href="/"></Navbar.Brand>
    </Nav>
    </Navbar>

  <Switch>
  <Route path="/home"component={Home}/>
  <Route path="/about"component={About}/>
  <Route path="/contact"component={Contact}/>
  <Route path="/signin"component={SignIn}/>
  <Route path="/signup"component={SignUp}/>
  <Route path="/" component={Home}/> 
  </Switch> 
  </BrowserRouter>
 </div>
    )}}
  

