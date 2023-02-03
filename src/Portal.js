import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./components/Navbar/Footer";
import Topbar from "./components/Navbar/Topbar";

function Portal() {
  return (
    <div id="wrapper">
      <div className="d-flex flex-column" id="content-wrapper">
        <div id="content">
          <Topbar />
          <div className="container-fluid ">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Portal;
