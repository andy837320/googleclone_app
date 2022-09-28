import React from "react";
import "./Mainbody.css";
import Logo from "../Images/mygoogleimage.png";
import { FaSearch } from "react-icons/fa";

const Mainbody = () => {
  return (
    <div className="body">
      <div className="bodywrapper">
        <img src={Logo} alt="logo" height="200" width="280" id="logo" />
        <div id="search">
          <FaSearch id="searchIcon" />
          <input type="text" />
        </div>

        <div className="btnContainer">
          <button>Google Search </button>
          <button> I'm Feeling Lucky</button>
        </div>
        <a href="/nothing"> Google Offered in: Portugues(Brasil)</a>
      </div>
    </div>
  );
};

export default Mainbody;
