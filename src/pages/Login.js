import React from 'react'
import { Row, Col, Card } from 'react-bootstrap'
import { LoginForm } from '../components/LoginForm'

export const Login = () => {
  return (
    <Row>
      <Col></Col>
      <Col>
      <Card style={{ width: "600px", marginTop: "100px", marginBottom: "100px" }} aria-label='inicia sesión'>
        <Card.Body>
          <p> INICIA SESIÓN</p>
          <LoginForm />
        </Card.Body>
      </Card>
      </Col>
      <Col></Col>
    </Row>
  )
}
