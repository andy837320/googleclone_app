import React from "react";
// import { Link } from "react-router-dom";
import "./Header.css";
// import { BrowserRouter as Router, Routes, Redirect } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <a href="https://mail.google.com/mail/u/0/?ogbl#inbox">Gmail</a>
      <a href="https://www.bing.com/images/search?view=detailV2&ccid=ue2LCLza&id=C721B7B72A8F36BEECBCA720FDA7C6D5FC47324D&thid=OIP.ue2LCLzavQyuhZf3AkWNLAHaEo&mediaurl=https%3a%2f%2fwww.amazingonly.com%2fwp-content%2fuploads%2f2013%2f04%2fimages4-1728x1080.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.b9ed8b08bcdabd0cae8597f702458d2c%3frik%3dTTJH%252fNXGp%252f0gpw%26pid%3dImgRaw%26r%3d0&exph=1080&expw=1728&q=images&simid=608042677949854998&FORM=IRPRST&ck=8D391B171CD4821E1CC9C9F69F93A605&selectedIndex=0&idpp=overlayview&ajaxhist=0&ajaxserp=0">
        Images
      </a>
      <div id="square"></div>
      <div id="profilepiccontainer"></div>
    </div>
  );
}

export default Header;
