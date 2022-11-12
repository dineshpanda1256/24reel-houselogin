import React from "react";
import { Col, Row, Table, Modal, Button } from "react-bootstrap";
import "./Complaintdata.css";
function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </Modal.Body>
    </Modal>
  );
}

function Complaintdata() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <Row id="whiteDiv">
      <Col>
        <Table striped>
          <thead>
            <tr>
              <th>Name</th>
              <th>TFID</th>
              <th>Complain Details</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Rudra Narayan Dash</td>
              <td>34534534</td>
              <td>Lorem Ipsumt is simply dummy text of the printing and ...</td>
              <td>
                <div onClick={() => setModalShow(true)}>More</div>
              </td>
            </tr>
            <tr>
              <td>Rudra Narayan Dash</td>
              <td>34534534</td>
            </tr>
            <tr>
              <td>Rudra Narayan Dash</td>
              <td>34534534</td>
            </tr>
            <tr>
              <td>Rudra Narayan Dash</td>
              <td>34534534</td>
            </tr>
            <tr>
              <td>Rudra Narayan Dash</td>
              <td>34534534</td>
            </tr>
            <tr>
              <td>Rudra Narayan Dash</td>
              <td>34534534</td>
            </tr>
            <tr>
              <td>Rudra Narayan Dash</td>
              <td>34534534</td>
            </tr>
          </tbody>
          <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </Table>
      </Col>
    </Row>
  );
}

export default Complaintdata;
