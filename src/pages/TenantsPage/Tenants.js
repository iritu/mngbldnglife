//context
import { Redirect } from 'react-router';
import ActiveUserContext from '../../shared/activeUserContext';
import { useState, useContext  } from "react";
import { Button, Col, Container, Row } from 'react-bootstrap';


function TenantsPage({users}){

    const activeUser = useContext(ActiveUserContext);
    const [filterText, setFilterText] = useState("");

    if (!activeUser) {
        return <Redirect to="/"/>
    }
    if (!activeUser.isAdmin){
        return <Redirect to="/"/>
    }


    //filter users by name/email / appartment
    let sortedUsers="";
    if (Array.isArray(users)){
        sortedUsers = users.filter(user => 
            user.buildingId === activeUser.buildingId && (
            user.name.toLowerCase().includes(filterText.toLowerCase()) || 
            user.email.toLowerCase().includes(filterText.toLowerCase()) ||
            user.appNumber.includes(filterText)
            )
        );
    }


    function setUpdate(user){
        // setNewMsgeModal(true);
        // setMsgModal(message); 
    }        


    /*  send the message id to app.js to delete it as the array is 
        held with state handeling in app.js
        onDeleteMsg - is sent as a prop from app.js and this func pointer receives 
        back the index sent to it
    */
    function onDeleteClick (userId){
        // onDeleteMsg(msgID); 
    }

    


    return (
        <Container>
            <h1>Tenants List</h1>

            <Row>
                <Col md={8}>
                   <form className="d-flex">
                        <input type="text" className="msgPageInput"
                                placeholder="Filter users by: name/email/appartment number" 
                                value={filterText}
                                onChange={e => setFilterText(e.target.value)}/>
                  
                    </form> 
                </Col>
                <Col md={2}>
                    {/* new user btn */}
                      {activeUser.isAdmin ? <Button variant="outline-primary"
                            onClick={() => setUpdate("")}>New User
                            </Button> : null}
                </Col>
            </Row>

             
            {sortedUsers? sortedUsers.map((user)  => 
                <>
                    <Row className="msgCards" key={user.userId}  >
                        <Col>
                           
                           {/* Update & delete message buttons */}
                            <Row>
                                    <Col xs={6} md={2}>
                                    {/* update  btn  */}
                                    {activeUser.isAdmin ? 
                                        <Button className="btnUpdateMsg" variant="primary" size="sm"
                                            onClick={() => setUpdate(user) }>Update User
                                        </Button> : null
                                        }
                                    </Col>
                            
                                    <Col xs={6} md={2}>
                                        {activeUser.isAdmin ? 
                                            <Button variant="danger" size="sm"
                                                onClick={() => onDeleteClick(user.userId)}>Delete User
                                            </Button> : null
                                        }
                                    </Col>
                            </Row>

                            {/* show single message with its comments */}           
                            {/* <SingleMessage message={message} updateMessage={funcUpdateMessage} /> */}
                            {user.name}

                        </Col>
                    </Row>
                   
                    </>
                  
                ) : null}



        </Container>
    )
}
export default TenantsPage;