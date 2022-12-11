import "./landing.css";
import { Link } from "react-router-dom";

const Landing_page = () => {
  return (
    <>
      <div id="card">
        <div className="container1">
          <img
            src="https://i0.wp.com/techbeasts.com/wp-content/uploads/2016/01/nature-wallpapers-hd.jpg"
            alt="Banner-img"
          ></img>
          <div className="container2">
            <h2>
              PHOTO SHARING <br /> APP
            </h2>
            <Link to="/postview">
              <button id="landbutton">Enter</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default Landing_page;
