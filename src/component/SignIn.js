
  //Importing section------------------------------------------------
  import React, { Component } from 'react'
  import { Form,Col,Button,Row,Jumbotron} from 'react-bootstrap';

export default class SignIn extends Component {
    render() {
        return (
            <div>
                <br/>
                <Jumbotron style={{"backgroundColor": 'rgba(100,50,50,100)','width':'35%','margin':'0 auto','opacity':"0.9"}} >
<h3><center>Signin</center></h3><br/>
 <h1 style={{'text-align':'center', 'color':'black'}} ></h1> 
                <Form>
  <Form.Group as={Row} controlId="formHorizontalEmail">
    <Form.Label column sm={2}>
      Email
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="email" placeholder="Email" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formHorizontalPassword">
    <Form.Label column sm={2}>
      Password
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="password" placeholder="Password" />
    </Col>
  </Form.Group>
 

  <Form.Group as={Row} controlId="formHorizontalCheck">
    <Col sm={{ span: 10, offset: 2 }}>
      <Form.Check label="Remember me" />
    </Col>
  </Form.Group>

  <Form.Group as={Row}>
    <Col sm={{ span: 10, offset: 2 }}>
      <Button type="submit">Sign in</Button>
    </Col>
  </Form.Group>
</Form>

</Jumbotron>
            </div>
        )
    }
}
