import React from 'react';
import './imgproject.css';

const ImgProject = ({ img, text }) => {
  return (
    <div className="img-project" style={{ backgroundImage: `url(${img})`}}>
      <div className="overlay">
        {text}
      </div>
    </div>
  );
};

export default ImgProject;