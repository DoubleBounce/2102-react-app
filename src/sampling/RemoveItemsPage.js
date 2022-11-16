import React, { useEffect, useState } from 'react'
import { Card, Col, Container, Row, Button, Modal } from 'react-bootstrap'
import NavigationBar from '../components/NavigationBar'
import img1 from "../img/endoscope.png";
import '../components/styles/animation.css';

const RemoveItemsPage = () => {
  const [showModal, setShowModal] = useState(false)
  const [timeleft, setTimeLeft] = useState(null)
  const handleClose = () => setShowModal(false)
  const handleShow = () => setShowModal(true)

  useEffect(() => {
    if (timeleft === 5 && showModal === false) {
      return;
    }

    if (timeleft === 0) {
      setTimeLeft(null)
      handleClose()
      window.location.href = "/";
    }
    //  // exit early when we reach 0
    //  if (!timeleft) return;

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
                <div class="uparrow bounce">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-18 -20 100 100" width="100" height="100" fill="currentColor"
                    className="bi bi-arrow-up">
                    <path fill-rule="evenodd"
                      d="M32 60a2 2 90 002-2V10.828l12.584 12.588a2 2 90 002.832-2.832l-16-16a2 2 90 00-2.832 0l-16 16a2 2 90 102.832 2.832L30 10.828V58a2 2 90 002 2z" />
                  </svg>
                </div>
                <div>
                  <img src={img1} alt="endoscopes" className='fade-in-image'></img>
                </div>
                <img src="https://visualpharm.com/assets/806/Table-595b40b65ba036ed117d2585.svg" alt="table" viewBox="-18 -20 100 100" width="100" height="100"></img>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col className='text-center'>
            <Button className="items-removed-button" variant="success" onClick={() => { handleShow(); setTimeLeft(5) }}>Items removed</Button>
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