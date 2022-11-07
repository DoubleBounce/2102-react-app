import React, {useState, useEffect} from 'react'
import NavigationBar from '../components/NavigationBar'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// CSS
import "bootstrap/dist/css/bootstrap.min.css";

//External files
import scopeData from "../db/scopes.json"

const ScopeStatus = (props) => {
  return (
    <>
      <NavigationBar active="status" title="Status"/>
      <Container fluid>
        <FontAwesomeIcon icon="fa-solid fa-coffee" fixedWidth />
        <Row className="mt-4 mb-4 d-flex align-items-center justify-content-center" id='home-dock-row'>
          <Col>
            {
              scopeData.map((scope) => (
                  <Card border="dark" className="text-center mb-2">
                    <Card.Body>
                      <Card.Title>Serial No.: {scope.serialNo}</Card.Title>
                    </Card.Body>
                  </Card>
              ))
            }
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  )
}

export default ScopeStatus;
