export default class CommentModel {
    constructor(SingleComment) {
         this.commentId     =  SingleComment.commentId;     //PK
         this.userId        =  SingleComment.userId;        //FK (UserModel)
         this.buildingId    =  SingleComment.buildingId     //FK. (BuildingModel)
         this.dateCreated   =  SingleComment.dateCreated; 
         this.commentText   =  SingleComment.commentText; 
    }
}