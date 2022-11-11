import React from "react";
import { Button, Container, Row, Table, Col } from "react-bootstrap";
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
              <div id="post_table6">
                <BsPlusSquareFill id="datable4" />
              </div>
            </Col>
            <Col md={1}></Col>
          </Row>
        </Container>

        <Container id="response2">
          <Container id="post_table2">
            <Table style={{ marginTop: "2rem", border: "0px" }}>
              <thead id="post_table1">
                <tr>
                  <th>Name</th>
                  <th>Contact number</th>
                  <th>Experience</th>
                  <th>Age</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>production manager</td>
                  <td>+91 323423 34234</td>
                  <td>3years</td>
                  <td>33</td>
                </tr>
                <tr>
                  <td>production manager</td>
                  <td>+91 323423 34234</td>
                  <td>3years</td>
                  <td>33</td>
                </tr>
                <tr>
                  <td>production manager</td>
                  <td>+91 323423 34234</td>
                  <td>3years</td>
                  <td>33</td>
                </tr>
                <tr>
                  <td>production manager</td>
                  <td>+91 323423 34234</td>
                  <td>3years</td>
                  <td>33</td>
                </tr>
                <tr>
                  <td>production manager</td>
                  <td>+91 323423 34234</td>
                  <td>3years</td>
                  <td>33</td>
                </tr>
                <tr>
                  <td>production manager</td>
                  <td>+91 323423 34234</td>
                  <td>3years</td>
                  <td>33</td>
                </tr>
                <tr>
                  <td>production manager</td>
                  <td>+91 323423 34234</td>
                  <td>3years</td>
                  <td>33</td>
                </tr>
              </tbody>
            </Table>
          </Container>
        </Container>
      </Container>
    </div>
  );
}
