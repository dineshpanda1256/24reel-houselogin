import React from 'react'
import "./CalendarAddModal.css";

export default function CalendarAddModal(props) {
  return (
    <div>
         <Modal  
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body id="addmember2">
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
         
          
          <Container fluid>
            <Row>
                {" "}
                <Button  onClick={props.onHide} id="addmember1"  type="submit">
                  Add
                </Button>
            </Row>
          </Container>
        </Modal.Body>

        {/* <Button onClick={props.onHide}>Close</Button> */}
      </Modal>
    </div>
  )
}
