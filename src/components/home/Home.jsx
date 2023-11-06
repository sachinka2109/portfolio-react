import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <>
      <main id="home-container">
        <div className="home-left">
          <div className="home-title">Hii,I'm Sachin Kaythamwar</div>
          <div className="home-description">I am a Web developer</div>
        </div>
        <div className="home-right">
          <div className="home-image">
            <i class="fa-solid fa-user"></i>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
