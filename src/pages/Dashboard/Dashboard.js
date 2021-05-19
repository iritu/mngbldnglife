import { Container , Nav , Row, Col} from "react-bootstrap";
import React , {useContext} from 'react';
import { Redirect } from 'react-router';
import PieChartData from '../../components/PieChartData'; 

//context
import ActiveUserContext from '../../shared/activeUserContext';

function Dashboard({voteTickets}){

    const activeUser = useContext(ActiveUserContext);

    if (!activeUser) {
        return <Redirect to="/"/>
    }

    let  checkIfAdmin = false; 
    let votesArray = []; 
    let arrVoteTickets=[];

    if (activeUser)
    {
        checkIfAdmin = activeUser.isAdmin; 
    }

   
    //display votes for current user&building
    if(voteTickets){
      arrVoteTickets = voteTickets.filter(ticket =>  ticket.buildingId === activeUser.buildingId);
    }
 
    

    if (arrVoteTickets){
        arrVoteTickets.forEach(ticket => {
            if (ticket.status === "open" ) {
                votesArray.push(ticket)   ; 
            }   
        });
    }    


    console.log( votesArray); 

    return(
        <Container>
            <h1>Dashboard</h1>

            {checkIfAdmin === true? <Nav.Link  className="btnLink" href="#/tenants">Add New Tenants</Nav.Link> : null}
           
            <>
            <Row className="dashboardPieRow">
                <Col>   <h3>Open voting tickets results </h3> </Col>
            </Row>
            <Row >
            {votesArray.map((voteTicket) => {
                return (
                    <Col md={3} sm={6}>   
                      
                            <PieChartData entity={voteTicket} />  
                            
                     
                    </Col>
                    );
                })}
            </Row>
            </>
          

        </Container>
        )
}

export default Dashboard;