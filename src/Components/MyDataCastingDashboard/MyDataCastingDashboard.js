import React, { useState } from "react";
import { Button, Col, Row, Table, Modal } from "react-bootstrap";
import { BsPlusSquareFill } from "react-icons/bs";
import { IoCloseSharp } from "react-icons/io5";
import "./MyDataCastingDashboard.css";

export default function MyDataCastingDashboard() {
  const [showViewModal, setShowViewModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showRemoveModal, setShowRemoveModal] = useState(false);

  function ViewModal(props) {
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
            onClick={() => setShowViewModal(!showViewModal)}
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
    );
  }

  function EditModal(props) {
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
            onClick={() => setShowEditModal(!showEditModal)}
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
        <Modal.Footer id="viewModalFooter">
          <Button onClick={() => setShowEditModal(!showEditModal)}>Save</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  function RemoveModal(props) {
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
            onClick={() => setShowRemoveModal(!showRemoveModal)}
          />
        </Modal.Header>
        <Modal.Body id="viewModalBody" style={{ textAlign: "center" }}>
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
              onClick={() => setShowRemoveModal(!showRemoveModal)}
            >
              Delete
            </Button>
            <Button
              style={{ background: "#1931bb", marginLeft: '0.5rem' }}
              onClick={() => setShowRemoveModal(!showRemoveModal)}
            >
              Cancel
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    );
  }

  return (
    <Row>
      <Col>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <BsPlusSquareFill id="addIcon" />
        </div>
        <Row style={{ overflowX: "scroll" }}>
          <Table striped>
            <thead>
              <tr>
                <th>#</th>
                <th>Profile</th>
                <th>TF ID</th>
                <th> </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Rudra Narayan Dash</td>
                <td>#5456456</td>
                <td style={{ display: "flex", justifyContent: "flex-end" }}>
                  <Button
                    id="buttons"
                    onClick={() => setShowViewModal(!showViewModal)}
                  >
                    View
                  </Button>
                  <Button
                    id="buttons"
                    onClick={() => setShowEditModal(!showEditModal)}
                  >
                    Edit
                  </Button>
                  <Button
                    id="removeBtn"
                    onClick={() => setShowRemoveModal(!showRemoveModal)}
                  >
                    Remove
                  </Button>
                  <Button id="buttons">Share</Button>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Rudra Narayan Dash</td>
                <td>#5456456</td>
                <td style={{ display: "flex", justifyContent: "flex-end" }}>
                  <Button
                    id="buttons"
                    onClick={() => setShowViewModal(!showViewModal)}
                  >
                    View
                  </Button>
                  <Button
                    id="buttons"
                    onClick={() => setShowEditModal(!showEditModal)}
                  >
                    Edit
                  </Button>
                  <Button
                    id="removeBtn"
                    onClick={() => setShowRemoveModal(!showRemoveModal)}
                  >
                    Remove
                  </Button>
                  <Button id="buttons">Share</Button>
                </td>
              </tr>
            </tbody>
          </Table>

          {/* modals */}
          <ViewModal
            show={showViewModal}
            onHide={() => setShowViewModal(false)}
          />
          <EditModal
            show={showEditModal}
            onHide={() => setShowEditModal(false)}
          />
          <RemoveModal
            show={showRemoveModal}
            onHide={() => setShowRemoveModal(false)}
          />
        </Row>
      </Col>
    </Row>
  );
}
