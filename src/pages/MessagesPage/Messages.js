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

    
    const [filterText, setFilterText] = useState("");
    const [sortBy, setSortBy] = useState("dateCreated");

    

    if (!activeUser) {
        return <Redirect to="/"/>
    }
    else{
        console.log("is admin ? "+activeUser.isAdmin);
    }


    // sort the array of messages by date (default) 
    // let sortedMessages = messages.slice().sort((a, b) => 
    //                 Date.parse(new Date(a.dateCreated.split("/").reverse().join("-"))) - 
    //                 Date.parse(new Date(b.dateCreated.split("/").reverse().join("-"))));



      
    // 1) Filter the messages based on the filterText
  
    let sortedMessages = messages.filter(msg => 
        msg.title.toLowerCase().includes(filterText.toLowerCase()) || 
        msg.details.toLowerCase().includes(filterText.toLowerCase()));

     console.log("messages js - sortedMessages array:")    
     console.log (sortedMessages);

    // 2) Sort the messages  array
    sortedMessages.sort(
            (msg1, msg2) => {
                if (msg1[sortBy] > msg2[sortBy]) {
                    return 1;
                } 
                else if (msg1[sortBy] < msg2[sortBy]) {
                    return -1;
                }    
                else {
                    return 0;
                }
            }
            );



    return(
       <Container>
            <h1>Messages </h1>
            <br/>
            <Row>
                <Col md={8}>
                    <form className="d-flex">
                        <input type="text" placeholder="Filter Messages by text in title and details" value={filterText}
                                onChange={e => setFilterText(e.target.value)}/>
                        <select value={sortBy} 
                                onChange={e => setSortBy(e.target.value)}
                                className="form-control">
                                <option value="dateCreated">Date Created</option>
                                <option value="priority">Priority</option>
                        </select>
                                    
                    </form>
                </Col>
                <Col>
                      {activeUser.isAdmin ? <Button variant="outline-primary"
                                        onClick={() => setNewMsgeModal(true)}>New Message
                                        </Button> : null}
                </Col>
            </Row>

       
            <Row>
                {sortedMessages.map(message => 
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