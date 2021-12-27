import { Container, Button, Row, Col} from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import { useState, useContext  } from "react";
import NewMsgModal from '../../components/NewMsgModal';
import SingleMessage from '../../components/SingleMessage';
import { Redirect } from 'react-router';
 
//context
import ActiveUserContext from '../../shared/activeUserContext';
//import pathPreContext from '../../shared/pathPreContext'; 

function Tickets({issues, users, onNewTicket, onUpdateCommentIssue, updateIssueStatus}){
    const activeUser = useContext(ActiveUserContext);
    const [openModal, setOpenModal] = useState(false);
    const [issue, setIssueModal] = useState("");
    const [status, setStatus] = useState("Open");
    
  //  const pathPre = useContext(pathPreContext);


    if (!activeUser) {
        return <Redirect to="/"/>
    }

    function setUpdate(issue){
        setOpenModal(true);
        setIssueModal(issue); 
    }     
    
    
    //pass caller (app.js ) by local func , update comment
    function funcUpdateMessage(comment, issue){
      onUpdateCommentIssue(comment, issue); 
    }


    //All open tickets
    let issuesArr = issues.filter(issueItem => issueItem.buildingId === activeUser.buildingId && issueItem.status === status); 
    //sort issues by date       
    issuesArr.sort((a,b)=> b.dateCreated - a.dateCreated);         

 
    function closeTicket(ticketId)
    {
      var retVal = window.confirm("Issue will be marked as deleted, are you sure ?");
      if( retVal === true ) { //delete ticket
        updateIssueStatus (ticketId , "Close"); //call app.js to activate the actual delete from array
      }
    }
    
    function openTicket(ticketId){
      var retVal = window.confirm("This will reopen the issue, are you sure ?");
      if( retVal === true ) { //open ticket
        updateIssueStatus (ticketId , "Open"); //call app.js to activate the actual open from array
      }
    }


    return (
        <Container>
            <h1>Tickets</h1>

            {/* open new ticket  */}
            {activeUser ? <> 
                <Row style={{ paddingBottom:10 }}> 
                    <Col xs={4} md={2}>
                        <Button className="ticketsNavBtns" variant="outline-primary"  onClick={() => setUpdate("")}>
                           New Ticket   
                        </Button> 
                    </Col>
                    <Col  xs={4} md={2}>
                        <Button className="ticketsNavBtns" variant="outline-primary" onClick={() => setStatus("Close")}>
                          Closed Tickets
                        </Button>
                    </Col>
                    <Col  xs={4} md={2}>
                        <Button className="ticketsNavBtns" variant="outline-primary" onClick={() => setStatus("Open")}>
                          Open Tickets
                        </Button>
                    </Col>
                </Row>


              {/* modal window, as it should receive building id there is no point of it without active user it will thow an err */}
               <NewMsgModal 
                    show={openModal} 
                    onClose={() => setOpenModal(false)} 
                    onCreate={onNewTicket}
                    activeUserBuildingid={activeUser.buildingId}
                    activeUserId = {activeUser.userId}
                    objMsg = {issue}   
                    type={1} // type=1 : ticket, default: message
                
                />
                </>
                : null}

                {/* show all open tickets */}
                
                {
                  Array.isArray(issuesArr)  ?  issuesArr.map((issue, i) =>
          
                    <Accordion>
                      <Card key={i}>
                        <Card.Header>
                          <Accordion.Toggle as={Card.Title} variant="link" eventKey="0">
                                  <Row>
                                      <Col md={10} sm={6}>
                                             #{issue.ticketId} --   <span className="CardissueTitle"> {issue.title}</span>  
                                      </Col>
                                      <Col md={2} sm={6}>
                                           {activeUser.isAdmin === true && status === "Open"? 
                                                 <Button variant="danger" size="sm" onClick={() => closeTicket(issue.ticketId)} >Close Ticket</Button> 
                                            :null  }
                                            {activeUser.isAdmin === true && status === "Close"? 
                                                 <Button variant="danger" size="sm" onClick={() => openTicket(issue.ticketId)} >Reopen Ticket</Button>   
                                            :null}
                                      </Col>
                                  </Row>
                          </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                          <Card.Body>
                            {/* show single message with its comments */}           
                            <SingleMessage 
                                users={users}
                                message={issue} 
                                updateMessage={funcUpdateMessage}
                                type={1}
                                />
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                     
                    </Accordion>

                  )
                  : null
                }
  
        </Container>
    )
}

export default Tickets; 
