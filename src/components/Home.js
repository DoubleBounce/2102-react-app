import React from 'react'
import NavigationBar from './NavigationBar'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import './styles/Home.css'

const Home = () => {
  return (
    <>
      <NavigationBar active="" title="Home" />
      <Container fluid>
        <Row className="mt-4 mb-4 d-flex align-items-center justify-content-center" id='home-dock-row'>
          <Col></Col>
          <Col md={5}>
            <Card border="dark" className="text-center">
              <Card.Body>
                <Card.Title>To start sampling a scope, DOCK tablet into station</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <Col className='text-center'>
            <Button variant="success" href="/schedule">Scopes scheduled for Today</Button>
          </Col>
          <Col className='text-center'>
            <Button variant="success" href="/status">Status of All Scopes</Button>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Home