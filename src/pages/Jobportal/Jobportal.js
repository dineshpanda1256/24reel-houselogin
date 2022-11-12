import React from 'react'
import { Container, Row, Col, Button } from "react-bootstrap";
import './Jobportal.css'

export default function Jobportal() {
  return (
    <div>
<Container fluid id="back">
<Row id="data">
   <div>
<Button variant="primary" size="lg" active>
        My Data
      </Button>{' '}
      </div>
      <Col>
      
<Button variant="primary" size="lg" active>
        My Data
      </Button>{' '}
      
      </Col>
</Row>

<Container id="name">
    <Row id="pro">
    
<Col xs={2} md={2}>profiles</Col>
<Col xs={2} md={2}>TFid</Col>
<Col xs={1} md={1}>Age</Col>
<Col xs={1} md={1}>Exp</Col>
<Col xs={2} md={2}>Status</Col>

    </Row>
<Row id="pro1">
<Col xs={2} md={2}>codekart</Col>
<Col xs={2} md={2}>#12345</Col>
<Col xs={1} md={1}>25</Col>
<Col xs={1} md={1}>3.4</Col>
<Col xs={2} md={2}>selected</Col>
<Col xs={1}>
<Button as="input" type="Reset" value="view" />
</Col>
<Col xs={1}>
<Button as="input" type="reset" value="edit" />
</Col>
<Col xs={2}>
<Button variant="danger">Rename</Button>{' '}
</Col>

</Row>

    </Container>



</Container>

</div>
  )
}
