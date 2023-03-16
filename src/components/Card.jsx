//Child of => pages/Home.jsx

import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

//import react bootstrap modal
import MyVerticallyCenteredModal from "./CenteredModal";

const BasicCard = (props) => {
  //get map items from Home
  const { items } = props;

  // close and show modal
  const [modalShow, setModalShow] = useState(false);

  //put api data informations into variables
  const img = items.volumeInfo?.imageLinks?.smallThumbnail;
  const title = items.volumeInfo.title;
  const author = items.volumeInfo.authors;
  const publisheddate = items.volumeInfo.publishedDate;
  const description = items.volumeInfo.description;

  //some book do not have image

  return (
    <Card style={{ width: "18rem" }} className="card">
      <Card.Img variant="top" src={img ? img : " "} className="img" />
      <Card.Body className="body">
        <Card.Title className="title">{title}</Card.Title>
        <div className="button">
          {/* on click show modal */}
          <Button
            variant="primary"
            className="left"
            onClick={() => setModalShow(true)}
          >
            More Info
          </Button>
          {/* passing data to child */}
          <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            title={title}
            img={img}
            author={author}
            publisheddate={publisheddate}
            description={description}
          />

          <Button variant="warning" className="right">
            Add to Cart
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default BasicCard;
