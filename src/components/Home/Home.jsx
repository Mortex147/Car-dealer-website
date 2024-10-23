import React from "react";
import "./Home.css";
//imported images
import homeImage from '../../assets/homeImages.png';
const Home = () => {
  return (
    <div className="home">
      <div className="secContainer">
        <div className="homeText">
          <span className="homeSpan">Meet your new car</span>
          <h1 className="homeTitle">Bmw Serie 3</h1>
          <div className="btns flex">
            <button className="btn">More Details</button>
            <button className="btn primaryBtn">Test Drive</button>
          </div>
        </div>
        <div className="homeImage">
          <img src={homeImage} alt="BMW" />
        </div>
      </div>
    </div>
  );
};

export default Home;
