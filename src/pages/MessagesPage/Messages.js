import { Redirect } from 'react-router';
import { useState, useContext  } from "react";
import SingleMessage from '../../components/SingleMessage';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

//context
import ActiveUserContext from '../../shared/activeUserContext';
import NewMsgModal from '../../components/NewMsgModal';

//coments
import commentsJSON from '../../data/comments.json';
import CommentModel from '../../Model/CommentModel';

//string to html react parser (npm install)
import parse from 'html-react-parser';



function Messages({messages, onNewMessage, onDeleteMsg}){
    
    const activeUser = useContext(ActiveUserContext);
    const [newMsgeModal, setNewMsgeModal] = useState(false);

    
    const [filterText, setFilterText] = useState("");
    const [sortBy, setSortBy] = useState("dateCreated");

    // const [newComment, setNewComment] = useState("");

    const [message, setMsgModal] = useState("");


    //comments
    const[comments, setComments] = useState(commentsJSON.map(comment => new CommentModel(comment)));

     
    if (!activeUser) {
        return <Redirect to="/"/>
    }
    
   
      
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

 
    //get array of comments id's and return string combined from 
    //<ul> text (comments) items 
    //caller uses parse() to extract returned string to html
    function showCommentsForMessage(commentsIdsArray){
      
        let index =0; 
        let returnStr = "<ul>"; 
       
            commentsIdsArray.forEach(commentId => {
            //1. find comment id in comments array 
            index = comments.findIndex(cmnt => cmnt.commentId === commentId);
            //2. get comment data for this index position
            
            returnStr += "<li>" +comments[index].commentText+ "</li>" ; 
         }) ;  
         
        returnStr += "</ul>";
       
       return   returnStr;

    }



    return(
       <Container>
            <h1>Messages </h1>
            <br/>
            <Row>
                <Col md={8}>
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
                <Col md={2}>
                    {/* new msg btn */}
                      {activeUser.isAdmin ? <Button variant="outline-primary"
                                        onClick={() => setUpdate("")}>New Message
                                        </Button> : null}
                </Col>
            </Row>

       
            <Row>
                {sortedMessages.map((message)  => 
                    <Row className="msgCards" key={message.messageId}  >
                        
                        {/* show single message */}
                        <Col  xs={6} md={6} className="msgCardsCol">
                            <SingleMessage message={message}  comments={comments} />
                        </Col>

                        <Col  xs={6} md={6} >
                            <h5>Comments</h5>
                            Message ID: {message.messageId}
                          
                          {/* 
                            get comments id's for this message 
                            send to function showCommentsForMessage else it is a messy code
                          */}
                            
                           {message.ArrayCommentsId?  parse(showCommentsForMessage(message.ArrayCommentsId))   : ""}

                            <br/>
                            <Row>
                                <Col>
                                    {/* <Form>
                                        <Form.Group controlId={`commentMsg${message.messageId}`}>
                                            <Form.Control as="textarea" rows={3}
                                                value={newComment}
                                                onChange={e => setNewComment(e.target.value)}
                                                placeholder= "Add new comment"
                                                />
                                        </Form.Group>
                                    </Form> */}
                                </Col>
                                <Col>
                                    {/* update msg btn  */}
                                     {activeUser.isAdmin ? 
                                            <Button className="btnUpdateMsg" variant="primary" size="sm"
                                                    onClick={() => setUpdate(message) }>Update Message
                                            </Button> : null
                                    }
                                    {activeUser.isAdmin ? 
                                            <Button variant="danger" size="sm"
                                                    onClick={() => onDeleteClick(message.messageId)}>Delete Message
                                             </Button> : null
                                    
                                    }
                                </Col>
                            </Row>
                            
                        </Col>
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
                objMsg = {message}                    
                
                />


       </Container>
    )
}

export default Messages;