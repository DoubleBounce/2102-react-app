import React from "react";
import { Card } from "react-bootstrap";
import img1 from "../img/endoscope.png";
import './styles/animation.css';

const ScanScopeInstructions = () => {
  return (
    <>
      <Card border="dark" className="text-center mb-2">
        <Card.Body>
          <Card.Title>Place scope on station to scan</Card.Title>
        </Card.Body>
      </Card>
      <Card border="white" className="text-center mb-2">
        <Card.Body>
          <img src={img1} alt="endoscopes"></img>
          <div className="arrow bounce">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-18 -20 100 100" width="100" height="100" class="bi bi-arrow-down">
              <path fill-rule="evenodd" d="M32 4a2 2 90 012 2v47.172l12.584-12.588a2 2 90 012.832 2.832l-16 16a2 2 90 01-2.832 0l-16-16a2 2 90 012.832-2.832L30 53.172V6A2 2 90 0132 4z" />
            </svg>
          </div>
          <img src="https://visualpharm.com/assets/806/Table-595b40b65ba036ed117d2585.svg" alt="table" viewBox="-18 -20 100 100" width="100" height="100"></img>
        </Card.Body>
      </Card>
    </>
  )
}

export default ScanScopeInstructions
