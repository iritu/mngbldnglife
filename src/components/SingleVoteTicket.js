import { useState , useContext, useEffect } from "react";
import { Button, Row, Col, Container} from "react-bootstrap"; 

//https://www.npmjs.com/package/react-datetime-picker
import DateTimePicker from 'react-datetime-picker';

//context
import ActiveUserContext from '../shared/activeUserContext';

import SelectOptionsForVote from '../components/SelectOptionsForVote'; 

import PieChartData from '../components/PieChartData'; 

function SingleVoteTicket({voteTicket, funcUpdateDate, funcUpdateVote, funcCloseTicket}){
    
    const activeUser = useContext(ActiveUserContext);
    const [endDateValue, endDateOnChange] = useState(new Date());
    
    const [votedAlert, setVotedAlert] = useState(false); 



    //send app.js notice to close the ticket by admin's click
    function closeTicket(voteTicket){
        funcCloseTicket(voteTicket); 
    }
   

    //get selected vote from "SelectOptionsForVote" component
    //prevent voting more then once per ticket
    function funcGetVote(voteFor){
  
        let voted = false; 
        if (Array.isArray(voteTicket.votes))
        {
            const found = voteTicket.votes.find(vote => vote.userid === activeUser.userId) ; 
            if (found){
                voted = true; 
                setVotedAlert(true);
            }
        }
        if (voted === false){
             //call upper level code to update the value 
            funcUpdateVote(voteFor, voteTicket);
        }
    }



    //every time the date changes, call uper level code to update the value
    useEffect(() => {
        if (funcUpdateDate){
            funcUpdateDate(endDateValue,voteTicket ); 
        }
 
      }, [endDateValue , funcUpdateDate, voteTicket]);
 

   
    return (
        <Container className="singleVoteTicket">
         <Row >
            <Col md={8} className="singleVoteTicketHeader">
                <h3>{voteTicket.title}</h3>
            </Col>
            
            <Col  className="singleVoteTicketHeader">
                {activeUser.isAdmin && voteTicket.status === "open" ? 
                    <Button variant="danger" size="sm"
                            onClick={() => closeTicket(voteTicket)}>
                            Close Ticket
                    </Button>
                  :
                  null
              }    
            </Col>
              
         </Row> 


        <Row >
           <Col md={7} sm={12}>
                    <strong>details:</strong> {voteTicket.details}
                    <br/>
                    <strong>End date:</strong> {  
                        endDateValue.toLocaleString() >  new Date(voteTicket.endDate).toLocaleString() ? 
                        endDateValue.toLocaleString() : 
                        new Date(voteTicket.endDate).toLocaleString()  }

                    {activeUser.isAdmin && voteTicket.status === "open" ? 
                        <>
                        <br/>
                        <strong>Update end date:</strong>
                            <DateTimePicker
                                onChange={endDateOnChange}
                                value={endDateValue}
                                minDate= {new Date(voteTicket.endDate)}
                                
                            />
                        </>  
                            : null} 

                    
                      {/* present options to vote - for tenant   */}
                      {votedAlert? <><br/><span className="text-danger">You voted for this issue, please prevent for voting twice, your vote will not be counted</span></> : null}

                      { voteTicket.status === "open" &&  Array.isArray(voteTicket.options)?   
                            <SelectOptionsForVote 
                                    selectOptions={ voteTicket.options} 
                                    funcSetVoteFor= {funcGetVote}    
                                    
                             />
                            :
                            null
                    }       
                   
                        
            </Col>
            <Col  md={5} sm={12}>
                {Array.isArray(voteTicket.options) ? 
                <PieChartData entity={voteTicket} /> : null } 
            </Col>
        </Row>
        </Container>
    )
}

export default SingleVoteTicket; 