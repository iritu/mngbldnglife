import { useState  } from "react";
import {  Row, Col, Image , Form} from "react-bootstrap"; 
//const pathPre = process.env.PUBLIC_URL;


import CommentModel from '../Model/CommentModel';


function SingleMessage({message, commentsArray}){

    const [newComment, setNewComment] = useState("");

   
    let img = ""; 

    img = message.img; 

    // if (!img){
    //     img = "images/msgDefault.JPG";
    // }
   
    //const imgSrc = pathPre+ "/" + img; 

    return(
       <Row>
           <Col xs={10} md={10}>
                 <h5>{message.title}</h5>
           </Col>
           <Col>
                <Row>
                   <Col xs={3} md={3}>
                        <Image src={img} rounded className="imgAvatar"/>
                   </Col>
                    <Col xs={10} md={8}>
                        Details: {message.details}
                        <br/>
                        Priority: {message.priority}

                        <Form>
                            <Form.Group controlId={`commentMsg${message.messageId}`}>
                               <Form.Control as="textarea" rows={3}
                                    value={newComment}
                                    onChange={e => setNewComment(e.target.value)}
                                    placeholder= "Add new comment"
                                   />
                            </Form.Group>
                        </Form>

                    </Col>
                </Row>
           </Col>
       </Row>

   
    )
}

export default  SingleMessage; 