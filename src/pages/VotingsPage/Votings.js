import { Redirect } from 'react-router';
import { useState, useContext  } from "react";

//context
import ActiveUserContext from '../../shared/activeUserContext';
import { Button, Col, Container, Row } from 'react-bootstrap';

import SingleVoteTicket from '../../components/SingleVoteTicket'; 

import NewTicketModal from '../../components/NewVoteTicketModal';



function Votings({voteTickets , onNewTicket, onUpdateDate, onUpdateVote , funcCloseTicket}){

    const activeUser = useContext(ActiveUserContext);
    const [filterText, setFilterText] = useState("");

    //modal
    const [newTicketModal, setNewTicketModal] = useState(false);
  
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
        setNewTicketModal(true);
    }


    //UPDATE end date 
    function updateDate(updateDate , voteTicket){
      //  console.log(updateDate); 

        
        let datePart =""; 
        let timePart = ""; 

        datePart = updateDate.getFullYear() + '-' + (updateDate.getMonth() + 1) + '-' + updateDate.getDate();
        timePart = updateDate.getHours() + ':' + updateDate.getMinutes() + ':' + updateDate.getSeconds();

        let endDate = datePart + " " + timePart; 
   
      //  console.log(endDate);

        voteTicket.endDate = endDate; 

        //call app.js to update
        onUpdateDate(voteTicket); 

    }


    //get vote option for ticket and pass it to app.js 
    function updateVote(voteFor, voteTicket){
        onUpdateVote(voteFor, voteTicket); 
    }


    function closeTicket(voteTicket){
        funcCloseTicket(voteTicket); 
    }

    return(
        <Container>
           
               <Row>
                   <Col sm={6} md={6}>
                
                    <h1>Active Votings</h1>  

                     {/* Add new vote ticket btn */}
                     {activeUser.isAdmin ? 
                            <Button variant="outline-primary" style={{"margin-bottom": "2vh"}}
                                    onClick={() => openNewVote()}>New Voting
                            </Button> : null}

                      {/* Loop over OPEN voteTickets array and each time present -  Single */}

                      {openTickets? openTickets.map((openVoteTicket)  => 
                            <SingleVoteTicket 
                                voteTicket={openVoteTicket} 
                                funcUpdateDate={updateDate} 
                                funcUpdateVote={updateVote}
                                funcCloseTicket={closeTicket}
                                >

                            </SingleVoteTicket>
                         
                         ) : "There are no open votes" }
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

                        {/* Loop over CLOSED  voteTickets array and each time present -  Single */}

                        {closedSortedTickets? closedSortedTickets.map((closedVoteTicket)  => 
                            <SingleVoteTicket voteTicket={closedVoteTicket} ></SingleVoteTicket>
                         
                         ) : "There are no closed votes" }
                         
                   </Col> 

               </Row>

           


            {/* activate new vote ticket  modal  */}   
            <NewTicketModal 
                show={newTicketModal} 
                onClose={() => setNewTicketModal(false)} 
                onCreate={onNewTicket}
                activeUserBuildingid={activeUser.buildingId}
                activeUserId = {activeUser.userId}
            />


        </Container>
         
       
    )
}

export default Votings;