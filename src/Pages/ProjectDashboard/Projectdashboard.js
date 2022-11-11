import React, { useState } from "react";
import { Button, Col, Container, Image, Row, Tabs, Tab } from "react-bootstrap";
import imgs from "../../Assets/Images/SeriesImage.png";
import "./Projectdashboard.css";
import { TbEdit } from "react-icons/tb";
import { TiArrowSortedUp } from "react-icons/ti";
import ProjectTable from "../../Component/Table/ProjectTable";

export default function ProjectDashboard() {
  const [colorChange, setcolorChange] = useState("first");
  return (
    <>
      <Container fluid id="aspd8">
        <Container>
          <Row>
            <Col xs={12} md={3}>
              <Image id="shoot4" src={imgs} alt="Image" />
            </Col>
            <Col xs={12} md={3} id="shoot2">
              <div>Production ID : #54356</div>
              <div>Production name : T Series</div>
            </Col>
            <Col md={3}></Col>
            <Col md={3} xs={0}>
              <Row xs={12}>
                <Col>
                  <Button id="shoot3">Contact </Button>
                </Col>
                <Col>
                  <Button id="shoot3">Post a Job</Button>
                </Col>
              </Row>
            </Col>
          </Row>
          {/* tabs div */}
          <Row style={{ marginTop: "2rem", paddingBottom: "2rem" }}>
            <Col xs={6} md={3} id="aspd10">
              <Button
                id="aspd11"
                onClick={() => setcolorChange("first")}
                style={
                  colorChange === "first"
                    ? { background: "#f112A5" }
                    : { background: "#1931BB" }
                }
              >
                Project Dashboard <TiArrowSortedUp id="aspd9" />
              </Button>
            </Col>
            <Col xs={6} md={3} id="aspd10">
              <Button
                id="aspd11"
                onClick={() => setcolorChange("second")}
                style={
                  colorChange === "second"
                    ? { background: "#f112A5" }
                    : { background: "#1931BB" }
                }
              >
                Team Sourcing <TiArrowSortedUp id="aspd9" />
              </Button>
            </Col>
            <Col xs={6} md={3} id="aspd10">
              <Button
                id="aspd11"
                onClick={() => setcolorChange("third")}
                style={
                  colorChange === "third"
                    ? { background: "#f112A5" }
                    : { background: "#1931BB" }
                }
              >
                Shooting Setup <TiArrowSortedUp id="aspd9" />
              </Button>
            </Col>
            <Col xs={6} md={3} id="aspd10">
              <Button
                id="aspd11"
                onClick={() => setcolorChange("fouth")}
                style={
                  colorChange === "fouth"
                    ? { background: "#f112A5" }
                    : { background: "#1931BB" }
                }
              >
                Caleder
                <TiArrowSortedUp id="aspd9" />
              </Button>
            </Col>
          </Row>
        </Container>
        <Container>{colorChange === "first" ? <ProjectTable /> : ""}</Container>
      </Container>
    </>
  );
}
