import React from 'react'
import { Card, Col, Container, Row, Button } from 'react-bootstrap'
import NavigationBar from '../components/NavigationBar'

const RemoveItemsPage = () => {
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
            <Button className="items-removed-button" variant="success" href="/">Items removed</Button>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default RemoveItemsPage