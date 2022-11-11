import React from 'react'
import "./AddMemberModal.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Col, Container, Form, Row } from "react-bootstrap";

export default function AddMemberModal(props) {
  return (
    <div>
         <Modal  
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body id="addmember2">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label id="addmember3">Name</Form.Label>
            <Form.Control type="text" placeholder="" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label id="addmember3">Contact number</Form.Label>
            <Form.Control type="text" placeholder="" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label id="addmember3">Address</Form.Label>
            <Form.Control type="text" placeholder="" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label id="addmember3">Position</Form.Label>
            <Form.Control type="text" placeholder="" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label id="addmember3">Age</Form.Label>
            <Form.Control type="text" placeholder="" />
          </Form.Group>
          
          <Container fluid>
            <Row>
                {" "}
                <Button  onClick={props.onHide} id="addmember1"  type="submit">
                  Add
                </Button>
            </Row>
          </Container>
        </Modal.Body>

        {/* <Button onClick={props.onHide}>Close</Button> */}
      </Modal>
    </div>
  )
}
