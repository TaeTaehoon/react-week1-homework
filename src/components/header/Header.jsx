import React from "react";
import "./style.css";

function Header({ children }) {
  return (
    <div className="header">
      <h1>오늘의 할 일@React</h1>
      {children}
    </div>
  );
}

export default Header;
