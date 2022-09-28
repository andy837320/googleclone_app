import "./App.css";
import Footer from "./Layout/Footer";
import Header from "./Layout/Header";
import Mainbody from "./Layout/Mainbody";
// import { BrowseRouter as Router, Redirect, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />

      <Mainbody />
      <Footer />
    </div>
  );
}

export default App;
