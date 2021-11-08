// Will add login implementation in the next iteration
// Currently is just being redirected whenver 'Sign Out' is clicked within app

import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";

export default function Login() {

  const studentId = ['1001610294'];


  const [number, setNumber] = useState("");

  function validateForm() {
    return number.length > 0 
  }

  function handleSubmit(event) {
    const enteredId = studentId.find((id) => {
      return id === number;
    })

    if(enteredId)
    {
    }
  }

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Student ID</Form.Label>
          <Form.Control
            autoFocus
            type='number'
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </Form.Group>
        
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Login
        </Button>
      </Form>
    </div>
  );
}