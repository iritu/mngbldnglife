import { useState , useContext, useEffect } from "react";
import { Button, Row, Col, Form, Container} from "react-bootstrap"; 

import VoteTicketModel from '../Model/VoteTicketModel'; 

//https://www.npmjs.com/package/react-datetime-picker
import DateTimePicker from 'react-datetime-picker';

//context
import ActiveUserContext from '../shared/activeUserContext';

import SelectOptionsForVote from '../components/SelectOptionsForVote'; 

import PieChartData from '../components/PieChartData'; 

function SingleVoteTicket({openVoteTicket, funcUpdateDate}){
    
    const activeUser = useContext(ActiveUserContext);
    const [endDateValue, endDateOnChange] = useState(new Date());

    
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

   

    //get selected vote from "SelectOptionsForVote" component
    function funcGetVote(voteFor){
        console.log(voteFor); 
        //call upper level code to update the value
    }



    //every time the date changes, call uper level code to update the value
    useEffect(() => {
        if (funcUpdateDate){
            funcUpdateDate(endDateValue); 
        }
 
      }, [endDateValue , funcUpdateDate]);
 

   
    return (
        <Container className="singleVoteTicket">
         <Row >
            <Col className="singleVoteTicketHeader">
                <h3>{openVoteTicket.title}</h3>
            </Col>
         </Row> 


        <Row >
           <Col>
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
                        <strong>Update end date:</strong>
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
                   
                        
            </Col>
            <Col>
                <PieChartData/>
            </Col>
        </Row>
        </Container>
    )
}

export default SingleVoteTicket; 