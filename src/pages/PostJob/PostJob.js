import React from 'react'
import PostJobModal from '../../components/PostJobModal/PostJobModal';
import Button from 'react-bootstrap/Button';

export default function PostJob() {
    const [modalShow, setModalShow] = React.useState(false);
  return (
    <div>
  <>
    <Button variant="primary" onClick={() => setModalShow(true)}>
      Launch vertically centered modal
    </Button>

    <PostJobModal
      show={modalShow}
      onHide={() => setModalShow(false)}
    />
  </>

    </div>
  )
}
