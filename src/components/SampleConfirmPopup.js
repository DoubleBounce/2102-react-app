import React from 'react'
import { Card, Button, Row, Col } from 'react-bootstrap'

const SampleConfirmPopup = () => {

  const submitSampleScope = () => {

  }

  return (
    <>
      <Card className="text-center">
        <Card.Body>
          <Card.Title>
            Are these details correct?
          </Card.Title>
          <Card.Text>
            Ensure that the details are correct before submitting.
          </Card.Text>
          <Row>
            <Col>
              <Button className="edit-button" variant="warning">Edit</Button>
            </Col>
            <Col>
              <Button className="submit-button" variant="success" href="/sample/removeitems" onSubmit={() => {submitSampleScope()}}>Submit</Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  )
}

export default SampleConfirmPopup