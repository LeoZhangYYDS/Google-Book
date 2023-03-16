//Child of => components/Card.jsx

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

//react bootstrap modal
function MyVerticallyCenteredModal(props) {
  const { title, img, author, publisheddate, description } = props;
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="box">
          <img src={img} alt="img" />
          <h5>Author : {author}</h5>
          <h5>Publish Date : {publisheddate}</h5>
        </div>
        <p>Description : {description}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default MyVerticallyCenteredModal;
