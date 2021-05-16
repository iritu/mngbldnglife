import React, { useEffect, useState } from 'react';
import { Button, Modal, Form, Col, Row, Image } from 'react-bootstrap';

import SetCurrentDateTime from './utils';

// if messageIndex is passed the it is an update process else it is an insert process

function NewTicketModal({ show, onClose, onCreate , activeUserBuildingid, activeUserId}) {
 
    const [title, setTitle] = useState("");
    const [details, setDetails] = useState("");
    const [options, setOptions] = useState("");


 
    let modalTitle = "Create New Voting "


    function onBeforeClose()
    {
        clearForm(); 
        onClose(); 

    }

  
    let  dateCreated = SetCurrentDateTime();
 


    //clear form data   
    function clearForm() {
        setTitle("");
        setDetails("");
    }


    function createMsg() {
        //messageId; create new message id from last item of msg array
        let buildingId = activeUserBuildingid; // get building id
        let userId = activeUserId;             // get current user id ( isAdmin)
 
      
        onCreate(buildingId,userId,  dateCreated, title, details);
        onBeforeClose();
    }

 


    return (
        <Modal show={show} onHide={onBeforeClose} size="lg">
            <Modal.Header closeButton>
                <Modal.Title> {modalTitle} </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group as={Row} controlId="MsgTitle">
                        <Form.Label column sm={3}>
                            Title
                        </Form.Label>
                        <Col sm={9}>
                            <Form.Control type="text" placeholder="Message title" 
                                value={title} onChange={e => setTitle(e.target.value)}/>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="MsgDetails">
                        <Form.Label column sm={3}>
                            Details
                        </Form.Label>
                        <Col sm={9}>
                            <Form.Control type="text" placeholder="Message details" 
                                value={details} onChange={e => setDetails(e.target.value)}/>
                        </Col>
                    </Form.Group>



                    <Form.Group as={Row} controlId="MsgPriority">
                        <Form.Label column sm={3}>
                            Priority
                        </Form.Label>
                        <Col sm={9}>
                          
                        </Col>
                    </Form.Group>

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

export default NewTicketModal;