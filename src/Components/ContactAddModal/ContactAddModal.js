import React from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import './ContactAddModal.css';

export default function ContactAddModal() {
  const [modalShow, setModalShow] = React.useState(false);

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        style={{color: '#fefefe'}}
      >
        <Modal.Header 
        style={{backgroundColor: '#0F1025', color: '#fefefe'}}>
          <Modal.Title id="contained-modal-title-vcenter">
            Add Contact
          </Modal.Title>
        </Modal.Header>
        <Modal.Body 
        style={{backgroundColor: '#0F1025'}}>
          <Form>
            {/* contact name */}
            <Form.Group className=" mt-2 mb-3">
              <Form.Label id="allLabelsTxtContactAddModal">
                Type Contact Name
              </Form.Label>
              <Form.Control
                type="text"
                id="allInputFieldsTxtContactAddModal"
              />
            </Form.Group>
            {/* contact num */}
            <Form.Group className=" mt-2 mb-3">
              <Form.Label id="allLabelsTxtContactAddModal">
                Contact number
              </Form.Label>
              <Form.Control
                type="text"
                id="allInputFieldsTxtContactAddModal"
              />
            </Form.Group>
            {/* address */}
            <Form.Group className=" mt-2 mb-3">
              <Form.Label id="allLabelsTxtContactAddModal">
                Address
              </Form.Label>
              <Form.Control
                type="text"
                id="allInputFieldsTxtContactAddModal"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer 
        style={{backgroundColor: '#0F1025'}}>
          <Button onClick={props.onHide} style={{width: '100%', backgroundColor: '#1931BB'}}>Add</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}
