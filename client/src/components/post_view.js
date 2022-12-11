import Dot from "../assets/dot instagram.jpg";
import Heart from "../assets/instagram heart.png";
import Share from "../assets/share.png";
import Logo from "../assets/insta_logo.png";
import Camera from "../assets/camera.png";
import { useEffect, useState } from "react";

import axios from "axios";
import "./post_view.css";

const PostView = () => {
  const [data, setpost] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3002/data")
      .then((imagedata) => {
        let data = imagedata.data.images.reverse();
        //console.log(data[0])
        setpost(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="containerback">
        <header>
          <div className="nav">
            <img src={Logo} alt="insta-logo" id="lable"></img>
            <a href="./form">
              <img id="camera1" src={Camera} alt="camera"></img>
            </a>
          </div>
        </header>
        <hr />
        <br />
        <br />
        <br />
        <div id="back">
          {data.map((user, i) => {
            return (
              <div className="body">
                <div className="card">
                  <div className="user-info" key={i}>
                    <h3>{user.author}</h3>
                    <span className="location">{user.location}</span>
                    <span>
                      <img
                        className="Dot"
                        src={Dot}
                        alt="dot"
                        width={20}
                        height={20}
                      ></img>
                    </span>
                  </div>
                  <div className="user-image">
                    <img
                      className="post"
                      src={user.image}
                      alt="user defined "
                    ></img>
                  </div>
                  <div className="cont1">
                    <div className="heart">
                      <span>
                        <img
                          src={Heart}
                          alt="heart"
                          width={40}
                          height={40}
                        ></img>
                      </span>
                      <span>
                        <img
                          src={Share}
                          alt="share"
                          width={40}
                          height={40}
                        ></img>
                      </span>
                      {/* <span className="grid" id="date" >{user.date}</span> */}
                    </div>
                    <div className="user-meta">
                      <span>{user.date}</span>
                    </div>
                  </div>
                  <div className="user-likes">{user.likes} likes</div>
                  <div className="user-description">{user.description}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default PostView;
