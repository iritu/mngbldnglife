export default class MessageModel {
    constructor(SingleMessage) {
        this.messageId  = SingleMessage.messageId;  //PK 
        this.buildingId = SingleMessage.buildingId; //FK (BuildingModel)
        this.userId     = SingleMessage.userId;     //FK (UserModel)
        this.msgCreateTime = SingleMessage.msgCreateTime; 
        this.title      = SingleMessage.title; 
        this.details    = SingleMessage.details;
        this.priority   = SingleMessage.priority;   // Important / Info ( default) 
        this.img        = SingleMessage.img; 
        this.msgStatus  = SingleMessage.msgStatus;   
        this.commentId  = SingleMessage.commentId; //FK (CommentModel) 
    }
}