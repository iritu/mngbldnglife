import React, { useState } from 'react';
import { Button, Modal, Form, Col, Row, Image } from 'react-bootstrap';

import SetCurrentDateTime from './utils';

// if messageIndex is passed the it is an update process else it is an insert process

function NewMsgModal({ show, onClose, onCreate , activeUserBuildingid, activeUserId, messageIndex}) {
    const [title, setTitle] = useState("");
    const [details, setDetails] = useState("");
    const [priority, setPriority] = useState("Info");
    const [img, setImg] = useState(null);

    let  dateCreated = SetCurrentDateTime();

    const selectPriorityOptions = [
        {
          name: "Info",
          value: "Info",
        },
        {
          name: "Important",
          value: "Important",
        }
      ];

    function clearForm() {
        setTitle("");
        setDetails("");
        setPriority("Info")
        setImg(null);
    }

    function createMsg() {
        //messageId; create new message id from last item of msg array
        let buildingId = activeUserBuildingid; // get building id
        let userId = activeUserId;             // get current user id ( isAdmin)
 
        onCreate(buildingId,userId,  dateCreated, title, details, priority, img ? URL.createObjectURL(img) : "", "");
        clearForm();
        onClose();
    }

    function handleFileChange(e) {
        if (e.target.files.length === 1) {
            setImg(e.target.files[0]);
        } else {
            setImg(null);
        }
    }

    return (
        <Modal show={show} onHide={onClose} size="lg">
            <Modal.Header closeButton>
                <Modal.Title> {messageIndex}  {messageIndex !=="" ? "Update Message" : "New Message"}</Modal.Title>
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
                             <Form.Control as="select" value={priority}   
                                    onChange={e => setPriority(e.target.value)}>
                                    {selectPriorityOptions.map((option) => (
                                    <option 
                                        key={option.value}  
                                        value={option.value}>{option.name}
                                    </option>
                                    ))}
                             </Form.Control>
                        </Col>
                    </Form.Group>


                    <Form.Group as={Row} controlId="MsgImg">
                        <Form.Label column sm={3}>
                            Message Image
                        </Form.Label>
                        <Col sm={9}>
                            <Form.Control type="file" accept="image/*" onChange={handleFileChange}/>
                        </Col>
                    </Form.Group>
                    <Image src={img ? URL.createObjectURL(img) : ""}/>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={createMsg}>
                   Submit
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default NewMsgModal;