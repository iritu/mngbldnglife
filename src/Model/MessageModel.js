import SetCurrentDateTime from '../components/utils';

export default class MessageModel {
    constructor(SingleMessage) {
        this.messageId  = SingleMessage.messageId;  //PK 
        this.buildingId = SingleMessage.buildingId; //FK (BuildingModel)
        this.userId     = SingleMessage.userId;     //FK (UserModel)
        
        if (SingleMessage.dateCreated === null){
            this.dateCreated = SetCurrentDateTime(); //return string - current date/time
        }
         else{
            this.dateCreated   =  SingleMessage.dateCreated;
        }

        this.title      = SingleMessage.title; 
        this.details    = SingleMessage.details;

        if (SingleMessage.priority === null){
            this.priority  = "Info";
        }
        else{
            this.priority   = SingleMessage.priority;   // Important / Info ( default) 
        }
       
        this.img        = SingleMessage.img; 
        this.ArrayCommentsId  = SingleMessage.commentId; //Could be a lot of comments to one message
    }
}