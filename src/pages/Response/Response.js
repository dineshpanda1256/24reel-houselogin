import React from "react";
import {Container, Row, Table, Col } from "react-bootstrap";
import "./Response.css";
import { BsPlusSquareFill } from "react-icons/bs";

export default function Response() {
  return (
    <div>
      <Container fluid id="response1">
        <Container fluid>
          <Row>
            <Col></Col>
            <Col md={1}>
              <div id="response_table6">
                <BsPlusSquareFill id="response_table4" />
              </div>
            </Col>
            <Col md={1}></Col>
          </Row>
        </Container>

        <Container id="response2">
          <Container id="response_table2">
            <Table style={{ marginTop: "2rem", border: "0px" }}>
              <thead id="response_table1">
                <tr id="response_table7">
                  <th id="response_table7">Name</th>
                  <th id="response_table7">Contact number</th>
                  <th id="response_table7">Experience</th>
                  <th id="response_table7">Age</th>
                </tr>
              </thead>
              <tbody> 
                <tr id="response_table7">
                  <td id="response_table7">production manager</td>
                  <td id="response_table7">+91 323423 34234</td>
                  <td id="response_table7">3years</td>
                  <td id="response_table7">33</td>
                </tr>
                <tr id="response_table7">
                  <td id="response_table7">production manager</td>
                  <td id="response_table7">+91 323423 34234</td>
                  <td id="response_table7">3years</td>
                  <td id="response_table7">33</td>
                </tr>
                <tr id="response_table7">
                  <td id="response_table7">production manager</td>
                  <td id="response_table7">+91 323423 34234</td>
                  <td id="response_table7">3years</td>
                  <td id="response_table7">33</td>
                </tr>
                <tr id="response_table7">
                  <td id="response_table7">production manager</td>
                  <td id="response_table7">+91 323423 34234</td>
                  <td id="response_table7">3years</td>
                  <td id="response_table7">33</td>
                </tr>
                <tr id="response_table7">
                  <td id="response_table7">production manager</td>
                  <td id="response_table7">+91 323423 34234</td>
                  <td id="response_table7">3years</td>
                  <td id="response_table7">33</td>
                </tr>
                <tr id="response_table7">
                  <td id="response_table7">production manager</td>
                  <td id="response_table7">+91 323423 34234</td>
                  <td id="response_table7">3years</td>
                  <td id="response_table7">33</td>
                </tr>
                <tr id="response_table7">
                  <td id="response_table7">production manager</td>
                  <td id="response_table7">+91 323423 34234</td>
                  <td id="response_table7">3years</td>
                  <td id="response_table7">33</td>
                </tr>
              </tbody>
            </Table>
          </Container>
        </Container>
      </Container>
    </div>
  );
}
