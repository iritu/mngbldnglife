import SetCurrentDateTime from '../components/utils';

export default class CommentModel {

    constructor(singleComment) {
        
        if (singleComment.dateCreated === null){
            this.dateCreated = SetCurrentDateTime(); //return string - current date/time
        }
        else{
            this.dateCreated   =  singleComment.dateCreated;
        }

         this.commentId     =  singleComment.commentId;     //PK
         this.userId        =  singleComment.userId;        //FK (UserModel)
         this.buildingId    =  singleComment.buildingId;    //FK. (BuildingModel)
         this.messageId     =  singleComment.messageId;     //FK. (MessageModel) 
         
         this.commentText   =  singleComment.commentText; 
    }
}