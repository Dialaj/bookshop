import React, { Component } from 'react'
import { Jumbotron } from 'react-bootstrap';
import axios from 'axios'
import Books from './Books'

export default class Home extends Component {
state = {
    qoute : ''
}
componentDidMount()
{
axios.get('https://api.icndb.com/jokes/random?firstName=John&amp;lastName=Doe')//API
.then(res => {
    console.log(res)
    this.setState({
        qoute : res.data.value.joke
    })
})
}
    render() {
        return (
            <div>     

<Books/>
   <Jumbotron style={{"backgroundColor": 'rgba(0,0,0,0)','width':'35%','margin':'0 auto'}} >
 <h1 style={{'text-align':'center', 'color':'black'}} >{this.state.qoute}</h1> 

   </Jumbotron>
     </div>
        )
    }
}
