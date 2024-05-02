import React from 'react';
import './icons.css';

function Icons({ icons = [], size = '2rem' }) {
    return (
        <div className="icon-social">
            {icons && Array.isArray(icons) && icons.map((icon, index) => (
                <a key={index} href="#"><i className={`bi bi-${icon}`} style={{ fontSize: size, color: 'var(--blue)' }}></i></a>
            ))}
        </div>
    );
}

export default Icons;
