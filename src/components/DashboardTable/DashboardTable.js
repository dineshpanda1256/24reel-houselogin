import React from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import "./DashboardTable.css";
import { BsPlusSquareFill } from "react-icons/bs";
import AddMemberModal from "../AddMemberModal/AddMemberModal";

export default function DashboardTable() {
  const [modal2, setModal2] = React.useState(false);
  return (
    <div>

    
    <Container id="dtable6">
      <Container >
      <Row>
          <Col></Col>
          <Col id="dtable5" md={1}>
            <div id="dtable3" onClick={() => setModal2(true)}>
              <BsPlusSquareFill id="datable4" />
            </div>
            <AddMemberModal show={modal2}
      onHide={() => setModal2(false)}/>
          </Col>
        </Row>
      </Container>
     
      <Container id="dtable2">

        <Table striped style={{ marginTop: "2rem", border: "0px" }}>
          <thead id="dtable1">
            <tr id="dtable7">
              <th id="dtable7">Name</th>
              <th id="dtable7">Age</th>
              <th id="dtable7">Contact numer</th>
              <th id="dtable7">Position</th>
              <th id="dtable7">Address</th>
            </tr>
          </thead>
          <tbody>
            <tr id="dtable7">
              <td id="dtable7">Bhavani Khuntia</td>
              <td id="dtable7">33</td>
              <td id="dtable7">+91 443534564</td>
              <td id="dtable7">Member</td>
              <td id="dtable7">Patia, Bhubaneswar</td>
            </tr>
            <tr id="dtable7">
              <td id="dtable7">Rudra Narayan Dash</td>
              <td id="dtable7">33</td>
              <td id="dtable7">+91 443534564</td>
              <td id="dtable7">Member</td>
              <td id="dtable7">Patia, Bhubaneswar</td>
            </tr>
            <tr id="dtable7">
              <td id="dtable7">Rudra Narayan Dash</td>
              <td id="dtable7">33</td>
              <td id="dtable7">+91 443534564</td>
              <td id="dtable7">Member</td>
              <td id="dtable7">Patia, Bhubaneswar</td>
            </tr>
            <tr id="dtable7">
              <td id="dtable7">Rudra Narayan Dash</td>
              <td id="dtable7">33</td>
              <td id="dtable7">+91 443534564</td>
              <td id="dtable7">Member</td>
              <td id="dtable7">Patia, Bhubaneswar</td>
            </tr><tr id="dtable7">
              <td id="dtable7">Rudra Narayan Dash</td>
              <td id="dtable7">33</td>
              <td id="dtable7">+91 443534564</td>
              <td id="dtable7">Member</td>
              <td id="dtable7">Patia, Bhubaneswar</td>
            </tr>
            
          
          </tbody>
        </Table>
      </Container>
      </Container>
    </div>
  );
}
