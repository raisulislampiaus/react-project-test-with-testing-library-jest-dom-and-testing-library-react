import React, {useState} from 'react'
import { Container, Form,Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function RegisterPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    
  return (
    <Container>
      <Row>
        <Col>
          <h1>register</h1>
           <Form>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>full Name</Form.Label>
                    <Form.Control 
                     type="name" placeholder="Enter full name" 
                     value={name}
                     onChange={(e)=> setName(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                        type="email" placeholder="Enter email" 
                        value={email}
                        onChange={(e)=> setEmail(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Enter Password</Form.Label>
                    <Form.Control 
                        type="password" 
                        placeholder="Enter Password" 
                        value={password}
                        onChange={(e)=> setPassword(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control 
                        type="password" 
                        placeholder="confirm password" 
                        value={confirmPassword}
                        onChange={(e)=> setConfirmPassword(e.target.value)}
                    />
                </Form.Group>
                <Button variant="primary" type="submit"  disabled='True'>
                    Register
                </Button>
            </Form>
        </Col>
      </Row>
      <Row>
        <Col>
          <Link to="login">Sign In</Link> if you have an account already!!
        </Col>
      </Row>
    </Container>
  )
}

export default RegisterPage
