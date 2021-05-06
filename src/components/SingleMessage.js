import { Container, Row, Col, Image } from "react-bootstrap"; 

function SingleMessage({message}){
    return(
        <Container>
        <Row>
            <Col>{message.title}</Col>
        </Row>    
        
        <Row>
            <Col xs={6} md={4}>
                 <Image src={message.img} rounded />
            </Col>
            <Col xs={6} md={4}>
                Details: {message.details}
                <br/>
                Priority: {message.priority}
            </Col>
        </Row>
        </Container>
    )
}

export default  SingleMessage; 