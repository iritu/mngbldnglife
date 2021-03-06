import {Jumbotron, Container, Row, Col, Image} from 'react-bootstrap';

function HomePage(){

    const pathPre = process.env.PUBLIC_URL; //define server path

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
                            <span className="hpText">
                                <br/>
                                Committee member role is to add and remove tenant members, create votings, and remove/create message on the message board.
                                <br/>
                                There is only one committee member per building. 
                            </span>
                        </Col>
                        <Col xs={12} md={4}>
                            <Image src={pathPre + "/images/city-homepage-project.png"}  fluid  alt=""></Image>
                        </Col>
                    </Row>

                    <Row className="homePageRow2">
                        <Col xs={12} md={4}>
                           <Image src= {pathPre + "/images/city-homepage-2.png"} fluid  alt=""></Image>
                        </Col>
                        <Col xs={12} md={4}>
                            <h2>
                              Tenants
                            </h2>
                            <span className="hpText">
                                <br/>
                                Can view and participate: Vote on issues you care, View messages of your building, 
                                Report, manage and view issues.
                            </span>
                        </Col>
                    </Row>
          </Container>
         
        </>
    )
}

export default HomePage;