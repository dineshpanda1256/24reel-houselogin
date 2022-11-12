import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import "./Detailspage.css";
import image2 from "../../Assets/Images/img2.png";

export default function DetailsPage() {
  return (
    <div>
      <Container fluid id="detailspage1">
        <Container>
          <Row id="detailspage5">
            <Col>
              <Image src={image2} />
            </Col>
            <Col style={{ paddingTop: "2rem" }}>
              <div>TF ID : #54356</div>
              <div>Age : 34</div>
              <div>Height : 5’4’’</div>
              <div>Complexon : Fair</div>
              <div>Language known : Odia, Hindi, English, Urdu, Bangla</div>
            </Col>
            <Col></Col>
          </Row>

          <Row>
            <Col md={3} id="detailspage7">
              Education
            </Col>
            <Col></Col>
          </Row>

          <Row id="detailspage4">
            <Col md={2}>My University :</Col>
            <Col>
              <div> Biju Patnaik Television & Film Institute</div>
              <div>2018-2021</div>
            </Col>
          </Row>
          <Row id="detailspage4">
            <Col md={2}>My College :</Col>
            <Col>
              <div> Biju Patnaik Television & Film Institute</div>
              <div>2018-2021</div>
            </Col>
          </Row>
          <Row id="detailspage4">
            <Col md={2}>My School :</Col>
            <Col>
              <div> Biju Patnaik Television & Film Institute</div>
              <div>2018-2021</div>
            </Col>
          </Row>

          <Row id="detailspage4">
            <Col md={3} id="detailspage8">
              Education
            </Col>
            <Col></Col>
          </Row>

          <Row>
            <Col>
              <div>Interested in : Acting, Singing, Dancing</div>
              <div> Experiences : 2+ years</div>
              <div id="detailspage6">Professional Summary : </div>
              <div>Skills : Acting</div>
              <div>Maximum Educations : Graduation</div>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}
