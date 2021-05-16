import React, { useState } from 'react';
import { Button, Modal, Form, Col, Row } from 'react-bootstrap';

import SetCurrentDateTime from './utils';

import DateTimePicker from 'react-datetime-picker';

//string to html react parser (npm install)
import parse from 'html-react-parser';

function NewTicketModal({ show, onClose, onCreate , activeUserBuildingid, activeUserId}) {
 
    const [title, setTitle] = useState("");
    const [details, setDetails] = useState("");
    const [arrOptions, setArrOptions] = useState(); //array of options
    const [endDateState, setEndDateState] = useState(new Date());
    const [option, setOption] = useState(""); //single inserted option 

 
    let modalTitle = "Create New Voting "

  
    function onBeforeClose()
    {
        clearForm(); 
        onClose(); 

    }

  
    let  dateCreated = SetCurrentDateTime();
 
 
    // if (arrOptions){
    //     setArrOptions(arrOptions.push(option)); 
    // }
    // else{
    //    setArrOptions(option); 
    // }


    //clear form data   
    function clearForm() {
        setTitle("");
        setDetails("");
    }

    //    "votes":[{"userid":1001, "result":"yes"  },{"userid":1002, "result":"no"  }, {"userid":1002, "result":"no"  } , {"userid":1002, "result":"no"  }  ], 
   

    function createVote() {
        let buildingId = activeUserBuildingid; // get building id
        let userId = activeUserId;             // get current user id ( isAdmin)
        //let options = arrOptions; 
        let options = option; 

        //2021-5-16 14:58:46

        let datePart =""; 
        let timePart = ""; 

        datePart = endDateState.getFullYear() + '-' + (endDateState.getMonth() + 1) + '-' + endDateState.getDate();
        timePart = endDateState.getHours() + ':' + endDateState.getMinutes() + ':' + endDateState.getSeconds();

        let endDate = datePart + " " + timePart; 
        
      //VoteTicketId, userId, buildingId, dateCreated, title, details, options, endDate, votes, "open", 0
        onCreate(userId, buildingId, dateCreated, title, details , options , endDate );
        onBeforeClose();
    }

 
    function addOptionRow(){
        let OptionRow=""; 
    //    OptionRow += "<input type='text' placeholder='Enter new option' value={details} onChange={e => setArrOptions(e.target.value)}/>"

        OptionRow += "  <Form.Control type='text' placeholder='Enter new option' "; 
        OptionRow+= "  value={details} onChange={e => setArrOptions(e.target.value)}/>"
      
        console.log(OptionRow); 

        return OptionRow; 
    }


    function addOption (){
        parse(addOptionRow()); 
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
                                value={option} onChange={e => setOption(e.target.value)}/>
 
                            <br/> 
                             {/* <Button onClick={addOption}>+</Button> */}
                        </Col>
                    </Form.Group>



                    <Form.Group as={Row} controlId="VoteOptions">
                        <Form.Label column sm={3}>
                            End Date
                        </Form.Label>
                        <Col sm={9}>
                             <DateTimePicker
                                onChange={setEndDateState}
                                value={endDateState}
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