import SetCurrentDateTime from '../components/utils';

export default class CommentModel {

    constructor(SingleComment) {
        
        if (SingleComment.dateCreated === null){
            this.dateCreated = SetCurrentDateTime(); //return string - current date/time
        }
        else{
            this.dateCreated   =  SingleComment.dateCreated;
        }

         this.commentId     =  SingleComment.commentId;     //PK
         this.userId        =  SingleComment.userId;        //FK (UserModel)
         this.buildingId    =  SingleComment.buildingId     //FK. (BuildingModel)
         
         this.commentText   =  SingleComment.commentText; 
    }
}