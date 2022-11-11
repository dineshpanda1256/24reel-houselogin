import React from "react";
import "./Productionsignup.css";
import { Form, Col, Container, Row } from "react-bootstrap";

export default function Productionsignup() {
  return (
    <>
      <Container fluid id="back">
        <Container>
          <Row>
            <Col></Col>

            
              <Col xs={4} md={6} id="name">
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>prodction/Agency / Schoolname</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Company owner name</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>House Type</Form.Label>
                  <Form.Control type="text" placeholder="Production Company" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Registration number</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Registed Address</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Year of Establishment</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Website (if available)</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Contact number</Form.Label>
                  <Form.Control type="password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>confirm password</Form.Label>
                  <Form.Control type="password" />
                </Form.Group>

                <Col xs={12} md={12} id="nx">
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>NEXT</Form.Label>
                  </Form.Group>
                </Col>
                </Form>
              </Col>
            
            <Col></Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}
