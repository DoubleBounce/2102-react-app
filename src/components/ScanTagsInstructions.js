import React, { useState, useEffect } from 'react'
import NavigationBar from './NavigationBar'
import { Container, Row, Col, Form, Card, Button } from 'react-bootstrap'

const ScanTagsInstructions = ({ staffDetails, populateStaffDetails }) => {
  return (
    <>
      <Card border="dark" className="text-center">
        <Card.Body>
          <Card.Title>To start sampling a scope, DOCK tablet into station</Card.Title>
        </Card.Body>
      </Card>
      <Row>
        <Col className='text-center'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="-18 -20 100 100" width="100" height="100"
            className="bi bi-person-badge" >
            <path d="m26 8a2 2 90 000 4h12a2 2 90 000-4h-12zM44 32a12 12 90 11-24 0 12 12 90 0124 0zM18 0A10 10 90 008 10V56a8 8 90 008 8h32a8 8 90 008-8V10A10 10 90 0046 0h-28zM12 10A6 6 90 0118 4h28A6 6 90 0152 10v43.18a16.8 16.8 90 00-3.104-1.968C45.568 49.548 40.252 48 32 48s-13.568 1.548-16.896 3.212a16.8 16.8 90 00-3.104 1.968V10z" />
          </svg>
          <div className="arrow bounce">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-18 -20 100 100" width="100" height="100" className="bi bi-arrow-down">
              <path d="M32 4a2 2 90 012 2v47.172l12.584-12.588a2 2 90 012.832 2.832l-16 16a2 2 90 01-2.832 0l-16-16a2 2 90 012.832-2.832L30 53.172V6A2 2 90 0132 4z" />
            </svg>
          </div>
        </Col>
      </Row>
      <Row className='tags-button-row'>
        <Col className="text-center">
          <Button className="staff-button" variant="success" onClick={(e) => populateStaffDetails(e)}>Scan Staff Tag</Button>
        </Col>
        <Col>
          <Button className="assistant-button" variant="success" onClick={(e) => populateStaffDetails(e)}>Scan Assistant Tag</Button>
        </Col>
        <Col>
          <Button className="employees-button" variant="success" href="/sample/scanscope">Employee Tags Scanned</Button>
        </Col>
      </Row>
    </>
  )

}

export default ScanTagsInstructions