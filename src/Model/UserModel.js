export default class UserModel {
    constructor(SingleUser) {
        this.userId     = SingleUser.userId; //PK
        this.isAdmin    = SingleUser.isAdmin //true/false
        this.name       = SingleUser.name;
        this.email      = SingleUser.email;
        this.img        = SingleUser.img;
        this.pswrd      = SingleUser.pswrd;
        this.city       = SingleUser.city;
        this.street     = SingleUser.street;
        this.stNumber   = SingleUser.stNumber;
        this.buildingName = SingleUser.buildingName;
        this.buildingId   = SingleUser.buildingId;  //FK   
        this.appNumber      = SingleUser.appNumber; //number
    }

    
    login(email, pwd) {
        return email.toLowerCase() === this.email.toLowerCase() && pwd === this.pswrd;
    }
}