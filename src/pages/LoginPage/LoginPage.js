import { useState, useContext } from "react";
import { Form ,  Button, Alert, Row, Col} from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";


//context
import ActiveUserContext from '../../shared/activeUserContext';

function LoginPage({users, onLogin}){

    const activeUser = useContext(ActiveUserContext);

    const [email, setEmail] = useState("");
    const [pswd, setPswd] = useState("");
    const [nonUser, setNonUser]= useState(false);

    if (activeUser) {
        return <Redirect to="/dashboard"/>
    }

    function login(e) {
        e.preventDefault();

        let activeUser = null;
        
        for (const user of users) {
            if (user.login(email, pswd)) { //if exists
                activeUser = user;
                break;
            }
        }

        if (activeUser) {
            onLogin(activeUser);
        } else {
            setNonUser(true);
        }
    }


     return (
        <div style={{marginTop:20}}>
      
            <h1 className="loginHeader">Login to HOA system </h1>
      
            <Row>
                <Col sm={12} md={6} className="divCenter">
                    <h2 className="loginHeader">  New? &nbsp; <Link to="/signup">Create a new account</Link></h2>
                </Col>
            </Row>
      
            <Row>
                <Col sm={12} md={8} className="divCenter" style={{marginTop:10, maxWidth:650}}>
                        <Form className="loginForm" onSubmit={login}>
                    
                            {nonUser? <Alert variant="danger">Invalid credentials</Alert> : null}

                            <Form.Group controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Enter email"
                                value={email} onChange={e=> setEmail(e.target.value)} />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Control type="password" placeholder="Password" 
                                value={pswd} onChange={e=> setPswd(e.target.value)}/>
                            </Form.Group>
                            
                            <Button className="submitForm" type="submit" block>
                                Login
                            </Button>
                    </Form>
                </Col>
            </Row>
               
               
        </div>
    )
}
export default LoginPage;