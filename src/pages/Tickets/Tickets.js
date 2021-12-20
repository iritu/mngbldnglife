import { Container, Button , Row, Col } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import { useState, useContext  } from "react";
import NewMsgModal from '../../components/NewMsgModal';
import { Redirect } from 'react-router';
 
//context
import ActiveUserContext from '../../shared/activeUserContext';
import pathPreContext from '../../shared/pathPreContext'; 

function Tickets({issues, users, onNewTicket, onUpdateComment}){
    const activeUser = useContext(ActiveUserContext);

    const [openModal, setOpenModal] = useState(false);
  
    const [issue, setIssueModal] = useState("");
    
    const pathPre = useContext(pathPreContext);


    if (!activeUser) {
        return <Redirect to="/"/>
    }

    function setUpdate(issue){
        setOpenModal(true);
        setIssueModal(issue); 
    }        

    //All open tickets
    let issuesArr = issues.filter(issueItem => issueItem.buildingId === activeUser.buildingId && issueItem.status === "Open"); 
    //sort issues by date       
    issuesArr.sort((a,b)=> b.dateCreated - a.dateCreated);         

 

    return (
        <Container>
            <h1>Tickets</h1>

            {/* open new ticket  */}
            {activeUser ? <> <Button variant="outline-primary"  onClick={() => setUpdate("")}>New Ticket   </Button> 
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
                      <Card>
                        <Card.Header>
                          <Accordion.Toggle as={Card.Title} variant="link" eventKey="0">
                              #{issue.ticketId} --   <span className="CardissueTitle"> {issue.title}</span>
                          </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                          <Card.Body>
                              <Row>
                                <Col>
                                  On: {issue.dateCreated} 
                                  <br/>
                                  Status: {issue.status}
                                  <br/>
                                  {issue.img? <img src={pathPre+issue.img} alt={issue.title} />  : ""}
                                </Col>
                                <Col>
                                  {issue.details}
                                </Col>
                              </Row>
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
