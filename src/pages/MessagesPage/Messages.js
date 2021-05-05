import { Redirect } from 'react-router';
import { useState, useContext } from "react";

//context
import ActiveUserContext from '../../shared/activeUserContext';



function Messages(){
    
    const activeUser = useContext(ActiveUserContext);

    if (!activeUser) {
        return <Redirect to="/"/>
    }


    return(
        <div>
            <h1>Messages </h1>
           
        </div>
       

        )
}

export default Messages;