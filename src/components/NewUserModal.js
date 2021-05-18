import React, { useEffect, useState , useContext} from 'react';
import { Button, Modal, Form, Col, Row, Image } from 'react-bootstrap';
import ActiveUserContext from '../shared/activeUserContext';

/*
    only admin can create users so active user here is admin, 
    since admin and tenant are in the 
    same building, all the details of the building are 
    taken from the activeUser object
*/ 

function NewUserModal({ show, onClose, onCreate , objUser , onUpdateUser}) {
 
    const activeUser = useContext(ActiveUserContext);


    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [img, setImg] = useState("");
    const [appId, setAppId] = useState("");
    const [pswd, setPswd] =  useState("");
    const [objState, setObjState] = useState(null);
    

    let modalTitle = "Create New User "

    if (objUser){
        modalTitle= "Update User"
    }
     

    function onBeforeClose()
    {
        clearForm(); 
        onClose(); 

    }



    // get the user  object data on load 
    useEffect(() => {
        if (objUser){
            setName(objUser.name); 
            setEmail(objUser.email); 
            setPswd(objUser.pswrd); 
            setImg(objUser.img); 
            setAppId(objUser.appNumber)
        }
      }, [objUser, objState]); 
    
  
    
    //clear form data   
    function clearForm() {
        setName("");
        setEmail("");
        setPswd(""); 
        setImg(null);
        setAppId("");
        setObjState(null); 
    }


    function createUser() {
      
        let userId = 0;
        let pswrd = pswd; 
        let isAdmin="false"; 
        let city = activeUser.city; 
        let street = activeUser.street; 
        let stNumber = activeUser.stNumber;
        let buildingName = activeUser.buildingName; 
        let buildingId = activeUser.buildingId; 
        let appNumber = appId;


        if (objUser){ //existing user, just update the details
            userId = objUser.userId; 
            onUpdateUser(userId, name, email, img , pswrd, appNumber); 
        }
        else{ //create new user, full details
            onCreate( userId, isAdmin, name, email, img , pswrd,  city, street,  stNumber, buildingName, buildingId, appNumber);
        }
        onBeforeClose();
    }


 



    //image file upload , handles the insert and the update 
    function handleFileChange(e) {
        if (e.target.files.length === 1) {
            // setImg(e.target.files[0]);
            setImg(URL.createObjectURL(e.target.files[0]) ); 
        } else {
            setImg(null);
        }
    }



    return (
        <Modal show={show} onHide={onBeforeClose} size="lg">
            <Modal.Header closeButton>
                <Modal.Title> {modalTitle} </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group as={Row} controlId="UserName">
                        <Form.Label column sm={3}>
                            Name
                        </Form.Label>
                        <Col sm={9}>
                            <Form.Control type="text" placeholder="Full Name" 
                                value={name} onChange={e => setName(e.target.value)}/>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="UserEmail">
                        <Form.Label column sm={3}>
                            Email
                        </Form.Label>
                        <Col sm={9}>
                            <Form.Control type="email" placeholder="E Mail" 
                                value={email} onChange={e => setEmail(e.target.value)}/>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="UserPswd">
                        <Form.Label column sm={3}>
                            User Password
                        </Form.Label>
                        <Col sm={9}>
                            <Form.Control type="text" placeholder="Password" 
                                value={pswd} onChange={e => setPswd(e.target.value)}/>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="UserAppartment">
                        <Form.Label column sm={3}>
                            Appartment Nu.
                        </Form.Label>
                        <Col sm={9}>
                            <Form.Control type="number" placeholder="Appartment Number" 
                                value={appId} onChange={e => setAppId(e.target.value)}/>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="UserImg">
                        <Form.Label column sm={3}>
                            User Image
                        </Form.Label>
                        <Col sm={9}>
                            <Form.Control type="file" accept="image/*" onChange={handleFileChange}/>
                        </Col>
                    </Form.Group>

                      {/* {objMsg.img !== "" ?  <Image src={objMsg.img}/>  :  <Image src={img ? URL.createObjectURL(img) : ""}/>  }                        
                    */}
                    <Image src={img} alt="" className="imgAvatar" />                        
                              
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onBeforeClose}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={createUser}>
                   Submit
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default NewUserModal;