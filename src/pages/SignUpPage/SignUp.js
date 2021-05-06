import { useState } from "react";
import { Form ,  Button, Col, Row, Image } from "react-bootstrap";
//import { Link, Redirect } from "react-router-dom";

function SignUp({onNewUser}){

    const [email, setEmail]               = useState("");
    const [name, setName]                 = useState("");
    const [pswd, setPswd]                 = useState("");
    const [buildingName, setBuildingName] = useState("");
    const [city, setCity]                 = useState("");
    const [img, setImg] = useState(null);
    const [street, setStreet]             = useState("");
    const [streetNu, setStreetNu]         = useState("");
    const [appNu, setAppNu]               = useState("");

     
    function register(e) {
        e.preventDefault();
    
        //console.log("register----"+email );
        createNewUser();
    }

    function createNewUser() {
        //console.log("sign up - createNewUser "); 
        onNewUser(true, name, email, img ? URL.createObjectURL(img) : "",  pswd, city, street, streetNu, buildingName,  appNu );
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

                <Form.Group as={Row} controlId="SignUpstreet">
                   <Form.Control type="text" placeholder="street:"
                   value={street} onChange={e=> setStreet(e.target.value)} />
                </Form.Group>

                <Form.Group as={Row} controlId="SignUpstreetNu">
                   <Form.Control type="number" placeholder="street Number:"
                   value={streetNu} onChange={e=> setStreetNu(e.target.value)} />
                </Form.Group>

                <Form.Group as={Row} controlId="SignUpAppNu">
                   <Form.Control type="number" placeholder="Appartment Number:"
                   value={appNu} onChange={e=> setAppNu(e.target.value)} />
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

                <Button variant="success" type="submit" onClick={createNewUser} block>
                   Sign Up
               </Button>
            </Form>

        </div>
    )
}

export default SignUp;