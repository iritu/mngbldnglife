import { useState , useContext } from "react";
import { Button, Row, Col, Form, Container} from "react-bootstrap"; 

import VoteTicketModel from '../Model/VoteTicketModel'; 

import DateTimePicker from 'react-datetime-picker';

//context
import ActiveUserContext from '../shared/activeUserContext';


function SingleVoteTicket({openVoteTicket}){
    
    const activeUser = useContext(ActiveUserContext);
    const [endDateValue, endDateOnChange] = useState(new Date());
     
    
    //endDateOnChange send caller

    

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


    function presentDate(dateToPresent){
        var date = ""; 

        if (dateToPresent){
             date = new Date(dateToPresent).toLocaleString();
        }
        return date;
    }


    console.log(openVoteTicket);

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
                <strong>End date:</strong> {presentDate(openVoteTicket.endDate)}

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

                        
            </Col>
            <Col>
                charts
            </Col>
        </Row>
        </Container>
    )
}

export default SingleVoteTicket; 