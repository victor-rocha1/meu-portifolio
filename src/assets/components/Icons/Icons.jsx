import React from 'react';
import './icons.css';

function Icons({ icons = [], size = '2rem', alignment = 'flex-end' }) {
    return (
        <div className="icon-social" style={{ justifyContent: alignment }}>
            {icons && Array.isArray(icons) && icons.map((icon, index) => (
                <a key={index} href="#">
                    <i
                        className={`bi bi-${icon}`}
                        style={{
                            fontSize: size,
                            color: 'var(--blue)'
                        }}
                    />
                </a>
            ))}
        </div>
    );
}

export default Icons;