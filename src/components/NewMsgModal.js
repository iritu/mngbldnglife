import React, { useEffect, useState } from 'react';
import { Button, Modal, Form, Col, Row, Image } from 'react-bootstrap';

import SetCurrentDateTime from './utils';

// if messageIndex is passed the it is an update process else it is an insert process

function NewMsgModal({ show, onClose, onCreate , activeUserBuildingid, activeUserId, objMsg, type=0}) {
 
    const [title, setTitle] = useState("");
    const [details, setDetails] = useState("");
    const [priority, setPriority] = useState("Info");
    const [img, setImg] = useState("");

    const [objState, setObjState] = useState(null);

    const [objMsgId , setMsgId] = useState(""); 

    let  typeName ="Message";  //default 

    if (type === 1 ){typeName = "Ticket";}
   

    let modalTitle = "Create New " + typeName;

    if (objMsg){
        modalTitle= "Update " + typeName;
    }
     

    function onBeforeClose()
    {
        clearForm(); 
        onClose(); 

    }



    // get the message object data on load 
    useEffect(() => {
        setTitle(objMsg.title); 
        setDetails(objMsg.details); 
        setPriority(objMsg.priority); 
        setImg(objMsg.img); 
        setMsgId(objMsg.messageId)
         
      }, [objMsg, objState]); 
    
  
    let  dateCreated = SetCurrentDateTime();

    // define select box options of priority
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


    //clear form data   
    function clearForm() {
        setTitle("");
        setDetails("");
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

        onCreate(messageId, buildingId,userId,  dateCreated, title, details, priority, img , "");
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
                            {typeName} Image
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

export default NewMsgModal;