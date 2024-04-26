import React from "react";
import "./button.css";

function Button({ children, className }) {
  return (
    <div className={`btn-contato ${className}`}>
      <a href="#">
        <button>{children}</button>
      </a>
    </div>
  );
}

export default Button;