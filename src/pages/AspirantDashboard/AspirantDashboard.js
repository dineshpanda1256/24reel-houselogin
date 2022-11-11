import React, { useState } from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import tseries from "../../Assets/Images/img1.png";
import "./AspirantDashboard.css";
import { TbEdit } from "react-icons/tb";
import { TiArrowSortedUp } from "react-icons/ti";
import WhitePage from "../../Components/WhitePage/WhitePage";
import WhitePage2 from "../../Components/WhitePage/WhitePage2";
import WhitePage3 from "../../Components/WhitePage/WhitePage3";
import WhitePage4 from "../../Components/WhitePage/WhitePage4";
// import Educationinfo from '../../components/Educationinfo/Educationinfo';
// import tseries from "../../assests/Images/img1.png";

export default function AspirantDashboard() {
  const [toggle, setToggle] = useState('first');

  return (
    <>
      <Container fluid id="aspd8">
        <Container>
          <Row id="aspd1">
            <Col md={3} xs={3} id="aspd2">
              <div id="aspd3">
                <TbEdit />
              </div>
              <Image src={tseries} alt="profile pic" id="aspd4" />
            </Col>
            <Col md={9} xs={9} id="aspd5">
              <div id="aspd6">TF ID : #54356</div>
              <div id="aspd7">Name : Rudra N Dash</div>
              <div id="aspd7">Age : 34</div>
              <div id="aspd7">Height : 5’4"</div>
              <div id="aspd7">Complexon : Fair</div>
              <div id="aspd7">
                Language known : Odia, Hindi, English, Urdu, Bangla
              </div>
            </Col>
            <Col></Col>
            <Col></Col>
          </Row>
          <Row style={{ marginTop: "2rem", paddingBottom: "2rem" }}>
            <Col xs={6} md={3} id="aspd10">
              <Button id="aspd11" 
              onClick={()=>setToggle('first')}
              >
                Education <TiArrowSortedUp id="aspd9" />
              </Button>
            </Col>
            <Col xs={6} md={3} id="aspd10">
              <Button id="aspd11" 
              onClick={()=>setToggle('second')}
              >
                Experience <TiArrowSortedUp id="aspd9" />
              </Button>
            </Col>
            <Col xs={6} md={3} id="aspd10">
              <Button id="aspd11"
               onClick={()=>setToggle('third')}
               >
                Job <TiArrowSortedUp id="aspd9" />
              </Button>
            </Col>
            <Col xs={6} md={3} id="aspd10">
              <Button id="aspd11"
               onClick={()=>setToggle('fourth')}
              >
                Forum <TiArrowSortedUp id="aspd9" />
              </Button>
            </Col>
          </Row>
        </Container>
       <Container id="aspd12">          
              {toggle == 'first' ? <WhitePage/> : ' ' }
              {toggle === 'second' ? <WhitePage2/> : ' '}
              {toggle === 'third' ? <WhitePage3/> : ' '}
              {toggle === 'fourth' ? <WhitePage4/> : ' '}
            </Container>
      </Container>
    </>
  );
}
