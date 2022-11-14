import React from "react";
import { Button, Form, Modal} from "react-bootstrap";
import './ContactAddModal.css';
import { IoCloseSharp } from "react-icons/io5";

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
        <Modal.Header id="contactAddModalHeader">
          <IoCloseSharp
            id="closeIcon"
            onClick={props.onHide}
          />
        </Modal.Header>
        <Modal.Body id="contactAddModalBody">
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
                as="textarea"
                id="allInputFieldsTxtContactAddModal"
                rows="2"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer id="contactAddModalFooter">
          <Button onClick={props.onHide} style={{width: '100%', backgroundColor: '#1931BB'}}>Add</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        ContactAddModal
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}
