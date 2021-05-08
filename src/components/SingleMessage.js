import { Container, Row, Col, Image } from "react-bootstrap"; 
const pathPre = process.env.PUBLIC_URL;

function SingleMessage({message}){

   
    let img = ""; 

    img = message.img; 

    if (!img){
        img = "images/msgDefault.JPG";
    }
   
    const imgSrc = pathPre+ "/" + img; 

    return(
        <Container>
        <Row>
            <Col><h5>{message.title}</h5></Col>
        </Row>    
        
        <Row>
            <Col xs={6} md={2}>
                 <Image src={imgSrc} rounded />
            </Col>
            <Col xs={6} md={6}>
                Details: {message.details}
                <br/>
                Priority: {message.priority}
            </Col>
        </Row>
        </Container>
    )
}

export default  SingleMessage; 