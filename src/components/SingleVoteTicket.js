import { useState , useContext, useEffect } from "react";
import { Button, Row, Col, Form, Container} from "react-bootstrap"; 

import VoteTicketModel from '../Model/VoteTicketModel'; 

//https://www.npmjs.com/package/react-datetime-picker
import DateTimePicker from 'react-datetime-picker';

//context
import ActiveUserContext from '../shared/activeUserContext';

import SelectOptionsForVote from '../components/SelectOptionsForVote'; 

function SingleVoteTicket({openVoteTicket, funcUpdateDate}){
    
    const activeUser = useContext(ActiveUserContext);
    const [endDateValue, endDateOnChange] = useState(new Date());
    // const [voteFor, setVoteFor] = useState("Select Options"); 
    
    // function updateEndDate(endDate){
    //     var newDate = prompt("Enter new date, the current end date is : " + endDate);
    //     var returnedDate ="";

    //     if (newDate == null || newDate === "") {
    //             //canceled
    //     } else {
    //          returnedDate = newDate;
    //     }

    //     alert (returnedDate);

    // }

   

    function funcGetVote(voteFor){
        console.log(voteFor); 

    }

    //every time the date changes, call uper level code to update the value
    useEffect(() => {
        funcUpdateDate(endDateValue); 
 
      }, [endDateValue , funcUpdateDate]);
 

   
    return (
        <Container className="singleVoteTicket">
         <Row >
            <Col className="singleVoteTicketHeader">
                <h3>{openVoteTicket.title}</h3>
            </Col>
         </Row> 


        <Row >
           <Col className="singleVoteTicketDetails">
                <strong>details:</strong> {openVoteTicket.details}
                <br/>
                <strong>End date:</strong> {  
                    endDateValue.toLocaleString() >  new Date(openVoteTicket.endDate).toLocaleString() ? 
                    endDateValue.toLocaleString() : 
                    new Date(openVoteTicket.endDate).toLocaleString()  }

                {activeUser.isAdmin ? 
                        // <Button variant="primary" size="sm"
                        //         onClick={() => updateEndDate(openVoteTicket.endDate)}>
                        //             Update end date
                        // </Button>
                      <>
                      <br/>
                      <span>Update end date:</span>
                        <DateTimePicker
                            onChange={endDateOnChange}
                            value={endDateValue}
                            minDate= {new Date(openVoteTicket.endDate)}
                            
                         />
                      </>  
                        : null} 


                      {/* present options to vote - for tenant   */}

                      <SelectOptionsForVote selectOptions={ openVoteTicket.options} 
                                            funcSetVoteFor= {funcGetVote}    
                        />
                      {/* <form >
                            <span>Options for this Vote Ticket: </span>
                            
                               <select value={voteFor} 
                                onChange={e => setVoteFor(e.target.value)}
                                className="form-control">
                                {
                                    openVoteTicket.options ? 
                                         openVoteTicket.options.map((option) => (
                                             <option value={option}>{option}</option>
                                            ))
                                    :null
                                }        
                               </select>
                    </form>   */}
                        
            </Col>
            <Col>
                charts
            </Col>
        </Row>
        </Container>
    )
}

export default SingleVoteTicket; 