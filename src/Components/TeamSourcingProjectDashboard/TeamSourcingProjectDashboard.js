import React from "react";
import { Button, Col, Row, Table, Modal } from "react-bootstrap";
import "./TeamSourcingProjectDashboard.css";
import { BsCircleFill } from "react-icons/bs";

export default function TeamSourcingProjectDashboard() {
  return (
    <Row style={{ padding: "1.5rem" }}>
      <Col>
        {/* 1st table pending request */}
        <Row id="whiteDivTeamSourcing">
          <Col id="pendingRequest">Pending Request</Col>
          <Row style={{ overflow: "auto"}}>
            <Table striped>
              {/* <thead>
              <tr>
                <th>#</th>
              </tr>
            </thead> */}
              <tbody>
                <tr>
                  <td>
                    <BsCircleFill id="circleIcon" />
                  </td>
                  <td>Rudra Narayan Dash</td>
                  <td>Actor</td>
                  <td>TF ID: #5456456</td>
                  <td>1 yr</td>
                  <td>Referred by</td>
                  <td style={{ display: "flex", justifyContent: "flex-end" }}>
                    <Button id="buttons">Details</Button>
                    <Button id="buttons">Hire</Button>
                    <Button id="buttons">Reject</Button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <BsCircleFill id="circleIcon" />
                  </td>
                  <td>Rudra Narayan Dash</td>
                  <td>Actor</td>
                  <td>TF ID: #5456456</td>
                  <td>1 yr</td>
                  <td>Referred by</td>
                  <td style={{ display: "flex", justifyContent: "flex-end" }}>
                    <Button id="buttons">Details</Button>
                    <Button id="buttons">Hire</Button>
                    <Button id="buttons">Reject</Button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <BsCircleFill id="circleIcon" />
                  </td>
                  <td>Rudra Narayan Dash</td>
                  <td>Actor</td>
                  <td>TF ID: #5456456</td>
                  <td>1 yr</td>
                  <td>Referred by</td>
                  <td style={{ display: "flex", justifyContent: "flex-end" }}>
                    <Button id="buttons">Details</Button>
                    <Button id="buttons">Hire</Button>
                    <Button id="buttons">Reject</Button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <BsCircleFill id="circleIcon" />
                  </td>
                  <td>Rudra Narayan Dash</td>
                  <td>Actor</td>
                  <td>TF ID: #5456456</td>
                  <td>1 yr</td>
                  <td>Referred by</td>
                  <td style={{ display: "flex", justifyContent: "flex-end" }}>
                    <Button id="buttons">Details</Button>
                    <Button id="buttons">Hire</Button>
                    <Button id="buttons">Reject</Button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Row>
        </Row>

        {/* 2nd table shortlisted aspirants */}
        <Row id="whiteDivTeamSourcing">
          <Col id="pendingRequest">Shortlisted Aspirants</Col>
          <Row style={{ overflow: "auto" }}>
            <Table striped>
              {/* <thead>
              <tr>
                <th>#</th>
              </tr>
            </thead> */}
              <tbody>
                <tr>
                  <td>
                    <BsCircleFill id="circleIcon" />
                  </td>
                  <td>Rudra Narayan Dash</td>
                  <td>Actor</td>
                  <td>TF ID: #5456456</td>
                  <td>1 yr</td>
                  <td>Referred by</td>
                  <td style={{ display: "flex", justifyContent: "flex-end" }}>
                    <Button id="buttons">Details</Button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <BsCircleFill id="circleIcon" />
                  </td>
                  <td>Rudra Narayan Dash</td>
                  <td>Actor</td>
                  <td>TF ID: #5456456</td>
                  <td>1 yr</td>
                  <td>Referred by</td>
                  <td style={{ display: "flex", justifyContent: "flex-end" }}>
                    <Button id="buttons">Details</Button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Row>
        </Row>

        {/* 3rd table rejected */}
        <Row id="whiteDivTeamSourcing">
          <Col id="pendingRequest">Rejected Aspirants</Col>
          <Row style={{ overflow: "auto" }}>
            <Table striped>
              {/* <thead>
              <tr>
                <th>#</th>
              </tr>
            </thead> */}
              <tbody>
                <tr>
                  <td>
                    <BsCircleFill id="circleIcon" />
                  </td>
                  <td>Rudra Narayan Dash</td>
                  <td>Actor</td>
                  <td>TF ID: #5456456</td>
                  <td>1 yr</td>
                  <td>Referred by</td>
                  <td style={{ display: "flex", justifyContent: "flex-end" }}>
                    <Button id="buttons">Details</Button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <BsCircleFill id="circleIcon" />
                  </td>
                  <td>Rudra Narayan Dash</td>
                  <td>Actor</td>
                  <td>TF ID: #5456456</td>
                  <td>1 yr</td>
                  <td>Referred by</td>
                  <td style={{ display: "flex", justifyContent: "flex-end" }}>
                    <Button id="buttons">Details</Button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Row>
        </Row>

        {/* 4th table Shared aspirants */}
        <Row id="whiteDivTeamSourcing">
          <Col id="pendingRequest">Shared Aspirants</Col>
          <Row style={{ overflow: "auto" }}>
            <Table striped>
              {/* <thead>
              <tr>
                <th>#</th>
              </tr>
            </thead> */}
              <tbody>
                <tr>
                  <td>
                    <BsCircleFill id="circleIcon" />
                  </td>
                  <td>Rudra Narayan Dash</td>
                  <td>Actor</td>
                  <td>TF ID: #5456456</td>
                  <td>1 yr</td>
                  <td>Referred by</td>
                  <td style={{ display: "flex", justifyContent: "flex-end" }}>
                    <Button id="buttons">Details</Button>
                    <Button id="buttons">Hire</Button>
                    <Button id="buttons">Reject</Button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <BsCircleFill id="circleIcon" />
                  </td>
                  <td>Rudra Narayan Dash</td>
                  <td>Actor</td>
                  <td>TF ID: #5456456</td>
                  <td>1 yr</td>
                  <td>Referred by</td>
                  <td style={{ display: "flex", justifyContent: "flex-end" }}>
                    <Button id="buttons">Details</Button>
                    <Button id="buttons">Hire</Button>
                    <Button id="buttons">Reject</Button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Row>
        </Row>
      </Col>
    </Row>
  );
}
