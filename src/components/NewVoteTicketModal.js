import React, { useState } from 'react';
import { Button, Modal, Form, Col, Row } from 'react-bootstrap';

import SetCurrentDateTime from './utils';

import DateTimePicker from 'react-datetime-picker';
// if messageIndex is passed the it is an update process else it is an insert process

function NewTicketModal({ show, onClose, onCreate , activeUserBuildingid, activeUserId}) {
 
    const [title, setTitle] = useState("");
    const [details, setDetails] = useState("");
    const [arrOptions, serArrOptions] = useState();
    const [endDate, setEndDate] = useState(new Date());


 
    let modalTitle = "Create New Voting "

    var  createArrOpt = [];

    function onBeforeClose()
    {
        clearForm(); 
        onClose(); 

    }

  
    let  dateCreated = SetCurrentDateTime();
 

    //create array of options
    function setArrOptions(option){
            if (!createArrOpt){
                createArrOpt = option; 
            }
            else{
                createArrOpt.push(option); 
            }

            serArrOptions(createArrOpt); 

    }


    //clear form data   
    function clearForm() {
        setTitle("");
        setDetails("");
    }

    //    "votes":[{"userid":1001, "result":"yes"  },{"userid":1002, "result":"no"  }, {"userid":1002, "result":"no"  } , {"userid":1002, "result":"no"  }  ], 
   

    function createVote() {
        let buildingId = activeUserBuildingid; // get building id
        let userId = activeUserId;             // get current user id ( isAdmin)
 
      //VoteTicketId, userId, buildingId, dateCreated, title, details, options, endDate, votes, "open", 0
        onCreate(userId, buildingId, dateCreated, title, details , arrOptions , endDate );
        onBeforeClose();
    }

 


    return (
        <Modal show={show} onHide={onBeforeClose} size="lg">
            <Modal.Header closeButton>
                <Modal.Title> {modalTitle} </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group as={Row} controlId="VoteTitle">
                        <Form.Label column sm={3}>
                            Title
                        </Form.Label>
                        <Col sm={9}>
                            <Form.Control type="text" placeholder="Vote title" 
                                value={title} onChange={e => setTitle(e.target.value)}/>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="VoteDetails">
                        <Form.Label column sm={3}>
                            Details
                        </Form.Label>
                        <Col sm={9}>
                            <Form.Control type="text" placeholder="Vote details" 
                                value={details} onChange={e => setDetails(e.target.value)}/>
                        </Col>
                    </Form.Group>



                    <Form.Group as={Row} controlId="VoteOptions">
                        <Form.Label column sm={3}>
                            Options
                        </Form.Label>
                        <Col sm={9}>
                            <Form.Control type="text" placeholder="Enter new option" 
                                value={details} onChange={e => setArrOptions(e.target.value)}/>
                        </Col>
                    </Form.Group>



                    <Form.Group as={Row} controlId="VoteOptions">
                        <Form.Label column sm={3}>
                            End Date
                        </Form.Label>
                        <Col sm={9}>
                             <DateTimePicker
                                onChange={setEndDate}
                                value={endDate}
                                minDate= {new Date()}
                                
                            />
                        </Col>
                    </Form.Group>
               </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onBeforeClose}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={createVote}>
                   Submit
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default NewTicketModal;