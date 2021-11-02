import { useState } from 'react';
import { Row } from 'react-bootstrap';

function ContactComponent(){
    
  const [toSend, setToSend] = useState({
    name: '',
    email:'',
    message: '',    
  });

  const [showDetails,setShowDetails] = useState(false); 

  const onSubmit = (e) => {
    e.preventDefault();
    setShowDetails(true); 
  };
    
  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };


    return(
        <div className="contactForm">

           { showDetails === false?  
           
            <form onSubmit={onSubmit}>
              <Row className="rowSpace">
                    <label htmlFor="name" />
                    <input  type='text' className="form-control" name='name'  placeholder='from name'   value={toSend.name}  onChange={handleChange}  />
                </Row>

                <Row className="rowSpace">
                    <label htmlFor="email" />  
                    <input type="email" className="form-control" name="email" placeholder="E-Mail" value={toSend.email} onChange={handleChange} />
                </Row>

                <Row className="rowSpace">
                    <label htmlFor="message" />
                    <input type='text' className="form-control" name='message'  placeholder='Your message' value={toSend.message}  onChange={handleChange} />
                </Row>

                <Row>   
                   <button type="submit"  className="btn submitForm">Send</button>
                </Row>

              </form>

              : 

              <div>
                  Your details: 
                  <br/>
                  {toSend.name}
                  <br/>
                  {toSend.email}
                  <br/>
                  {toSend.message}
                  <br/>
                  This is just a demo app so there is no use here in emailjs solution (3rd party)  . 
 
              </div>
              }

            </div>


    )
}

export default ContactComponent;