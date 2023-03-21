import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React from 'react';

function Formulario() {
  return (

    <>
    <hr></hr>
        <h1 className='m-5 text-center'>
            Formulario
        </h1>
    <hr></hr>

    <div className='container m-5'>

        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
            We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <div className='mb-3 text-center'>
            <Button className='w-50' variant="primary" type="submit">
                Submit
            </Button>
        </div>

        </Form>
    </div>
    </>
  );
}

export default Formulario;