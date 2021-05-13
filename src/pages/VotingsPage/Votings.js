import { Redirect } from 'react-router';
import { useState, useContext  } from "react";

//context
import ActiveUserContext from '../../shared/activeUserContext';
import { Button, Col, Container, Row } from 'react-bootstrap';

import VoteTicketModel from '../../Model/VoteTicketModel'; 
import SingleVoteTicket from '../../components/SingleVoteTicket'; 


function Votings({voteTickets}){

    const activeUser = useContext(ActiveUserContext);
    const [filterText, setFilterText] = useState("");

  
    if (!activeUser) {
        return <Redirect to="/"/>
    }

    let closedSortedTickets = voteTickets.filter(vote => 
        (vote.buildingId === activeUser.buildingId && vote.status === "close") &&
            (
                vote.title.toLowerCase().includes(filterText.toLowerCase()) || 
                vote.details.toLowerCase().includes(filterText.toLowerCase())
            )
        );


    let openTickets = voteTickets.filter(vote => 
            (vote.buildingId === activeUser.buildingId && vote.status === "open") );


    function openNewVote(){
        //open modal window
    }

    return(
        <Container>
              <Row>
                  <Col className="secondPHomePage">
                    
                      {/* Add new vote ticket btn */}
                      {activeUser.isAdmin ? 
                            <Button variant="outline-primary"
                                    onClick={() => openNewVote("")}>New Voting
                            </Button> : null}
                  </Col>

              </Row>


            
               <Row>
                   <Col>
                
                    <h1>Active Votings</h1>  

                      {/* Loop over OPEN voteTickets array and each time present -  Single */}

                      {openTickets? openTickets.map((openVoteTicket)  => 
                            <SingleVoteTicket openVoteTicket={openVoteTicket} ></SingleVoteTicket>
                         
                         ) : "There are no open votes" }
                   </Col>

              
              
                   <Col>
                        <h1>Votings Results</h1>

                        {/* filer box */}
                        
                        {closedSortedTickets? closedSortedTickets.map((closedVoteTicket)  => 
                        <form className="d-flex">
                            <input type="text" className="msgPageInput"
                                placeholder="Filter by text in title and details" 
                                value={filterText}
                                onChange={e => setFilterText(e.target.value)}/>
                        </form> 
                         
                         ) : "There are no closed votes" }
                         
                   </Col> 

               </Row>

           


            {/* activate new vote ticket  modal  */}   

        </Container>
         
       
    )
}

export default Votings;