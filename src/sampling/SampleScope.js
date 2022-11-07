import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import NavigationBar from '../components/NavigationBar'
import EmployeeDetails from '../components/EmployeeDetails'
import ScanTagsInstructions from '../components/ScanTagsInstructions'
import ScopeDetails from '../components/ScopeDetails'
import ScanScopeInstructions from '../components/ScanScopeInstructions'

const SampleScope = () => {
  const [staffDetails, setDetails] = useState(JSON.parse(localStorage.getItem('staffDetails')))
  const [scanningDetails, setScanningDetails] = useState(JSON.parse(localStorage.getItem('scanningDetails')))

  const populateStaffDetails = (evt) => {
    evt.target.classList[0] === "staff-button" && setDetails({ ...staffDetails, staffId: "S1234", staffName: "Ryan Lim" })
    evt.target.classList[0] === "assistant-button" && setDetails({ ...staffDetails, assistantId: "A1534", assistantName: "Juleus Seah" })
    evt.target.classList[0] === "employee-button" && setDetails({ ...staffDetails, staffId: "S1234", staffName: "Ryan Lim" })
  }
  const updateDetails = (evt) => {
    const updatedValue = evt.target.classList.value
    updatedValue.includes("staffIdInput") && setDetails({ ...staffDetails, staffId: evt.target.value })
    updatedValue.includes("staffNameInput") && setDetails({ ...staffDetails, staffName: evt.target.value })
    updatedValue.includes("assistantIdInput") && setDetails({ ...staffDetails, assistantId: evt.target.value })
    updatedValue.includes("assistantNameInput") && setDetails({ ...staffDetails, assistantName: evt.target.value })
  }
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
    localStorage.setItem("staffDetails", JSON.stringify(staffDetails))
  }, [staffDetails])

  useEffect(() => {
    localStorage.setItem("scanningDetails", JSON.stringify(scanningDetails))
  }, [scanningDetails])

  return (
    <>
      <NavigationBar active="sample" title="Sample Scope" />
      <Container>
        <Row>
          <Col className='left-container'>
            {
              window.location.pathname === "/sample/employeedetails" || window.location.pathname ==="/sample/confirmation"
                ? <EmployeeDetails staffDetails={staffDetails} scanningDetails={scanningDetails} updateDetails={updateDetails} />
                : <ScanScopeInstructions />
            }
          </Col>
          <Col className='right-container'>
            {
              window.location.pathname === "/sample/employeedetails"
                ? <ScanTagsInstructions staffDetails={staffDetails} populateStaffDetails={populateStaffDetails} />
                : <ScopeDetails scanningDetails={scanningDetails} updateScanningDetails={updateScanningDetails} populateScanningDetails={populateScanningDetails} />}
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default SampleScope
