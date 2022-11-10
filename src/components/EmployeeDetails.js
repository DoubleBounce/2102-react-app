import React from 'react'
import { Row, Col, Form } from 'react-bootstrap'
import SampleConfirmPopup from './SampleConfirmPopup'

const EmployeeDetails = ({staffDetails, scanningDetails, updateDetails}) => {
  return (
    <>
      <h3>Employee Details</h3>
      <Form>
        <Form.Group as={Row} className="mb-3" controlId="formStaffID">
          <Form.Label column sm="4">Staff ID</Form.Label>
          <Col sm="8">
            <Form.Control className='staffIdInput' value={staffDetails.staffId} onChange={(e) => updateDetails(e)} />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formStaffName">
          <Form.Label column sm="4">Staff Name</Form.Label>
          <Col sm="8">
            <Form.Control className='staffNameInput' value={staffDetails.staffName} onChange={(e) => updateDetails(e)} />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formStaffID">
          <Form.Label column sm="4">Assistant ID</Form.Label>
          <Col sm="8">
            <Form.Control className='assistantIdInput' value={staffDetails.assistantId} onChange={(e) => updateDetails(e)} />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formAssName">
          <Form.Label column sm="4">Assistant Name</Form.Label>
          <Col sm="8">
            <Form.Control className='assistantNameInput' value={staffDetails.assistantName} onChange={(e) => updateDetails(e)} />
          </Col>
        </Form.Group>
      </Form>
      {
        window.location.pathname === "/sample/confirmation" && <SampleConfirmPopup serialNo={scanningDetails.serialNo} />
      }
    </>
  )

}

export default EmployeeDetails