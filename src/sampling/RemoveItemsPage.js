import React, { useEffect, useState } from 'react'
import { Card, Col, Container, Row, Button, Modal } from 'react-bootstrap'
import history from 'react-router-dom'
import NavigationBar from '../components/NavigationBar'

const RemoveItemsPage = () => {
  const [showModal, setShowModal] = useState(false)
  const [timeleft, setTimeLeft] = useState(5)
  const handleClose = () => setShowModal(false)
  const handleShow = () => setShowModal(true)

  useEffect(() => {
    if(timeleft===0) {
      setTimeLeft(null)
      handleClose()
      window.location.href = "/";
   }
   // exit early when we reach 0
   if (!timeleft) return;

    const intervalId = setInterval(() => {
      setTimeLeft(timeleft - 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [timeleft])
  
  return (
    <>
      <NavigationBar active="sample" title="Remove Items" />
      <Container>
        <Row className="mb-5">
          <Col>
            <Card className="text-center">
              <Card.Body>
                <Card.Title>
                  Remember to remove employee tags and scopes from the station after sampling.
                </Card.Title>
                <Card.Text>
                  After removing items, you will automatically be redirected back to the home page.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col className='text-center'>
            <Button className="items-removed-button" variant="success" onClick={() => {setShowModal(true); setTimeLeft(5)}}>Items removed</Button>
          </Col>
        </Row>
        {
          showModal &&
          <Modal show={showModal} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Redirecting to Home page</Modal.Title>
            </Modal.Header>
            <Modal.Body>You will be redirected to the home page in {timeleft} seconds!</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Cancel
              </Button>
              <Button variant="primary" href="/">
                Go to Home Now
              </Button>
            </Modal.Footer>
          </Modal>
        }
      </Container>
    </>
  )
}

export default RemoveItemsPage