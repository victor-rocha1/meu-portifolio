import React from 'react';
import './button.css';

function Button({ children }) {
  return (
    <div className="btn-contato">
      <a href="#">
        <button>{children}</button>
      </a>
    </div>
  );
}

export default Button;
