import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <Sidebar/>
      <div className="home_container">
        home container
      </div>
    </div>
  );
};

export default Home;
