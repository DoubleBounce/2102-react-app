import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import NavigationBar from '../components/NavigationBar'
import { Card, Form, Button } from 'react-bootstrap'

const ScanScope = () => {
  const [scanningDetails, setScanningDetails] = useState(JSON.parse(localStorage.getItem('scanningDetails')))
  const populateScanningDetails = (evt) => {
    const nowDate = new Date()
    const year = nowDate.getFullYear()
    const month = nowDate.getMonth()
    const date = nowDate.getDate()
    const hour = nowDate.getHours()
    const min = nowDate.getMinutes()
    const sec = nowDate.getSeconds()

    const formattedDate = date + "/" + month + "/" + year
    const formattedTime = hour + ":" + min + ":" + sec + " (24 hour)"
    evt.target.classList[0] === "scope-placed-button" 
    && (
      setScanningDetails({ 
      ...scanningDetails, 
      date: formattedDate, 
      time: formattedTime,
      brand: "Toshiba",
      type: "Scope B",
      model: "88888",
      serialNo: "12345",
    })
    )
  }
  const updateScanningDetails = (evt) => {
    const updatedValue = evt.target.classList.value
    updatedValue.includes("dateInput") && setScanningDetails({ ...scanningDetails, date: evt.target.value })
    updatedValue.includes("timeInput") && setScanningDetails({ ...scanningDetails, time: evt.target.value })
    updatedValue.includes("brandInput") && setScanningDetails({ ...scanningDetails, brand: evt.target.value })
    updatedValue.includes("typeInput") && setScanningDetails({ ...scanningDetails, type: evt.target.value })
    updatedValue.includes("modelInput") && setScanningDetails({ ...scanningDetails, model: evt.target.value })
    updatedValue.includes("serialNoInput") && setScanningDetails({ ...scanningDetails, serialNo: evt.target.value })
  }

  useEffect(() => {
    localStorage.setItem("scanningDetails", JSON.stringify(scanningDetails))
  }, [scanningDetails])

  return (
    <>
      <Container fluid>
        <NavigationBar active="sample" title="Sample Scope" />
        <Row>
          <Col>
            <Card border="dark" className="text-center mb-2">
              <Card.Body>
                <Card.Title>Place scope on station to scan</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col className="justify-content-center">
            <Card.Body>
              <Card.Title>Sampling Details</Card.Title>
              <Form>
                <Form.Group as={Row} className="mb-3" controlId="formSamplingDetailsDate">
                  <Form.Label column sm="4">Date</Form.Label>
                  <Col sm="8">
                    <Form.Control value={scanningDetails.date} className='dateInput' onChange={(e) => updateScanningDetails(e)}/>
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formSamplingDetailsTime">
                  <Form.Label column sm="4">Time</Form.Label>
                  <Col sm="8">
                    <Form.Control value={scanningDetails.time} className='timeInput' onChange={(e) => updateScanningDetails(e)}/>
                  </Col>
                </Form.Group>
              </Form>
              <Card.Title>Scope Details</Card.Title>
              <Form>
                <Form.Group as={Row} className="mb-3" controlId="formSamplingDetailsDate">
                  <Form.Label column sm="4">Brand</Form.Label>
                  <Col sm="8">
                    <Form.Control value={scanningDetails.brand} className='brandInput' onChange={(e) => updateScanningDetails(e)}/>
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formSamplingDetailsTime">
                  <Form.Label column sm="4">Type</Form.Label>
                  <Col sm="8">
                    <Form.Control value={scanningDetails.type} className='typeInput' onChange={(e) => updateScanningDetails(e)}/>
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formSamplingDetailsDate">
                  <Form.Label column sm="4">Model</Form.Label>
                  <Col sm="8">
                    <Form.Control value={scanningDetails.model} className='modelInput' onChange={(e) => updateScanningDetails(e)}/>
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formSamplingDetailsTime">
                  <Form.Label column sm="4">Serial No.</Form.Label>
                  <Col sm="8">
                    <Form.Control value={scanningDetails.serialNo} className='serialNoInput' onChange={(e) => updateScanningDetails(e)}/>
                  </Col>
                </Form.Group>

                <Button className="scope-placed-button" variant="success" onClick={(e) => populateScanningDetails(e)}>Scope placed on station</Button>
              </Form>
            </Card.Body>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default ScanScope