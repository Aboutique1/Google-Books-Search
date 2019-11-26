import React,{useState} from 'react';
import { Form, Button, Col, Row } from "react-bootstrap";


function ContactUsForm() {
    const [validated, setValidated] = useState(false);
  
    const handleSubmit = event => {
      event.preventDefault();
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
    };
  
    return (
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Row>
          <Form.Group as={Col} md={{ span: 6, offset: 3 }} controlId="validationCustom01">
            <Form.Label className="formLabel">First Name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="First Name"
              className="formInput"
            />
            <Form.Control.Feedback>Looks great, babe!</Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
         
      </Form>
    );
  }
  
  export default ContactUsForm;