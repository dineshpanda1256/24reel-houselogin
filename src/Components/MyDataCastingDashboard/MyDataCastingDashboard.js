import React from "react";
import { Button, Col, Row, Table } from "react-bootstrap";
import { BsPlusSquareFill } from "react-icons/bs";
import "./MyDataCastingDashboard.css";

export default function MyDataCastingDashboard() {
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
                  <Button id="buttons">View</Button>
                  <Button id="buttons">Edit</Button>
                  <Button id="removeBtn">Remove</Button>
                  <Button id="buttons">Share</Button>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Rudra Narayan Dash</td>
                <td>#5456456</td>
                <td style={{ display: "flex", justifyContent: "flex-end" }}>
                  <Button id="buttons">View</Button>
                  <Button id="buttons">Edit</Button>
                  <Button id="removeBtn">Remove</Button>
                  <Button id="buttons">Share</Button>
                </td>
              </tr>
            </tbody>
          </Table>
        </Row>
      </Col>
    </Row>
  );
}
