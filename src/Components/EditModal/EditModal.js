import React from "react";
import { Button, Modal } from "react-bootstrap";
import { IoCloseSharp } from "react-icons/io5";
import "./EditModal.css";

export default function EditModal(props) {
  return (
    <Modal
    {...props}
    size="md"
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
    <Modal.Header id="editModalHeader">
      <IoCloseSharp
        id="closeIcon"
        onClick={props.onHide}
      />
    </Modal.Header>
    <Modal.Body id="editModalBody">
      <h6>TF ID : #54356</h6>
      <h6>
        Name : Rudra N Dash <br />
        Experience : 3years <br />
        Role : Production manager
      </h6>
    </Modal.Body>
    <Modal.Footer id="editModalFooter">
      <Button>Save</Button>
    </Modal.Footer>
  </Modal>
  )
}
