import { Container, Button } from 'react-bootstrap';
import { useState, useContext  } from "react";
import NewMsgModal from '../../components/NewMsgModal';

//context
import ActiveUserContext from '../../shared/activeUserContext';

function Tickets({issues, users, onNewTicket}){
    const activeUser = useContext(ActiveUserContext);

    const [openModal, setOpenModal] = useState(false);
  
    const [issue, setIssueModal] = useState("");
          
    function setUpdate(issue){
        setOpenModal(true);
        setIssueModal(issue); 
    }        

    return (
        <Container>
            <h1>Tickets</h1>

            {/* open new ticket  */}
            {activeUser ? <> <Button variant="outline-primary"  onClick={() => setUpdate("")}>New Ticket   </Button> 
              {/* modal window, as it should receive building id there is no point of it without active user it will thow an err */}
               <NewMsgModal 
                    show={openModal} 
                    onClose={() => setOpenModal(false)} 
                    onCreate={onNewTicket}
                    activeUserBuildingid={activeUser.buildingId}
                    activeUserId = {activeUser.userId}
                    objMsg = {issue}   
                    type={1} // type=1 : ticket, default: message
                
                />
                </>
                : null}



        </Container>
    )
}

export default Tickets; 
