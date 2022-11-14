import React, { useState } from "react";
import { Button, Col, Row, Table, Modal } from "react-bootstrap";
import { BsPlusSquareFill } from "react-icons/bs";
import EditModal from "../EditModal/EditModal";
import RemoveModal from "../RemoveModal/RemoveModal";
import ViewModal from "../ViewModal/ViewModal";
import "./MyDataCastingDashboard.css";

export default function MyDataCastingDashboard() {
  const [showViewModal, setShowViewModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showRemoveModal, setShowRemoveModal] = useState(false);

  return (
    <Row id="whiteDivCastingDashboard">
      <Col>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <BsPlusSquareFill id="addIcon" />
        </div>
        <Row style={{ overflow: "auto" }}>
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
