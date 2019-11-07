import React, { Component } from 'react'
import { Form,Button ,Jumbotron} from 'react-bootstrap';
import './c.css'

export default class Contact extends Component {
    render() {
        return (
            <div>
    <>
    <div><br/><br/><br/><br/>
          <Jumbotron style={{"backgroundColor": 'rgba(100,50,50,100)','width':'35%','margin':'0 auto','opacity':"0.9"}} >
 <h1 style={{'text-align':'center', 'color':'black'}} ></h1>              
                <Form  >
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll contact you as soon as possible 
    </Form.Text>
  </Form.Group>
    <Form.Group controlId="formGridCity">
      <Form.Label>Your Message</Form.Label>
      <Form.Control />
    </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>

      </Jumbotron>
             </div>
              </>  
              </div>
        )
    }
}






