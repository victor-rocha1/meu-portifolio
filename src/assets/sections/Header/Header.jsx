import React, { useState } from 'react';
import './header.css';
import logo from '/public/images/logo.png';
import Button from '../../components/Button/Button/Button.jsx';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);

    if (isMenuOpen) {
      setTimeout(() => {
        setIsMenuOpen(false);
      }, 500);
    }
  };

  return (
    <header>
      <div className="interface">
        <div className="logo">
          <a href="/">
            <img id="logotipo" src={logo} alt="Logo" />
          </a>
        </div>

        <nav className="menu-desktop">
          <ul>
            <li><a href="#">Início</a></li>
            <li><a href="#">Especialidades</a></li>
            <li><a href="#">Projetos</a></li>
          </ul>
        </nav>

        <Button>Contato</Button>

        <div className="btn-open-menu" onClick={toggleMenu}>
          <i className="bi bi-list"></i>
        </div>

        {isMenuOpen && (
          <div className="menu-mobile open">
            <div className="btn-close" onClick={toggleMenu}>
              <i className="bi bi-x-lg"></i>
            </div>

            <nav>
              <ul>
                <li><a href="#">Início</a></li>
                <li><a href="#">Especialidades</a></li>
                <li><a href="#">Projetos</a></li>
                <li><a href="#">Contato</a></li>
              </ul>
            </nav>
          </div>
        )}

        {isMenuOpen && <div className="overlay-menu open" onClick={toggleMenu}></div>}
      </div>
    </header>
  );
}

export default Header;