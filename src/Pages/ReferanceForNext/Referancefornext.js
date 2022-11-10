import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Referancefornext.css";
function Referancefornext() {
  return (
    <>
      <Container fluid>
        <Row id="ReferancefornextMainRow">
          <Col></Col>
          <Col md={4} xs={8} id="ReferancefornextMainCol">
            <Row>
              <Col>
                <Row className="ReferancefornextMainRowList">Continue as a</Row>
                <Row className="ReferancefornextList">Aspirant</Row>
                <Row className="ReferancefornextList">Production</Row>
                <Row className="ReferancefornextList">Association</Row>
                <Row className="ReferancefornextList">Vendor Platform</Row>
                <Row className="ReferancefornextList">Film School</Row>
                <Row className="ReferancefornextList">Casting Agency</Row>
              </Col>
            </Row>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
}

export default Referancefornext;
