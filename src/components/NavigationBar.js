import React from 'react'
import { Nav, Navbar, Container, Row, Col } from 'react-bootstrap'

const NavigationBar = (props) => {

  return (
    <>
      <Navbar bg='light'>
        <Nav>
          <Nav.Item>
            {
              props.active === ""
                ? <Nav.Link href='/' eventKey="home" active> Home </Nav.Link>
                : <Nav.Link href='/' eventKey="home"> Home </Nav.Link>
            }
          </Nav.Item>
          <Nav.Item>
            {
              props.active === "sample"
                ? <Nav.Link href='/sample/employeedetails' eventKey="sample" active> Sample </Nav.Link>
                : <Nav.Link href='/sample/employeedetails' eventKey="sample"> Sample </Nav.Link>
            }
          </Nav.Item>
          <Nav.Item>
            {
              props.active === "schedule"
                ? <Nav.Link href='/schedule' eventKey="schedule" active> Schedule </Nav.Link>
                : <Nav.Link href='/schedule' eventKey="schedule"> Schedule </Nav.Link>
            }
          </Nav.Item>
          <Nav.Item>
            {
              props.active === "status"
                ? <Nav.Link href='/status' eventKey="status" active> Status </Nav.Link>
                : <Nav.Link href='/status' eventKey="status"> Status </Nav.Link>
            }
          </Nav.Item>
        </Nav >
      </Navbar>
      {/* <Container> */}
      <Row>
        <Col>
          <h2>{props.title}</h2>
        </Col>
      </Row>
      {/* </Container> */}
    </>
  )
}

export default NavigationBar;
