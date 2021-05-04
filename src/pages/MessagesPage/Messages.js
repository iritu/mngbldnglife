import { Redirect } from 'react-router';

function Messages({activeUser}){
    
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