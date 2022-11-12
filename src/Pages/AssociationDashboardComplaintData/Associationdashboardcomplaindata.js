import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import img1 from "../../Assets/Images/SeriesImage1.png";
import { TbEdit } from "react-icons/tb";
import { TiArrowSortedUp } from "react-icons/ti";
import "./Associationdashboardcomplaindata.css";
import Complaintdata from "../../Component/Complaintdata/Complaintdata";
function Associationdashboardcomplaindata() {
  const [onChangecolor, setonChangecolor] = React.useState("first");
  return (
    <>
      <Container fluid id="aspd8">
        <Container>
          <Row id="aspd1">
            <Col md={3} xs={3} id="aspd2">
              <div id="aspd3">
                <TbEdit />
              </div>
              <Image src={img1} alt="profile pic" id="aspd4" />
            </Col>
            <Col md={9} xs={9} id="aspd5">
              <div id="aspd6">Association name : yashrajfilms</div>
            </Col>
            <Col></Col>
            <Col></Col>
          </Row>
          <Row style={{ marginTop: "2rem", paddingBottom: "2rem" }}>
            <Col xs={6} md={3} id="aspd10">
              <Button
                id="aspd11"
                onClick={() => setonChangecolor("first")}
                style={
                  onChangecolor === "first"
                    ? { background: "#f112A5" }
                    : { background: "#1931BB" }
                }
              >
                Member list <TiArrowSortedUp id="aspd9" />
              </Button>
            </Col>
            <Col xs={6} md={3} id="aspd10">
              <Button
                id="aspd11"
                onClick={() => setonChangecolor("second")}
                style={
                  onChangecolor === "second"
                    ? { background: "#f112A5" }
                    : { background: "#1931BB" }
                }
              >
                Complaints Data
                <TiArrowSortedUp id="aspd9" />
              </Button>
            </Col>
            <Col xs={6} md={3} id="aspd10">
              <Button
                id="aspd11"
                onClick={() => setonChangecolor("third")}
                style={
                  onChangecolor === "third"
                    ? { background: "#f112A5" }
                    : { background: "#1931BB" }
                }
              >
                Communication Post
                <TiArrowSortedUp id="aspd9" />
              </Button>
            </Col>
          </Row>
        </Container>
        <Container>
          {onChangecolor == "second" ? <Complaintdata /> : ""}
        </Container>
      </Container>
    </>
  );
}

export default Associationdashboardcomplaindata;
