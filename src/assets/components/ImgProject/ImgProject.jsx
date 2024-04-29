import React from 'react';

const ImgProject = ({ img }) => {
  return (
    <div className="img-project" style={{ backgroundImage: `url(${img})` }}></div>
  );
};

export default ImgProject;