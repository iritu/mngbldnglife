import { Container, Row, Col, Image } from "react-bootstrap"; 
const pathPre = process.env.PUBLIC_URL;

function SingleMessage({message}){

   
    let img = ""; 

    img = message.img; 

    if (!img){
        img = "images/msgDefault.JPG";
    }
   
    //const imgSrc = pathPre+ "/" + img; 

    return(
       <Row>
           <Col xs={10} md={10}>
                 <h5>{message.title}</h5>
           </Col>
           <Col>
                <Row>
                   <Col xs={2} md={2}>
                        <Image src={img} rounded />
                   </Col>
                    <Col xs={10} md={8}>
                        Details: {message.details}
                        <br/>
                        Priority: {message.priority}
                    </Col>
                </Row>
           </Col>
       </Row>

   
    )
}

export default  SingleMessage; 