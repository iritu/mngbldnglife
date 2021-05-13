import { useState , useContext } from "react";
import { Button, Row, Col, Form, Container} from "react-bootstrap"; 

import VoteTicketModel from '../Model/VoteTicketModel'; 


//context
import ActiveUserContext from '../shared/activeUserContext';


function SingleVoteTicket({openVoteTicket}){
    
    const activeUser = useContext(ActiveUserContext);

    function updateEndDate(endDate){
        var newDate = prompt("Enter new date, the current end date is : " + endDate);
        var returnedDate ="";

        if (newDate == null || newDate === "") {
                //canceled
        } else {
             returnedDate = newDate;
        }

        alert (returnedDate);

    }


    function presentDate(dateToPresent){
        var date = ""; 

        if (dateToPresent){
             date = new Date(dateToPresent).toLocaleString();
        }
       
        return date;
    }


    console.log(openVoteTicket);

    return (
        <>
        <h3>{openVoteTicket.title}</h3>
        <Row>
            <Col>
                <strong>details:</strong> {openVoteTicket.details}
                <br/>
                <strong>End date:</strong> {presentDate(openVoteTicket.endDate)}

                {activeUser.isAdmin ? 
                        <Button variant="primary" size="sm"
                                onClick={() => updateEndDate(openVoteTicket.endDate)}>
                                    Update end date
                        </Button>
                        : null} 

                        
            </Col>
            <Col>
                charts
            </Col>
        </Row>
        </>
    )
}

export default SingleVoteTicket; 