import { Redirect } from 'react-router';
import { useState, useContext } from "react";
import SingleMessage from '../../components/SingleMessage';
import { Button, Col, Container, Row } from 'react-bootstrap';

//context
import ActiveUserContext from '../../shared/activeUserContext';
import NewMsgModal from '../../components/NewMsgModal';


function Messages({messages, onNewMessage}){
    
    const activeUser = useContext(ActiveUserContext);
    const [newMsgeModal, setNewMsgeModal] = useState(false);

    if (!activeUser) {
        return <Redirect to="/"/>
    }
    else{
        console.log("is admin ? "+activeUser.isAdmin);
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
                    <Row className="msgCards" key={message.messageId}  >
                        <Col  xs={8} md={8} className="msgCardsCol">
                            <SingleMessage message={message}   />
                        </Col>
                        <Col  xs={4} md={4} >Comments</Col>
                    </Row>
                )}
            </Row>

            {/* activate message modal      */}
            <NewMsgModal 
                show={newMsgeModal} 
                onClose={() => setNewMsgeModal(false)} 
                onCreate={onNewMessage}
                activeUserBuildingid={activeUser.buildingId}
                activeUserId = {activeUser.userId}
                
                />


       </Container>
    )
}

export default Messages;