import React from 'react'
import "./CommunicationPostModal.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Container, Form, Row } from 'react-bootstrap';

export default function CommunicationPostModal(props) {
  return (
    <div><Modal  
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body id="communicationpost2">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label id="communicationpost3">Name</Form.Label>
            <Form.Control type="text" placeholder="" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label id="communicationpost3">Post description</Form.Label>
            <Form.Control type="text" placeholder="" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label id="communicationpost3">Add photos (4 max)</Form.Label>
            <Form.Control type="text" placeholder="" />
          </Form.Group>
          <Container fluid>
            <Row>
                {" "}
                <Button  onClick={props.onHide} id="communicationpost1"  type="submit">
                  Post
                </Button>
            </Row>
          </Container>
        </Modal.Body>

        {/* <Button onClick={props.onHide}>Close</Button> */}
      </Modal></div>
  )
}
