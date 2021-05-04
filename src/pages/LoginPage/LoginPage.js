import { useState } from "react";
import { Form ,  Button, Alert} from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";

 
function LoginPage({users, activeUser,  onLogin}){
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
            if (user.login(email, pswd)) {
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
        <div>
            <h1 className="loginHeader">Login to HOA system </h1>
            <h2 className="loginHeader">  <Link to="/signup">Create a new account</Link>  &nbsp; if you are not registered</h2>
           
               
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
                   
                    <Button variant="success" type="submit" block>
                        Login
                    </Button>
            </Form>
        </div>
    )
}
export default LoginPage;