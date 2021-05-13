import { useState  } from "react";
import { Button, Row, Col, Form, Container} from "react-bootstrap"; 

import VoteTicketModel from '../Model/VoteTicketModel'; 

function SingleVoteTicket({openVoteTicket}){

    return (
        <>
        <h3>{openVoteTicket.title}</h3>
        <Row>
            <Col>
                details: {openVoteTicket.details}
            </Col>
            <Col>
                charts
            </Col>
        </Row>
        </>
    )
}

export default SingleVoteTicket; 