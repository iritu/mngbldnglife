import {Jumbotron, Container, Row, Col, Image} from 'react-bootstrap';

function HomePage(){
    return(
        <>
            <Jumbotron fluid className="Jumbotron">
                <h1 className="HomePageHeader">
                Homeowner Association Management System
                </h1>
            </Jumbotron>
           
            <div className="homePageMain">
                   <h1 className="secondPHomePage">
                       Who we are
                   </h1>
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
            </div>


            <Container>
                    <Row className="homePageRow">
                        <Col xs={12} md={4}>
                            <h2>Comitee member</h2>
                            <br/>
                            Manage: Voting, Messages, Issues, Tenants
                        </Col>
                        <Col xs={12} md={4}>
                            <Image src="images/city-homepage-project.png"  fluid  alt=""></Image>
                        </Col>
                    </Row>

                    <Row className="homePageRow2">
                        <Col xs={12} md={4}>
                           <Image src="images/city-homepage-2.png" fluid  alt=""></Image>
                        </Col>
                        <Col xs={12} md={4}>
                            <h2>
                               Tenants
                            </h2>
                            <br/>
                            View and participate: Vote on issues you care, View messages of your building, 
                            Report, manage and view issues.
                        </Col>
                    </Row>
          </Container>
         
        </>
    )
}

export default HomePage;