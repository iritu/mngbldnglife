function SetCurrentDateTime(){
        let  today = new Date();  
        let  time = ""; 
        let  date = "";
        let msgCreatedAt = ""; 

        date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();

        msgCreatedAt =  date + " " + time; 

        return msgCreatedAt;
}

export default SetCurrentDateTime; 
