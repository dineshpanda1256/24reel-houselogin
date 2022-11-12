import React from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
function Details() {
  return (
    <>
      <Container fluid>
        <Row id="ReferancefornextMainRow">
          <Container>
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
          </Container>
        </Row>
      </Container>
    </>
  );
}

export default Details;
