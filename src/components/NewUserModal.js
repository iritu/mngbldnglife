import React, { useEffect, useState } from 'react';
import { Button, Modal, Form, Col, Row, Image } from 'react-bootstrap';

import SetCurrentDateTime from './utils';

// if messageIndex is passed the it is an update process else it is an insert process

function NewUserModal({ show, onClose, onCreate , activeUserBuildingid, activeUserId, objMsg: objUser}) {
 
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [priority, setPriority] = useState("Info");
    const [img, setImg] = useState("");
    const [appId, setAppId] = useState("");

    const [objState, setObjState] = useState(null);

    const [objMsgId , setMsgId] = useState(""); 

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
            setImg(objUser.img); 
            setAppId(objUser.appNumber)
        }
      }, [objUser, objState]); 
    
  
    let  dateCreated = SetCurrentDateTime();

    //clear form data   
    function clearForm() {
        setName("");
        setEmail("");
        setPriority("Info")
        setImg(null);
        setMsgId("");
        setObjState(null); 
    }


    function createMsg() {
        //messageId; create new message id from last item of msg array
        let buildingId = activeUserBuildingid; // get building id
        let userId = activeUserId;             // get current user id ( isAdmin)
 
        let messageId = objMsgId;  //if messageId != null -> update, else -> insert 

        onCreate(messageId, buildingId,userId,  dateCreated, name, email, priority, img , "");
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
                <Button variant="primary" onClick={createMsg}>
                   Submit
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default NewUserModal;