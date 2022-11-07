import React, { useState, useEffect } from 'react'
import NavigationBar from '../components/NavigationBar'
import { Container, Row, Col, Card, Form } from 'react-bootstrap'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ScopeStatus = (props) => {
  const [scopes, setScopes] = useState(JSON.parse(localStorage.getItem("scopes")))
  const [scopeShown, setScopeShown] = useState(scopes[0])

  const showScope = (serialNo) => {
    setScopeShown(scopes.find(scope => scope.serialNo === serialNo))
  }

  return (
    <>
      <NavigationBar active="status" title="Status" />
      <Container>
        {/* <FontAwesomeIcon icon="fa-solid fa-coffee" fixedWidth /> */}
        <Row className="text-center" id='home-dock-row'>
          <Col>
            {
              scopes.map((scope) => (
                <Card key={scope.serialNo} bg={scopeShown.serialNo === scope.serialNo && "info"} border="dark" className="text-center mb-2" onClick={() => showScope(scope.serialNo)}>
                  <Card.Body>
                    <Card.Title>Serial No.: {scope.serialNo}</Card.Title>
                  </Card.Body>
                </Card>
              ))
            }
          </Col>
          <Col>
            <Form>
              <Form.Group as={Row} className="mb-3" controlId="formStaffID">
                <Form.Label column sm="4">Serial No.</Form.Label>
                <Col sm="8">
                  <Form.Control value={scopeShown.serialNo} className='staffIdDisplay' disabled/>
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="formStaffID">
                <Form.Label column sm="4">Brand</Form.Label>
                <Col sm="8">
                  <Form.Control value={scopeShown.brand} className='staffIdDisplay' disabled/>
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="formStaffID">
                <Form.Label column sm="4">Type</Form.Label>
                <Col sm="8">
                  <Form.Control value={scopeShown.type} className='staffIdDisplay' disabled/>
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="formStaffID">
                <Form.Label column sm="4">Model No.</Form.Label>
                <Col sm="8">
                  <Form.Control value={scopeShown.model} className='staffIdDisplay' disabled/>
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="formStaffID">
                <Form.Label column sm="4">Performer</Form.Label>
                <Col sm="8">
                  <Form.Control value={scopeShown.nurse} className='staffIdDisplay' disabled/>
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="formStaffID">
                <Form.Label column sm="4">Assistant</Form.Label>
                <Col sm="8">
                  <Form.Control value={scopeShown.serialNo} className='staffIdDisplay' disabled/>
                </Col>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default ScopeStatus;
