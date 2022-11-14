import React, { useState } from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import "./CastingDashboard.css";
import CompanyLogo from "../../Assets/Images/Rectangle39.png";
import { BiCaretRight } from "react-icons/bi";
import { AiTwotoneEdit } from "react-icons/ai";
import MyDataCastingDashboard from "../../Components/MyDataCastingDashboard/MyDataCastingDashboard";
import JobPortalCastingDashboard from "../../Components/JobPortalCastingDashboard/JobPortalCastingDashboard";

export default function CastingDashboard() {
  const [clicked, setClicked] = useState("first");

  return (
    <Container fluid id="mainContainer">
      <Container>
        {/* company logo with name */}
        <Row id="row1CastingDashboard">
          <Col md={1} xs={4} id="companyLogoDiv">
            <div>
              <AiTwotoneEdit id="editIconOnLogoImg" />
              <Image src={CompanyLogo} alt="Company Logo" id="companyLogoImg" />
            </div>
          </Col>
          <Col md={4} xs={8} id="modelingAndCastingTxtDiv">
            Modeling & Casting Agency : yashraj Modeling
          </Col>
        </Row>

        <Container>
          <Row className="mt-5">
            <Col md={2} xs={6}>
              <Button
                onClick={() => setClicked("first")}
                id="myDataBtn"
                style={
                  clicked === "first"
                    ? { background: "#F112A5" }
                    : { background: "#1931BB" }
                }
              >
                My Data <BiCaretRight id="rightArrowIcon" />
              </Button>
            </Col>
            <Col md={2} xs={6}>
              <Button
                onClick={() => setClicked("second")}
                id="myDataBtn"
                style={
                  clicked === "second"
                    ? { background: "#F112A5" }
                    : { background: "#1931BB" }
                }
              >
                Job Portal <BiCaretRight id="rightArrowIcon" />
              </Button>
            </Col>
            <Col></Col>
          </Row>
        </Container>

        <Container>
          {clicked === "first" ? <MyDataCastingDashboard /> : " "}
          {clicked === "second" ? <JobPortalCastingDashboard /> : " "}
        </Container>

        {/* used react bootstrap tabs */}
        {/* <Container>
          <Row className="mt-5">
            <Col> */}
        {/* <Tabs
                defaultActiveKey="myData"
                id="uncontrolled-tab-example"
                className="mb-3 covid1"
              >
                <Tab
                  eventKey="myData"
                  title={
                    <span>
                      {" "}
                      My Data <BiCaretRight style={{ fontSize: "1.2rem" }} />
                    </span>
                  }
                >
                  <MyDataCastingDashboard />
                </Tab>
                <Tab
                  eventKey="jobPortal"
                  title={
                    <span>
                      {" "}
                      Job Portal <BiCaretRight style={{ fontSize: "1.2rem" }} />
                    </span>
                  }
                >
                  <ContactAddModal />
                </Tab>
              </Tabs> */}
        {/* </Col>
          </Row>
        </Container> */}
      </Container>
    </Container>
  );
}
