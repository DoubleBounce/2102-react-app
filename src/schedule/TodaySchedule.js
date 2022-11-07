import React, { useEffect, useState } from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import NavigationBar from '../components/NavigationBar'
import { Container, Row, Col, Table, Button } from 'react-bootstrap'

const TodaySchedule = (props) => {

  const [scopes, setScopes] = useState([])

  useEffect(() => {
    setScopes(JSON.parse(localStorage.getItem("scopes")))
  }, [])

  return (
    <>
      <NavigationBar active="schedule" title="Schedule" />
      <Container className="ml-2 mr-2">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Brand</th>
              <th>Serial Number</th>
              <th>Scope Type</th>
              <th>Model Number</th>
              <th>Nurse ID</th>
              <th>Shift (Day/Night)</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {
              scopes.map((scope) => (
                <tr>
                  <td>{scope.brand}</td>
                  <td>{scope.serialNo}</td>
                  <td>{scope.type}</td>
                  <td>{scope.model}</td>
                  <td>{scope.nurse}</td>
                  <td>{scope.shift}</td>
                  <td>{scope.date}</td>
                </tr>
              ))
            }
          </tbody>
        </Table>
      </Container>
    </>
  )
}

export default TodaySchedule;