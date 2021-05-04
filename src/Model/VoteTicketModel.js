export default class VoteTicketModel {
    constructor(SingleVoteTicket) {
         this.VoteTicketId  = SingleVoteTicket.VoteTicketId; //PK 
         this.userId        = SingleVoteTicket.userId;      //FK ( UserModel)
         this.buildingId    = SingleVoteTicket.buildingId; //FK (BuildingModel) 
         this.createdTime   = SingleVoteTicket.createdTime; //current dateTime
         this.title         = SingleVoteTicket.title; 
         this.details       = SingleVoteTicket.details; 
         this.options       = SingleVoteTicket.options; //array of strings
         this.endDate       = SingleVoteTicket.endate; //the vote is no longer active after this date
         this.votes         = SingleVoteTicket.votes;  
         this.status        = SingleVoteTicket.status; //open/close 
         this.voteSummary   = SingleVoteTicket.voteSummary; 
    }
}