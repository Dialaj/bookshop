import React, { Component } from 'react'
import { Button ,Card} from 'react-bootstrap';



export default class BookCard extends Component {
  constructor(props){
    super(props);
  }
  movieView(){
    console.log('trying to view ');
    console.log(this.props.id+this.props.title);
    window.location.href= `${this.props.plink}`
  
  }
  
  
    render() {
        return (

<div>
 
<Card >

  <Card.Img variant="top" src={this.props.imgLink} style={{ width: '18rem' }} />
  <Card.Body>
    <Card.Title>{this.props.bookTitle}</Card.Title>
    <Card.Text>
      {this.props.snip}
    </Card.Text>
    <Button  onClick={this.movieView.bind(this)} variant="primary">View</Button>
  </Card.Body>
</Card>
</div>
        )
    }
}
