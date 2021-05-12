import { Redirect } from 'react-router';
import { useState, useContext  } from "react";

//context
import ActiveUserContext from '../../shared/activeUserContext';
import { Button, Col, Container, Row } from 'react-bootstrap';

import VoteTicketModel from '../../Model/VoteTicketModel'; 

function Votings({voteTickets}){

    const activeUser = useContext(ActiveUserContext);
    const [filterText, setFilterText] = useState("");

    let sortedTickets = voteTickets.filter(vote => 
        vote.title.toLowerCase().includes(filterText.toLowerCase()) || 
        vote.details.toLowerCase().includes(filterText.toLowerCase()));

    if (!activeUser) {
        return <Redirect to="/"/>
    }

    function openNewVote(){
        //open modal window
    }

    return(
        <Container>
              <Row>
                  <Col className="secondPHomePage">
                    
                      {/* new msg btn */}
                      {activeUser.isAdmin ? 
                            <Button variant="outline-primary"
                                    onClick={() => openNewVote("")}>New Voting
                            </Button> : null}
                  </Col>

              </Row>


              {sortedTickets? sortedTickets.map((VoteTicketModel)  => 
               <Row>
                   
                   <Col>
                
                    <h1>Active Votings</h1>  
                  
                      {/* Loop over voteTickets array and eacg time present -  Single */}

                        <Row>
                            <Col>
                            single vote
                            </Col>
                        </Row>
                       
                   
                     <Button>Update and vote</Button>
                   </Col>

                   <Col>
                        <h1>Votings Results</h1>
                        {/* filer box */}

                        <form className="d-flex">
                            <input type="text" className="msgPageInput"
                                placeholder="Filter by text in title and details" 
                                value={filterText}
                                onChange={e => setFilterText(e.target.value)}/>
                        </form> 
                        New votings
                   </Col> 

               </Row>

              ) : null }


            {/* activate new vote ticket  modal  */}   

        </Container>
         
       
    )
}

export default Votings;