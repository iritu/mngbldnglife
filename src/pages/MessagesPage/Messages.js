import { Redirect } from 'react-router';
import { useState, useContext } from "react";
import SingleMessage from '../../components/SingleMessage';
import { Button, Col, Container, Row } from 'react-bootstrap';

//context
import ActiveUserContext from '../../shared/activeUserContext';




function Messages({messages}){
    
    const activeUser = useContext(ActiveUserContext);

    if (!activeUser) {
        return <Redirect to="/"/>
    }


    return(
       <Container>
            <h1>Messages </h1>
            <br/>
            <Row>
                {messages.map(message => 
                    <Col key={message.messageId}  >
                        <SingleMessage message={message}/>
                    </Col>
                )}
            </Row>
       </Container>
    )
}

export default Messages;