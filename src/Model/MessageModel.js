export default class MessageModel {
    constructor(singleMessage) {
        this.messageId  = singleMessage.messageId;  //PK 
        this.buildingId = singleMessage.buildingId; //FK (BuildingModel)
        this.userId     = singleMessage.userId;     //FK (UserModel)
      
        this.dateCreated   =  singleMessage.dateCreated;
      
        this.title      = singleMessage.title; 
        this.details    = singleMessage.details;

        if (singleMessage.priority === null){
            this.priority  = "Info";
        }
        else{
            this.priority   = singleMessage.priority;   // Important / Info ( default) 
        }
       
        if  (singleMessage.img ){ //we have img 
            this.img        = singleMessage.img; 
        }
        else{
            this.img  = "images/msgDefault.JPG";
        }
        this.ArrayCommentsId = singleMessage.ArrayCommentsId;
    }
}