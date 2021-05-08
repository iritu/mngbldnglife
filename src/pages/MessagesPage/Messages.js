import { Redirect } from 'react-router';
import { useState, useContext } from "react";
import SingleMessage from '../../components/SingleMessage';
import { Button, Col, Container, Row } from 'react-bootstrap';

//context
import ActiveUserContext from '../../shared/activeUserContext';


function Messages({messages}){
    
    const activeUser = useContext(ActiveUserContext);
    const [newMsgeModal, setNewMsgeModal] = useState(false);

    if (!activeUser) {
        return <Redirect to="/"/>
    }
    else{
        console.log("test"+activeUser.isAdmin);
    }

    return(
       <Container>
            <h1>Messages </h1>
            <br/>
            <div className="btnLineRight">
                {activeUser.isAdmin ? <Button variant="outline-primary"
                                        onClick={() => setNewMsgeModal(true)}>New Message
                                        </Button> : null}
            </div>
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