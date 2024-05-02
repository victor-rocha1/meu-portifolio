import React from 'react';
import './icons.css';

function Icons({ size = '2rem' }) {
    return(
        <div className="icon-social">
            <a href="#"><i className="bi bi-instagram" style={{ fontSize: size, color: 'var(--blue)' }}></i></a>
            <a href="#"><i className="bi bi-github" style={{ fontSize: size, color: 'var(--blue)' }}></i></a>
            <a href="#"><i className="bi bi-linkedin" style={{ fontSize: size, color: 'var(--blue)' }}></i></a>
        </div>
    );
}

export default Icons;

