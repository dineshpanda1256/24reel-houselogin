import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import "./ShootingSetup.css";
import tseries from "../../Assets/Images/img1.png";
import { TiArrowSortedUp } from "react-icons/ti";
import DashboardTable from "../../Components/DashboardTable/DashboardTable";


export default function ShootingSetup() {
  return (
    <div>
      <Container fluid id="shoot1">
        <Container>
          <Row >
            <Col xs={12} md={3}>
              <Image id="shoot4" src={tseries} alt="Image" />
            </Col>
            <Col xs={12} md={3} id="shoot2">
              <div>Production ID : #54356</div>
              <div>Production name : T Series</div>
            </Col>
            <Col md={3}>
              
            </Col>
            <Col md={3} xs={0}>
            <Row xs={12}>
              <Col><Button id="shoot3">Contact </Button></Col>
              <Col><Button id="shoot3">Post a Job</Button></Col>
             </Row>
             </Col>
            
          </Row>
          <Row>
          <Col xs={12} sm={6} md={3} lg={3} id="shoot7"><Button  id="shoot5">Communication Post<TiArrowSortedUp id="shoot6"/></Button></Col>
          <Col xs={12} sm={6} md={3} lg={3} id="shoot7"><Button  id="shoot5" >Team Sourcing <TiArrowSortedUp id="shoot6"/></Button></Col>
          <Col xs={12} sm={6} md={3} lg={3} id="shoot7"><Button  id="shoot8">Contact <TiArrowSortedUp id="shoot6"/></Button></Col>
          <Col xs={12} sm={6} md={3} lg={3} id="shoot7"><Button  id="shoot5">Contact <TiArrowSortedUp id="shoot6"/></Button></Col>
          </Row>
     
        </Container>

        <Container id="shoot9" >
        <DashboardTable/>
        </Container>
       
      </Container>
    </div>
  );
}
