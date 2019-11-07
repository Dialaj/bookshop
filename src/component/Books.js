import React, { Component } from 'react'
import { FormControl, Form, Button, Col, Row} from 'react-bootstrap';
import axios from "axios";
import BookCard from './BookCard'
import './c.css'

export default class Books extends Component {

    state={
        data : null
    }

    searchpl=(e) => {
const search =e.target.elements.searchPlace.value
e.preventDefault()//For errors
axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}:keyes&key=AIzaSyD3ddBCs8m2PMeDHw795fxDsE8KAXqQTuo`)
        .then(response => {
          this.setState({data : response.data.items})
          console.log(this.state.data.items)
        })
        .catch(error => {
          console.log("Axios Error")
        })}

    render() {
        return (
        
            <div >
      <div className="pp">
      <Form onSubmit={this.searchpl}>
          <Row>
              
            <Col md={11}>
                <FormControl type="text" name="searchPlace" placeholder="Search"/>   
            </Col>
            <Col  md={1}>
                <Button type="submit"  block  >Search</Button> 
            </Col>
            </Row>
       </Form>
      </div>

       <div className="searchP">

       {
           
           this.state.data !== null && this.state.data.map(ele=>(
                <BookCard bookTitle={ele.volumeInfo.title}
                imgLink={ele.volumeInfo.imageLinks !== undefined ? ele.volumeInfo.imageLinks.thumbnail : console.log('')} 
                snip={ele.searchInfo.textSnippet !== undefined ? ele.searchInfo.textSnippet : ''}
                plink={ele.volumeInfo.previewLink} />
   
               
           ))
          
           
       } 

      

    
       
 
       
       </div> 
       </div> 

        
        )}}
