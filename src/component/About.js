import React, { Component } from 'react'
import './c.css'
import {Jumbotron} from 'react-bootstrap'; 
import Books from './Books'


export default class About extends Component {
    render() {
        return (
            <>
             <Books/>

             <div>
<br/><br/>
             <Jumbotron style={{"backgroundColor": 'rgba(100,50,50,100)','width':'35%','margin':'0 auto','opacity':"0.9"}} >
 <h1 style={{'text-align':'center', 'color':'black'}} ></h1> 

             
               <h1> Welcome to Diala's Bookshop</h1><br/>
                All About The bookshop<br/>
                Established in 2019, Diala's Bookshop specializes in supplying university libraries,
                 scholars, and book dealers with current and out-of-print Arabic and foreign language
                  books and periodicals published in the Arab world. Since its founding by Ms.Diala  the company has maintained its commitment to complete customer satisfaction by providing excellent services.
                 years, Sulaiman's Bookshop has been preparing bi-monthly lists of current books in Romanized
                 form and Arabic script. The lists coverall over the world 
                 Customers can make their selections from our lists, or can place individual separate orders. Moreover, 
                 lists of out-of-print titles are available upon request.
                Diala's Bookshop also handles Blanket Order Programs to suit the needs of university libraries. 
                Furthermore, we also provide current and back volume periodicals. Please contact us for a list of
                available periodical subscriptions.
           
   </Jumbotron>
   </div>
            </>
        )
    }
}
