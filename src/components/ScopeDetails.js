import React, { useState, useEffect } from 'react'
import NavigationBar from './NavigationBar'
import { Container, Row, Col, Form, Card, Button } from 'react-bootstrap'

const ScopeDetails = ({ scanningDetails, updateScanningDetails, populateScanningDetails }) => {
  return (
    <>
      <Card.Body>
        <Card.Title>Sampling Details</Card.Title>
        <Form>
          <Form.Group as={Row} className="mb-3" controlId="formSamplingDetailsDate">
            <Form.Label column sm="4">Date</Form.Label>
            <Col sm="8">
              <Form.Control value={scanningDetails.date} className='dateInput' onChange={(e) => updateScanningDetails(e)} />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formSamplingDetailsTime">
            <Form.Label column sm="4">Time</Form.Label>
            <Col sm="8">
              <Form.Control value={scanningDetails.time} className='timeInput' onChange={(e) => updateScanningDetails(e)} />
            </Col>
          </Form.Group>
        </Form>
        <Card.Title>Scope Details</Card.Title>
        <Form>
          <Form.Group as={Row} className="mb-3" controlId="formSamplingDetailsDate">
            <Form.Label column sm="4">Brand</Form.Label>
            <Col sm="8">
              <Form.Control value={scanningDetails.brand} className='brandInput' onChange={(e) => updateScanningDetails(e)} />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formSamplingDetailsTime">
            <Form.Label column sm="4">Type</Form.Label>
            <Col sm="8">
              <Form.Control value={scanningDetails.type} className='typeInput' onChange={(e) => updateScanningDetails(e)} />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formSamplingDetailsDate">
            <Form.Label column sm="4">Model</Form.Label>
            <Col sm="8">
              <Form.Control value={scanningDetails.model} className='modelInput' onChange={(e) => updateScanningDetails(e)} />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formSamplingDetailsTime">
            <Form.Label column sm="4">Serial No.</Form.Label>
            <Col sm="8">
              <Form.Control value={scanningDetails.serialNo} className='serialNoInput' onChange={(e) => updateScanningDetails(e)} />
            </Col>
          </Form.Group>

          <Button className="scope-placed-button" variant="success" href="/sample/confirmation" onClick={(e) => populateScanningDetails(e)}>Scope placed on station</Button>
        </Form>
      </Card.Body>
    </>
  )

}

export default ScopeDetails