//Child of => App.jsx

import React from "react";
import Card from "../components/Card";
import MainImage from "../components/MainImage";

const Home = (props) => {
  //get bookData from App
  const { bookData } = props;
  return (
    <div className="home">
      <MainImage />
      <div className="container">
        <div className="row">
          {/* map out book data */}
          {bookData.map((items, index) => (
            <div className="col-sm-2 col-md-3 py-1 " key={index}>
              <Card items={items}></Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
