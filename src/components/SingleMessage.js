import { useState , useContext } from "react";
import { Button, Row, Col, Image , Form} from "react-bootstrap"; 


import CommentModel from '../Model/CommentModel';
import SetCurrentDateTime from '../components/utils';

//string to html react parser (npm install)
import parse from 'html-react-parser';
import ActiveUserContext from '../shared/activeUserContext';

function SingleMessage({users, message, updateMessage}){

    //form, get new comment
    const [newComment, setNewComment] = useState("");
    const pathPre = process.env.PUBLIC_URL;
    const activeUser = useContext(ActiveUserContext);

    let img = ""; 

    img = message.img; 
 
   
    //const imgSrc = pathPre+ "/" + img; 

    function saveComment(e){
        e.preventDefault();
        //alert(newComment);

        let dateCreated = SetCurrentDateTime(); 
        let userId = activeUser.userId; 
        let buildingId = message.buildingId; 
        let commentText = newComment; 

        const  newCommentObj = new CommentModel({
            dateCreated,
            userId,
            buildingId,
            commentText
        });

        //re - render message obj
        updateMessage(newCommentObj , message);

   }


   
    //get array of comments and return string combined from 
    //<ul> text (comments) items 
    //caller uses parse() to extract returned string to html
    function showCommentsForMessage(commentsArray){
        let returnStr = ""; 
        let userName =""; 
        let cmntDate = ""; 
        let userImg = ""; 

        console.log("commentsArray"); 
        console.log (commentsArray); 
        
        if(commentsArray){
            returnStr = "<ul>"; 
        
            commentsArray.forEach(cmnt => {
                cmntDate = cmnt.dateCreated; 

                if (cmnt.userId){
                    //find user
                    let userPos = users.findIndex(user => user.userId === cmnt.userId); //index in array 
                    userName = users[userPos].name; 
                    userImg = users[userPos].img; 
                    returnStr += "<li><img class='avatarIcon' src="+pathPre+"/"+userImg+" /><span class='cmntHeaderTxt'>"+ userName +"@"+cmntDate+"</span><br/>" + cmnt.commentText + "</li>" ; 
                }
                else
                {
                    returnStr += "<li><span class='cmntHeaderTxt'>"+ cmnt.userId +"@"+cmntDate+"</span><br/>" + cmnt.commentText + "</li>" ; 
                }


             });

            returnStr += "</ul>";
        }
        return   returnStr;
    }



    return(
       <Row>
           <Col xs={12} md={6} className="msgCardsCol">
                 <h5>{message.title}</h5>
      
                <Image src={img} rounded className="imgAvatar" />
      
                 <strong>Details: </strong> {message.details}
                 <br/>
                 <strong>Priority: </strong> {message.priority}
            </Col>

           <Col xs={12} md={6}>
             <h5>Comments</h5>
              Message ID: {message.messageId}
                       
              {message.ArrayCommentsId?  parse(showCommentsForMessage(message.ArrayCommentsId))   : ""} 
 
            
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

   
    )
}

export default  SingleMessage; 