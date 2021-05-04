import { useState } from "react";
import { Form ,  Button} from "react-bootstrap";
import { Link } from "react-router-dom";
 
 
function LoginPage(){
    const [email, setEmail] = useState("");
    const [pswd, setPswd] = useState("");

    function login(e){
         e.preventDefault();
         console.log(email);
         console.log(pswd)   ;
    }


     return (
        <div>
            <h1 className="loginHeader">Login to HOA system </h1>
            <h2 className="loginHeader">  <Link to="/signup">Create a new account</Link>  &nbsp; if you are not registered</h2>
           

                <Form className="loginForm" onSubmit={login}>
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