export default class VoteModel {
    constructor(SingleVote) {
         this.VoteId  = SingleVote.VoteId;  // PK 
         this.userId  = SingleVote.userId; // FK ( UserModel) 
         this.vote    = SingleVote.vote;  // yes/no  
    }
}