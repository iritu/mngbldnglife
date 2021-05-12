import { useState  } from "react";
import { Button, Row, Col, Image , Form} from "react-bootstrap"; 
//const pathPre = process.env.PUBLIC_URL;


import CommentModel from '../Model/CommentModel';
import SetCurrentDateTime from '../components/utils';


//string to html react parser (npm install)
import parse from 'html-react-parser';


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
        let x = comments.concat(newCommentObj);

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
        // 2. concat doesnt work, push works ok but mess the arrays, what to do....
        // 3. how to notify user which messages of his are read / not read???
   }


   
    //get array of comments id's and return string combined from 
    //<ul> text (comments) items 
    //caller uses parse() to extract returned string to html
    function showCommentsForMessage(commentsIdsArray){
      
        let index =0; 
        let returnStr = "<ul>"; 
       
            commentsIdsArray.forEach(commentId => {
            //1. find comment id in comments array 
            index = comments.findIndex(cmnt => cmnt.commentId === commentId);
            //2. get comment data for this index position
            
            returnStr += "<li>" +comments[index].commentText+ "</li>" ; 
         }) ;  
         
        returnStr += "</ul>";
       
       return   returnStr;

    }



    return(
       <Row>
           <Col xs={6} md={6} className="msgCardsCol">
                 <h5>{message.title}</h5>
      
                <Image src={img} rounded className="imgAvatar"/>
      
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

           <Col xs={6} md={6}>
             <h5>Comments</h5>
              Message ID: {message.messageId}
                       
             {message.ArrayCommentsId?  parse(showCommentsForMessage(message.ArrayCommentsId))   : ""}

            </Col>


       </Row>

   
    )
}

export default  SingleMessage; 