import React,{useState} from 'react';
import { Form, Button, Col, Row } from "react-bootstrap";


function BookInputForm() {
    const [validated, setValidated] = useState(false);
  
    const handleSubmit = event => {
      event.preventDefault();
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);

     const title=form["title"].value
    };
  
    return (
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Row>
          <Form.Group as={Col} md={{ span: 6, offset: 3 }} controlId="validationCustom01">
            <Form.Label className="formLabel">InputTitle</Form.Label>
            <Form.Control
              required
              name="title"
              type="text"
              placeholder="InputTitle"
              className="formInput"
            />
            <Form.Control.Feedback>Looks great, babe!</Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
         
      </Form>
    );
  }
  
  export default BookInputForm;
  