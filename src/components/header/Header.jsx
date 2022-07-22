import React from "react";
import "./style.css";

function Header({ children }) {
  return (
    <div className="header">
      <h1>My Todo List@React</h1>
      {children}
    </div>
  );
}

export default Header;
