import React from "react";
import "./PostJobModal.css";
import Button from "react-bootstrap/Button";

import Modal from "react-bootstrap/Modal";
import { Col, Container, Form, Row } from "react-bootstrap";

export default function PostJobModal(props) {
  return (
    <div >
      <Modal  
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body id="post2">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label id="post3">Job title</Form.Label>
            <Form.Control type="text" placeholder="" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label id="post3">Experience</Form.Label>
            <Form.Control type="text" placeholder="" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label id="post3">CTC</Form.Label>
            <Form.Control type="text" placeholder="" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label id="post3">Disabled select menu</Form.Label>
            <Form.Select>
              <option>24 Options</option>
            </Form.Select>
          </Form.Group>
          <Container fluid>
            <Row>
                {" "}
                <Button  onClick={props.onHide} id="post1"  type="submit">
                  Post
                </Button>
            </Row>
          </Container>
        </Modal.Body>

        {/* <Button onClick={props.onHide}>Close</Button> */}
      </Modal>
    </div>
  );
}
