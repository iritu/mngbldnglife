//context
import { Redirect } from 'react-router';
import ActiveUserContext from '../../shared/activeUserContext';
import { useState, useContext  } from "react";
import { Button, Col, Container, Row , Image} from 'react-bootstrap';
import NewUserModal from '../../components/NewUserModal';
import pathPreContext from '../../shared/pathPreContext'; 

/**
 * TenantsPage: display exisiting tenants, activates the new user ( tenant ) modal, send to app.js 
 * the "onDeleteUser" , "onUpdateUser" to activate the correspondind delete/ update functions 
 * as the arrays are handled in app.js and it goes up the hierarchy of files to the caller to handle the data.
 * @param {*} users array,  onNewUser: function property ( activated in app.js) , onDeleteUser: function property, onUpdateUser: function property
 */

function TenantsPage({users , onNewUser , onDeleteUser, onUpdateUser}){

    const activeUser    = useContext(ActiveUserContext);
    const pathPre       = useContext(pathPreContext);

    const [filterText, setFilterText] = useState("");

    const [showNewUserModal, setShowNewUserModal] = useState(false);
    const [user, setUserModal] = useState("");
  
    if (!activeUser) {
        return <Redirect to="/"/>
    }
    if (activeUser.isAdmin === false){
        return <Redirect to="/"/>
    }

 

    //filter users by name/email / appartment
    let sortedUsers="";
    if (Array.isArray(users)){
        sortedUsers = users.filter(user => 
            user.buildingId === activeUser.buildingId && user.isActive === 1 && (
            user.name.toLowerCase().includes(filterText.toLowerCase()) || 
            user.email.toLowerCase().includes(filterText.toLowerCase()) ||
            parseInt(user.appNumber) === parseInt(filterText)
            )
        );
    }


   
    function setUpdate(user){
         setShowNewUserModal(true); //open new modal 
         setUserModal(user);  //null for new user, or obj user from user's list 
    }        


    /*  send the message id to app.js to delete it as the array is 
        held with state handeling in app.js
        onDeleteUser - is sent as a prop from app.js and this func pointer receives 
        back the index sent to it
    */
    function onDeleteClick (userId){
         onDeleteUser(userId); 
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
                            onClick={() => setUpdate("")}>New Tenant
                            </Button> : null}
                </Col>
            </Row>

             
            {sortedUsers? sortedUsers.map((user)  => 
                <>
                    <Row className="msgCards" key={user.userId}  >
                        <Col>
                           
                           {/* Update & delete message buttons */}
                            <Row>
                                {/* user details */}
                                <Col xs={4} md={2} className="tenantsPageUserImg">
                                        <h4 className="tenantsPageH4">  {user.name} </h4>
                                        <Image src={pathPre+user.img} rounded className="imgAvatar" />
                                </Col>
                                <Col  xs={8} md={4}>
                                        Email: <a href={`mailto:${user.email}`}>{user.email}</a> 
                                        <br/>
                                        Appartment Number: {user.appNumber}
                                </Col>

                                {/* update & delete  btn  */}
                                <Col xs={12} md={4} className="btnLine">
                                    {activeUser.isAdmin ? 
                                        <Button className="btnUpdateMsg" variant="primary" size="sm"  
                                            onClick={() => setUpdate(user) }>Update User
                                        </Button> : null
                                        }
                               
                                        {activeUser.isAdmin ? 
                                            <Button variant="danger" size="sm"
                                                onClick={() => onDeleteClick(user.userId)}>Delete User
                                            </Button> : null
                                        }
                                </Col>
                            </Row>

                        </Col>
                    </Row>
                   
                    </>
                  
                ) : null}

          
            {/* activate message modal      */}
            <NewUserModal 
                show={showNewUserModal} 
                onClose={() => setShowNewUserModal(false)} 
                onCreate={onNewUser}
                objUser = {user}                    
                onUpdateUser = {onUpdateUser}
                />
        </Container>
    )
}
export default TenantsPage;