import React from "react";
import { Col, Row, Table } from "react-bootstrap";
import "./ProjectTable.css";
function ProjectTable() {
  return (
    <Row id="whiteDiv">
      <Col>
        <Table striped>
          <thead>
            <tr>
              <th>Project Timeline</th>
              <th>Shedules</th>
              <th>Payment History</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Project one shooting started</td>
            </tr>
          </tbody>
        </Table>
      </Col>
    </Row>
  );
}

export default ProjectTable;
