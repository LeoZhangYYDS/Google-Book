import React from "react";
import Error from "../imgs/404.jpg";
import Button from "react-bootstrap/Button";
const pageNotFound = () => {
  return (
    <div className="errorPage">
      <img src={Error} alt="404" />
      <Button variant="primary" href="/">
        Back to Homa Page
      </Button>
    </div>
  );
};

export default pageNotFound;
