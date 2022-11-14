import React from "react";
import { Button, Modal } from "react-bootstrap";
import { IoCloseSharp } from "react-icons/io5";
import "./RemoveModal.css";

export default function RemoveModal(props) {

  return (
    <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header id="removeModalHeader">
          <IoCloseSharp
            id="closeIcon"
            onClick={props.onHide}
          />
        </Modal.Header>
        <Modal.Body id="removeModalBody" style={{ textAlign: "center" }}>
          <h6>Are you sure want to delete ?</h6>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Button
              variant="danger"
            >
              Delete
            </Button>
            <Button
              style={{ background: "#1931bb", marginLeft: '0.5rem' }}
              onClick={props.onHide}
            >
              Cancel
            </Button>
          </div>
        </Modal.Body>
      </Modal>
  )
}
