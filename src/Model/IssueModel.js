export default class IssueModel {
    constructor(SingleIssue) {
         this.issueId       = SingleIssue.issueId;  // PK 
         this.userId        = SingleIssue.userId; // FK ( UserModel) 
         this.buildingId    = SingleIssue.buildingId; //FK (BuildingModel) 
         this.createdTime   = SingleIssue.createdTime;  //current dateTime
         this.title         = SingleIssue.title; //mandatory
         this.details       = SingleIssue.details; //mandatory
         this.priority      = SingleIssue.priority; //mandatory. normal(default)/important/urgent
         this.img           = SingleIssue.img; 
         this.status        = SingleIssue.status;   //open/close
         this.issueAnswer   = SingleIssue.issueAnswer; //set:only if user isAdmin
    }
}