import React, { useState } from 'react';
import { Button, Modal, Form, Col, Row } from 'react-bootstrap';

import SetCurrentDateTime from './utils';

import DateTimePicker from 'react-datetime-picker';
 

function NewTicketModal({ show, onClose, onCreate , activeUserBuildingid, activeUserId}) {
 
    const [title, setTitle] = useState("");
    const [details, setDetails] = useState("");
    const [endDateState, setEndDateState] = useState(new Date());
 

    //handle dynamic options fields
    const [arrOptions, setArrOptions] = useState([{ value: null }]);
    
    //option field changed
    function handleChange(i, event) {
      const values = [...arrOptions];
      values[i].value = event.target.value;
      setArrOptions(values);
    }
  
    //user clicked + button 
    function handleAdd() {
      const values = [...arrOptions];
      values.push({ value: null });
      setArrOptions(values);
    }
  
    //user clicked X ( remove) button 
    function handleRemove(i) {
      const values = [...arrOptions];
      values.splice(i, 1);
      setArrOptions(values);
    }

  
    function onBeforeClose()
    {
        clearForm(); 
        onClose(); 

    }

    let modalTitle = "Create New Voting "

  
    let  dateCreated = SetCurrentDateTime();
 
 
    //clear form data   
    function clearForm() {
        setTitle("");
        setDetails("");
    }

    //    "votes":[{"userid":1001, "result":"yes"  },{"userid":1002, "result":"no"  }, {"userid":1002, "result":"no"  } , {"userid":1002, "result":"no"  }  ], 
   



    function createVote() {
        let buildingId = activeUserBuildingid; // get building id
        let userId = activeUserId;             // get current user id ( isAdmin)
        let tempOptions = arrOptions; 

        console.log(arrOptions); 
        let tempArr=[];
        tempOptions.forEach(element => {
            tempArr.push(element.value); 
        });

        let options = tempArr; 


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
                        
                        <Col sm={4}>
                            {arrOptions.map((field, idx) => {
                                return (
                                <div key={`${field}-${idx}`}>
                                    <input  className="dynamicOptionsInput"
                                    type="text"
                                    placeholder="Enter option"
                                    onChange={e => handleChange(idx, e)}
                                    />
                                     <Button variant="outline-danger" 
                                        type="button" onClick={() => handleRemove(idx)}>x</Button>
                                </div>
                                );
                            })}

                            <Button variant="outline-success" 
                            type="button" onClick={() => handleAdd()}
                            >+</Button>
                         
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