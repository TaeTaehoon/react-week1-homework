import React from "react";
import "./style.css";

function Layout({ children }) {
  return (
    <div className="wrapper">
      {children}
      안녕!
    </div>
  );
}

export default Layout;
