import React from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import "./DashboardTable.css";
import { BsPlusSquareFill } from "react-icons/bs";

export default function DashboardTable() {
  return (
    <div>

      <Container>
      <Row>
          <Col></Col>
          <Col id="dtable5" md={1}>
            <div id="dtable3">
              <BsPlusSquareFill id="datable4" />
            </div>
          </Col>
        </Row>
      </Container>
     
      <Container id="dtable2">

        <Table style={{ marginTop: "2rem", border: "0px" }}>
          <thead id="dtable1">
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Contact numer</th>
              <th>Position</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Bhavani Khuntia</td>
              <td>33</td>
              <td>+91 443534564</td>
              <td>Member</td>
              <td>Patia, Bhubaneswar</td>
            </tr>
            <tr>
              <td>Rudra Narayan Dash</td>
              <td>33</td>
              <td>+91 443534564</td>
              <td>Member</td>
              <td>Patia, Bhubaneswar</td>
            </tr>
            <tr>
              <td>Rudra Narayan Dash</td>
              <td>33</td>
              <td>+91 443534564</td>
              <td>Member</td>
              <td>Patia, Bhubaneswar</td>
            </tr>
            <tr>
              <td>Rudra Narayan Dash</td>
              <td>33</td>
              <td>+91 443534564</td>
              <td>Member</td>
              <td>Patia, Bhubaneswar</td>
            </tr>
            <tr>
              <td>Rudra Narayan Dash</td>
              <td>33</td>
              <td>+91 443534564</td>
              <td>Member</td>
              <td>Patia, Bhubaneswar</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </div>
  );
}
