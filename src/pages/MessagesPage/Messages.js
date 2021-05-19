import { Redirect } from 'react-router';
import { useState, useContext  } from "react";
import SingleMessage from '../../components/SingleMessage';
import { Button, Col, Container, Row } from 'react-bootstrap';

//context
import ActiveUserContext from '../../shared/activeUserContext';
import NewMsgModal from '../../components/NewMsgModal';

function Messages({messages, onNewMessage, onDeleteMsg, onUpdateComment}){
    
    const activeUser = useContext(ActiveUserContext);
    const [newMsgeModal, setNewMsgeModal] = useState(false);
    const [message, setMsgModal] = useState("");
    const [filterText, setFilterText] = useState("");
    const [sortBy, setSortBy] = useState("dateCreated");

   
    if (!activeUser) {
        return <Redirect to="/"/>
    }
    
   
      
    // 1) Filter the messages based on the filterText
    //    make sure that the messages presenter are for the building id of the active user  
    let sortedMessages = messages.filter(msg => 
        msg.buildingId === activeUser.buildingId && (
        msg.title.toLowerCase().includes(filterText.toLowerCase()) || 
        msg.details.toLowerCase().includes(filterText.toLowerCase())));

    //  console.log("messages js - sortedMessages array:")    
    //  console.log (sortedMessages);

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

    
            
    function setUpdate(message){
        setNewMsgeModal(true);
        setMsgModal(message); 
    }        


    /*  send the message id to app.js to delete it as the array is 
        held with state handeling in app.js
        onDeleteMsg - is sent as a prop from app.js and this func pointer receives 
        back the index sent to it
    */
    function onDeleteClick (msgID){
        onDeleteMsg(msgID); 
    }

 
    //pass cller (app.js ) by local func 
    function funcUpdateMessage(comment, message){
   
        onUpdateComment(comment, message); 
        
    }

    return(
       <Container>
            <h1>Messages </h1>
            <br/>
            <Row>
                <Col md={8} sm={12}>
                   <form className="d-flex">
                        <input type="text" className="msgPageInput"
                                placeholder="Filter Messages by text in title and details" 
                                value={filterText}
                                onChange={e => setFilterText(e.target.value)}/>
                        <select value={sortBy} 
                                onChange={e => setSortBy(e.target.value)}
                                className="form-control">
                                <option value="dateCreated">Filter by: Date Created</option>
                                <option value="priority">Filter by: Priority</option>
                        </select>
                                    
                    </form> 
                </Col>
                <Col md={2} sm={12}>
                    {/* new msg btn */}
                      {activeUser.isAdmin ? <Button variant="outline-primary"
                                        onClick={() => setUpdate("")}>New Message
                                        </Button> : null}
                </Col>
            </Row>

       
           
            {sortedMessages.map((message)  => 
                <>
                    <Row className="msgCards" key={message.messageId}  >
                        <Col>
                           
                           {/* Update & delete message buttons */}
                            <Row>
                                    <Col xs={6} md={2}>
                                    {/* update msg btn  */}
                                    {activeUser.isAdmin ? 
                                        <Button className="btnUpdateMsg" variant="primary" size="sm"
                                            onClick={() => setUpdate(message) }>Update Message
                                        </Button> : null
                                        }
                                    </Col>
                            
                                    <Col xs={6} md={2}>
                                        {activeUser.isAdmin ? 
                                            <Button variant="danger" size="sm"
                                                onClick={() => onDeleteClick(message.messageId)}>Delete Message
                                            </Button> : null
                                            
                                        }
                                    </Col>
                            </Row>

                            {/* show single message with its comments */}           
                            <SingleMessage message={message} updateMessage={funcUpdateMessage} />


                        </Col>
                    </Row>
                    
                   
                    </>
                )}
           

            {/* activate message modal      */}
            <NewMsgModal 
                show={newMsgeModal} 
                onClose={() => setNewMsgeModal(false)} 
                onCreate={onNewMessage}
                activeUserBuildingid={activeUser.buildingId}
                activeUserId = {activeUser.userId}
                objMsg = {message}                    
                
                />


       </Container>
    )
}

export default Messages;