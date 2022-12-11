import Logo from "../assets/insta_logo.png";
import Camera from "../assets/camera.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Filebase64 from "react-file-base64";
import axios from "axios";
import "./form.css";

const Form_page = () => {
  const navigate = useNavigate();
  const [data, setdata] = useState({
    author: "",
    location: "",
    image: "",
    description: "",
  });

  const inputhandler = (id) => {
    setdata({ ...data, image: id });
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    axios({
      url: "http://localhost:3002/postdata",
      method: "POST",
      headers: {},
      data: data,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    console.log(data);
    setdata({ author: "", location: "", description: "", image: "" });
    navigate("/postview");
  };

  return (
    <>
      <header>
        <div className="nav">
          <img src={Logo} alt="insta-logo"></img>
          <a href="./postview">
            <img id="camera" src={Camera} alt="camera"></img>
          </a>
        </div>
      </header>
      <hr />
      <div id="fromback">
        <br />
        <br />
        <form onSubmit={handlesubmit} className="formcard">
          <div className="form-box">
            <h2>ADD POST</h2>
            <hr />

            <Filebase64
              type="image"
              multiple={false}
              onDone={({ base64 }) => inputhandler(base64)}
              id="file"
            />

            <div className="content-part" id="margin">
              <input
                type="text"
                placeholder="Author"
                onChange={(e) => {
                  setdata({ ...data, author: e.target.value });
                }}
              />
            </div>
            <div className="content-part">
              <input
                type="text"
                class="inline"
                placeholder="Location"
                onChange={(e) => {
                  setdata({ ...data, location: e.target.value });
                }}
              />
            </div>
            <div className="content-part">
              <input
                id="descrip"
                type="text"
                placeholder="Description"
                onChange={(e) => {
                  setdata({ ...data, description: e.target.value });
                }}
              />
            </div>
            <div className="content-part" id="b-body">
              <button type="submit" id="b2">
                {" "}
                Post
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
export default Form_page;
