import React from "react";
import { Modal } from "react-bootstrap";
import { IoCloseSharp } from "react-icons/io5";
import "./ViewModal.css";

export default function ViewModal(props) {
  return (
    <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header id="viewModalHeader">
          <IoCloseSharp
            id="closeIcon"
            onClick={props.onHide}
          />
        </Modal.Header>
        <Modal.Body id="viewModalBody">
          <h6>TF ID : #54356</h6>
          <h6>
            Name : Rudra N Dash <br />
            Experience : 3years <br />
            Role : Production manager
          </h6>
        </Modal.Body>
      </Modal>
  )
}
