import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./New.scss";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";

const New = ({ inputs, title }) => {
  const [file, setFile] = useState("");
  return (
    <div className="new">
      <Sidebar />
      <div className="new_container">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://img.favpng.com/23/3/2/computer-icons-silhouette-user-profile-png-favpng-NvqKckg9G8mZk9Qi1zqWnn4fA.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form action="">
              <div className="form_input">
                <label htmlFor="file">
                  Upload Profile Picture:{" "}
                  <DriveFolderUploadIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>

              {inputs.map((input) => (
                <div className="form_input" key={input.id}>
                  <label htmlFor="">{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} />
                </div>
              ))}
              <button>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
