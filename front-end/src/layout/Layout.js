import React from "react";
import Routes from "./Routes";

// defines the layout of the application

function Layout() {
  return (
    <div className="container-fluid">
      <div className="row h-100">
        <div className="col">
          <Routes />
        </div>
      </div>
    </div>
  );
}

export default Layout;
