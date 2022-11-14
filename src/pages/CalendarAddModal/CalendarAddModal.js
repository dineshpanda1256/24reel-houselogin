import React from "react";
import { Modal, Row, Col, Button, Form } from "react-bootstrap";
import "./CalendarAddModal.css";
import { IoCloseSharp } from "react-icons/io5";

export default function CalendarAddModal() {
  const [showCalendarAddModal, setShowCalendarAddModal] = React.useState(false);

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header id="calendarAddModalHeader">
          <IoCloseSharp id="closeIcon" onClick={props.onHide} />
        </Modal.Header>
        <Modal.Body id="calendarAddModalBody">
          <Form>
            {/* add task */}
            <Form.Group className=" mt-2 mb-3">
              <Form.Label id="allLabelsTxtCalendarAddModal">
                Add Task
              </Form.Label>
              <Form.Control
                type="text"
                id="allInputFieldsTxtCalendarAddModal"
              />
            </Form.Group>
            {/* choose date */}
            <Form.Group>
              <Form.Label id="sfm6">Choose date</Form.Label>
              <Form.Control
                type="date"
                placeholder="DD/MM/YYYY"
                id="chooseDate"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer id="calendarAddModalFooter">
          <Button
            onClick={props.onHide}
            style={{ width: "100%", backgroundColor: "#1931BB" }}
          >
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }

  return (
    <>
      <Button variant="primary" onClick={() => setShowCalendarAddModal(true)}>
        CalendarAddModal
      </Button>

      <MyVerticallyCenteredModal
        show={showCalendarAddModal}
        onHide={() => setShowCalendarAddModal(false)}
      />
    </>
  );
}
