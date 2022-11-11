import React from "react";
import { Button, Col, Row, Table } from "react-bootstrap";
import "./JobPortalCastingDashboard.css";

export default function JobPortalCastingDashboard() {
  return (
    <Row style={{overflowX: 'scroll'}}>
      <Col>
        <Table striped>
          <thead>
            <tr>
              <th>#</th>
              <th>Profile</th>
              <th>TF ID</th>
              <th>Age </th>
              <th>Exp</th>
              <th>Status</th>
              <th> </th>
              <th> </th>
              <th> </th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Rudra Narayan Dash</td>
              <td>#5456456</td>
              <td>22</td>
              <td>1 yr</td>
              <td style={{color: 'green'}}>Selected</td>
              <td style={{display: 'flex', justifyContent: 'flex-end'}}>
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
              <td>22</td>
              <td>1 yr</td>
              <td style={{color: 'red'}}>Rejected</td>
              <td style={{display: 'flex', justifyContent: 'flex-end'}}>
                <Button id="buttons">View</Button>
                <Button id="buttons">Edit</Button>
                <Button id="removeBtn">Remove</Button>
                <Button id="buttons">Share</Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </Col>
    </Row>
  );
}
