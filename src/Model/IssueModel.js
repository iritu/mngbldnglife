import SetCurrentDateTime from '../components/utils';

export default class IssueModel {
    constructor(SingleIssue) {

         this.issueId       = SingleIssue.issueId;  // PK 
         this.userId        = SingleIssue.userId; // FK ( UserModel) 
         this.buildingId    = SingleIssue.buildingId; //FK (BuildingModel) 
         
        if (SingleIssue.dateCreated === null){
            this.dateCreated = SetCurrentDateTime(); //return string - current date/time
        }
         else{
            this.dateCreated   =  SingleIssue.dateCreated;
        }
       
         this.title         = SingleIssue.title; //mandatory
         this.details       = SingleIssue.details; //mandatory

        if (SingleIssue.priority === null){
            this.priority = "normal";
        }
        else{
            this.priority      = SingleIssue.priority; //mandatory. normal(default)/important/urgent
        }

        this.img           = SingleIssue.img; 
        this.status        = SingleIssue.status;   //open/close
        this.issueAnswer   = SingleIssue.issueAnswer; //set:only if user isAdmin
    }
}