import React, { useEffect, useState } from 'react'
import { Card, Button, Row, Col } from 'react-bootstrap'

const SampleConfirmPopup = ({serialNo}) => {
  const scopes = JSON.parse(localStorage.getItem("scopes"))
  const [clicked, setClicked] = useState(false)

  useEffect(() => {
    // console.log(scopes, serialNo)
      clicked && (scopes.map((scope) => scope.serialNo === serialNo && (scope.status = 2) ))
      localStorage.setItem("scopes", JSON.stringify(scopes))
  }, [clicked])

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
              <Button className="submit-button" variant="success" onClick={() => setClicked(true)} href="/sample/removeitems">Submit</Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  )
}

export default SampleConfirmPopup