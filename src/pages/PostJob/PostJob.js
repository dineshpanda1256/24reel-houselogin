import React from 'react'
import PostJobModal from '../../Components/PostJobModal/PostJobModal';
import Button from 'react-bootstrap/Button';
import AddMemberModal from '../../Components/AddMemberModal/AddMemberModal';

export default function PostJob() {
    const [modalShow, setModalShow] = React.useState(false);
    const [modal1, setModal2] = React.useState(false);

  return (
    <div>
  <>
    <Button variant="primary" onClick={() => setModalShow(true)}>
      Post Job Modal
    </Button>
    <Button variant="primary" onClick={() => setModal2(true)}>
        Add Member Modal
    </Button>
    <AddMemberModal show={modal1}
      onHide={() => setModal2(false)}/>

    <PostJobModal
      show={modalShow}
      onHide={() => setModalShow(false)}
    />
  </>

    </div>
  )
}
