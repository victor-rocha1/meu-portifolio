import React from 'react';
import "./title.css";

const Title = ({ text, spantext }) => {
  return(
    <h2 className='titleh'>{text} 
      <span className='titles'> {spantext}</span>
    </h2>
  )
};

export default Title;