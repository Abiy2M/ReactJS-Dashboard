import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Chart from "../../components/Chart/Chart";
import "./Single.scss";
import TableList from "../../components/Table/Table";

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="single_container">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="edit_button">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://images.pexels.com/photos/1751279/pexels-photo-1751279.jpeg?cs=srgb&dl=pexels-designecologist-1751279.jpg&fm=jpg"
                alt=""
                className="item_image"
              />
              <div className="details">
                <h1 className="item_title">Jane Doe</h1>
                <div className="detail_item">
                  <span className="item_key">Email: </span>
                  <span className="item_value">Janedoe@gmail.com</span>
                </div>
                <div className="detail_item">
                  <span className="item_key">Phone: </span>
                  <span className="item_value">+251 9696 96 96</span>
                </div>
                <div className="detail_item">
                  <span className="item_key">Address: </span>
                  <span className="item_value">Addis Ababa 4 kilo avenue</span>
                </div>
                <div className="detail_item">
                  <span className="item_key">Coutny: </span>
                  <span className="item_value">Ethiopia</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart title={'User Spending - Last 6 Months'}/>
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last Transactions</h1>
          <TableList/>
        </div>
      </div>
    </div>
  );
};

export default Single;
