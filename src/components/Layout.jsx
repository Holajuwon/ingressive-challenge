import React from "react";
import NavBar from "./NavBar";

const Layout = (props) => {
  return (
    <div className="bg-gray-200">
      <NavBar />
      {props.children}
    </div>
  );
};

export default Layout;
