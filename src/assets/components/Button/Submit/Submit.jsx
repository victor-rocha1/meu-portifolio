import React from "react";
import "./submit.css";

function Submit({ text, className }) {
  return (
    <div className={`btn-submit ${className}`}>
      <button type="submit">{text}</button>
    </div>
  );
}

export default Submit;