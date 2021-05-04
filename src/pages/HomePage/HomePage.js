import {Jumbotron, Container, Row, Col} from 'react-bootstrap';

function HomePage(){
    return(
        <>
            <Jumbotron fluid className="Jumbotron">
            <Container>
                <h1 className="HomePageHeader">
                Homeowner Association Management System
                </h1>
            </Container>
            </Jumbotron>
            <div className="homePageMain">
               <Container>
                   <h2 className="secondPHomePage">
                       Who we are
                   </h2>
                   <section className="homePageSectionText">
                        Communication between tenants and homeowner committee can be chalenging task.
                        <br/>
                        Our aim is to ease the process and automate it simplifying the flow
                        of Communication.
                        <br/>
                        Though there are many WhatsUp groups for that matter,our added value is
                        <br/>
                         to maintain 
                        and visualize the issues. 
                   </section>

                    <h2 className="HomePageBenefits">
                        The Benefits
                    </h2>

                    <Row className="homePageRow justify-content-md-center">
                        <Col md lg="4">
                            <h2 className="h2red">Comitee member</h2>
                            <br/>
                            <strong>Manage:</strong>
                            <ul>
                                <li>Voting</li>
                                <li>Messages</li>
                                <li>Issues</li>
                                <li>Tenants</li>
                            </ul>
                        </Col>
                        <Col md lg="4">
                            <h2 className="h2red">
                                Tenants
                            </h2>
                            <br/>
                            <strong>View and participate:</strong>
                            <ul>
                                <li>Participate in voting - Vote on issues you care</li>
                                <li>View messages of your building</li>
                                <li>Report, manage and view issues</li>
                            </ul>
                        </Col>
                    </Row>
               </Container>
            </div> 
        </>
    )
}

export default HomePage;