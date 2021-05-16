import SetCurrentDateTime from '../components/utils';

export default class VoteTicketModel {
    constructor(singleVoteTicket) {
         this.VoteTicketId  = singleVoteTicket.VoteTicketId; //PK 
         this.userId        = singleVoteTicket.userId;      //FK ( UserModel)
         this.buildingId    = singleVoteTicket.buildingId; //FK (BuildingModel) 
         
         if (singleVoteTicket.dateCreated === null){
            this.dateCreated = SetCurrentDateTime(); //return string - current date/time
        }
         else{
            this.dateCreated   =  singleVoteTicket.dateCreated;
        }

         this.title         = singleVoteTicket.title; 
         this.details       = singleVoteTicket.details; 
         
        this.options       = singleVoteTicket.options; //array of strings 

         this.endDate       = singleVoteTicket.endDate; //the vote is no longer active after this date
  
        if (!singleVoteTicket.votes){
            this.votes  = []; 
        }
        else{
            this.votes         = singleVoteTicket.votes;  //votes are related to options, see json for the example
        }
      
        if ( !singleVoteTicket.status )
        {
            this.status= "open"; 
        }
        else
        {         
            this.status        = singleVoteTicket.status; //open/close 
        }

        if ( !singleVoteTicket.voteSummary )
        {
            this.voteSummary = 0 ; 
        }
        else{
            this.voteSummary   = singleVoteTicket.voteSummary; 
        }
        
    }
}