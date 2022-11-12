import React from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import DashboardTable from "../../Components/DashboardTable/DashboardTable";
import "./Post.css";
import { BsPlusLg } from "react-icons/bs";
import PostJobModal from "../../Components/PostJobModal/PostJobModal";

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
                <tr id="post_table6">
                  <th id="post_table6">Date</th>
                  <th id="post_table6">Job title</th>
                  <th id="post_table6">Experience</th>
                  <th id="post_table6">CTC</th>
                  <th id="post_table6">location</th>
                  <th id="post_table6">Skills</th>
                  <th id="post_table6">Responses</th>
                </tr>
              </thead>
              <tbody>
                <tr id="post_table6">
                  <td id="post_table6"></td>
                  <td id="post_table6">production manager</td>
                  <td id="post_table6">5years</td>
                  <td id="post_table6">2.5l-3l</td>
                  <td id="post_table6">Mumbai</td>
                  <td id="post_table6">Dancing, Acting</td>
                  <td id="post_table6">
                    <div>
                      <Button>5 response</Button>
                    </div>
                  </td>
                </tr>
                <tr id="post_table6">
                  <td id="post_table6"></td>
                  <td id="post_table6">production manager</td>
                  <td id="post_table6">5years</td>
                  <td id="post_table6">2.5l-3l</td>
                  <td id="post_table6">Mumbai</td>
                  <td id="post_table6">Dancing, Acting</td>
                  <td id="post_table6">
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
