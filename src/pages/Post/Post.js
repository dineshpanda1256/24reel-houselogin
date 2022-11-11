import React from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import DashboardTable from "../../Components/DashboardTable/DashboardTable";
import "./Post.css";
import { BsPlusLg } from "react-icons/bs";
import PostJobModal from "../../Components/PostJobModal/PostJobModal";
import { BsPlusSquareFill } from "react-icons/bs";

export default function Post() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div>
      <Container fluid id="postscreen1">
        <Row>
          <Col></Col>
          <Col id="postscreen4" md={2}>
            <Button onClick={() => setModalShow(true)} id="postscreen2">
              Post Job <BsPlusLg />
            </Button>
          </Col>

          <PostJobModal show={modalShow} onHide={() => setModalShow(false)} />
        </Row>

        <Container id="postscreen3">
          <Container id="post_table2">
            <Table style={{ marginTop: "2rem", border: "0px" }}>
              <thead id="post_table1">
                <tr>
                  <th>Date</th>
                  <th>Job title</th>
                  <th>Experience</th>
                  <th>CTC</th>
                  <th>location</th>
                  <th>Skills</th>
                  <th>Responses</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                  <td>production manager</td>
                  <td>5years</td>
                  <td>2.5l-3l</td>
                  <td>Mumbai</td>
                  <td>Dancing, Acting</td>
                  <td>
                    <div>
                      <Button>5 response</Button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td>production manager</td>
                  <td>5years</td>
                  <td>2.5l-3l</td>
                  <td>Mumbai</td>
                  <td>Dancing, Acting</td>
                  <td>
                    <div>
                      <Button>5 response</Button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Container>
        </Container>
      </Container>
    </div>
  );
}
