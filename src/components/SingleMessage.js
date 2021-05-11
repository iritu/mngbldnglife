import { useState  } from "react";
import { Button, Row, Col, Image , Form} from "react-bootstrap"; 
//const pathPre = process.env.PUBLIC_URL;


import CommentModel from '../Model/CommentModel';
import SetCurrentDateTime from '../components/utils';

function SingleMessage({message, comments}){

    //form, get new comment
    const [newComment, setNewComment] = useState("");
     
    let img = ""; 

    img = message.img; 

    // if (!img){
    //     img = "images/msgDefault.JPG";
    // }
   
    //const imgSrc = pathPre+ "/" + img; 

    function saveComment(e){
        e.preventDefault();
        //alert(newComment);

        let dateCreated = SetCurrentDateTime(); 
        let commentId =  comments[comments.length-1].commentId + 1; 
        let userId = message.userId; 
        let buildingId = message.buildingId; 
        let messageId = message.messageId; 
        let commentText = newComment; 

        const  newCommentObj = new CommentModel({
            dateCreated,
            commentId,
            userId,
            buildingId,
            messageId,
            commentText
        });

        //Insert into comments array 
        comments.concat(newCommentObj);

        //update message obj with the new comment
        if (message.ArrayCommentsId){ //existing array of comments per message
            message.ArrayCommentsId.concat(commentId); 
        }
        else{ //there is no such array of comments yet
            message.ArrayCommentsId = [commentId];
        }

        console.log(comments); //comment is added to array
        console.log (message.ArrayCommentsId); // new id is added ok 


        // 1.  HOW TO MAKE THE MESSAGES.JS PRESENT THE NEW COMMENT RIGHT 
        // AFTER THE ADD COMMENT CLICK BUTTON
        // 2, concat doesnt work, push works ok but mess the arrays, what to do....
   }




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
 
 
                        <Form onSubmit={saveComment}>
                            <Form.Group controlId={`commentMsg${message.messageId}`}>
                               <Form.Control as="textarea" rows={3}
                                    value={newComment}
                                    onChange={e => setNewComment(e.target.value)}
                                    placeholder= "Add new comment"
                                   />
                            </Form.Group>
                           
                            <Button variant="secondary" size="sm" type="submit">Add Comment</Button>
                         
                        </Form>  

                    </Col>
                </Row>
           </Col>
       </Row>

   
    )
}

export default  SingleMessage; 