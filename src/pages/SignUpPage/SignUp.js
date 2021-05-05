import { useState, useContext } from "react";
import { Form ,  Button, Alert,  Col, Row, Image } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";

//context
import ActiveUserContext from '../../shared/activeUserContext';


function SignUp({buildings}){

    const activeUser = useContext(ActiveUserContext);
    
    const [email, setEmail]               = useState("");
    const [name, setName]                 = useState("");
    const [pswd, setPswd]                 = useState("");
    const [buildingName, setBuildingName] = useState("");
    const [city, setCity]                 = useState("");
    const [img, setImg] = useState(null);


    function register(e) {
        e.preventDefault();
    
        console.log(email);
        console.log(pswd);
        console.log(name);
        console.log(img);
    }

    function handleFileChange(e) {
        if (e.target.files.length === 1) {
            setImg(e.target.files[0]);
        } else {
            setImg(null);
        }
    }

    return(
        <div className="signUpPage">
            <h1 className="loginHeader">Create a Committee Member Account</h1>
           
            <Form className="loginForm" onSubmit={register}>
                <Form.Group as={Row} controlId="SignUpName">
                   <Form.Control type="text" placeholder="Full name:"
                   value={name} onChange={e=> setName(e.target.value)} />
                </Form.Group>

               <Form.Group as={Row} controlId="SignUpEmail">
                   <Form.Control type="email" placeholder="Enter email"
                   value={email} onChange={e=> setEmail(e.target.value)} />
               </Form.Group>

               <Form.Group as={Row}  controlId="SignUpPassword">
                   <Form.Control type="password" placeholder="Password" 
                   value={pswd} onChange={e=> setPswd(e.target.value)}/>
               </Form.Group>
              
                <Form.Group as={Row} controlId="SignUpBuildingName">
                   <Form.Control type="text" placeholder="Building name:"
                   value={buildingName} onChange={e=> setBuildingName(e.target.value)} />
                </Form.Group>

                <Form.Group as={Row} controlId="SignUpCity">
                   <Form.Control type="text" placeholder="City:"
                   value={city} onChange={e=> setCity(e.target.value)} />
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalImg">
                        <Form.Label column sm={3}>
                            Your Image
                        </Form.Label>
                        <Col sm={9}>
                            <Form.Control type="file" accept="image/*" onChange={handleFileChange}/>
                        </Col>
                    </Form.Group>
                    <Image src={img ? URL.createObjectURL(img) : ""}/>

               <Button variant="success" type="submit" block>
                   Sign Up
               </Button>
            </Form>

        </div>
    )
}

export default SignUp;