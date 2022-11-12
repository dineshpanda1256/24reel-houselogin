import React, { useState } from 'react'
import { Col, Container, Row, Table } from 'react-bootstrap';
import "./CommunicationPost.css";
import {BsPlusSquareFill} from 'react-icons/bs';
import image1 from "../../Assets/Images/img1.png";
import CommunicationPostModal from '../../Components/CommunicationPostModal/CommunicationPostModal';

export default function CommunicationPost() {
    const [communication, setCommunication] = useState(false);
  return (
    <div>
            <Container fluid id="communication1">
                <Container id="communication2">
                    <Row>
                        <Col id="communication5">
                        <div>Rudra Narayan Dash</div>
                        <div>7.18PM, Sunday May 2022</div>
                        </Col>
                        <Col id="communication3" onClick={() => setCommunication(true)} md={1} ><BsPlusSquareFill/></Col>
                        <CommunicationPostModal show={communication}
      onHide={() => setCommunication(false)}/>
                    </Row>
                    <Row id="communication4">
                        <Col md={4}>
                            <Row>
                                <Col><img id="communication6" src={image1}/></Col>
                                <Col><img id="communication6" src={image1}/></Col>
                            </Row>
                            <Row>
                                <Col><img id="communication6" src={image1}/></Col>
                                <Col><img id="communication6" src={image1}/></Col>
                            </Row>
                        </Col>
                        <Col >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Col>

                    </Row>
                </Container>
            </Container>

    </div>
  )
}
