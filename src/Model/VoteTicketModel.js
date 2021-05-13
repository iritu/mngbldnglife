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
  
         this.votes         = singleVoteTicket.votes;  //votes are related to options, see json for the example
         
         this.status        = singleVoteTicket.status; //open/close 
         this.voteSummary   = singleVoteTicket.voteSummary; 
    }
}