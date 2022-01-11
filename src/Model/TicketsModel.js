import SetCurrentDateTime from '../components/utils';

export default class TicketModel {
    constructor(singleTicket) {
        this.ticketId  = singleTicket.ticketId;  //PK 
        this.buildingId = singleTicket.buildingId; //FK (BuildingModel)
        this.userId     = singleTicket.userId;     //FK (UserModel)
      
        if (singleTicket.dateCreated === null){
            this.dateCreated = SetCurrentDateTime(); //return string - current date/time
        }
        else{
            this.dateCreated   =  singleTicket.dateCreated;
        }
        
        this.dateCreated   =  singleTicket.dateCreated;
      
        this.title      = singleTicket.title; 
        this.details    = singleTicket.details;

        if (singleTicket.priority === null) { this.priority  = "Info"; }
        else {  this.priority   = singleTicket.priority;   }  // Important / Info ( default) 
       
       
        if (!singleTicket.status){ this.status = "Open"; }
        else { this.status = singleTicket.status;  } // "Open" / "Close" 
               

        if  (singleTicket.img ){ //we have img 
            this.img        = singleTicket.img; 
        }
        else{  this.img  = "images/issue-image.jpg";}
   
        this.ArrayCommentsId = singleTicket.ArrayCommentsId; //array 
    }
}