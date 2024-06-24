import React, { useState } from 'react';
import './header.css';
import logo from '/public/images/logo.png';
import Button from '../../components/Button/Button/Button.jsx';

function Header() {
  // Estado para controlar se o menu está aberto ou fechado
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Função para alternar entre abrir e fechar o menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);

    // Se o menu estiver aberto, fecha após 500ms para dar tempo de animação
    if (isMenuOpen) {
      setTimeout(() => {
        setIsMenuOpen(false);
      }, 500);
    }
  };

  // Função para rolar suavemente até uma seção específica da página
  const scrollToSection = (sectionId) => {
    // Obtém a referência para a seção com base no ID fornecido
    const section = document.getElementById(sectionId);
    if (section) {
      // Rola suavemente até a seção, posicionando-a no topo da janela de visualização
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header>
      <div className="interface" id='start'>
        <div className="logo">
          <a href="/">
            <img id="logotipo" src={logo} alt="Logo" />
          </a>
        </div>

        {/* Menu para desktop */}
        <nav className="menu-desktop">
          <ul>
            <li><a href="#start" onClick={() => scrollToSection('start')}>Início</a></li>
            <li><a href="#specialities" onClick={() => scrollToSection('specialities')}>Especialidades</a></li>
            <li><a href="#projects" onClick={() => scrollToSection('projects')}>Projetos</a></li>
          </ul>
        </nav>

        {/* Botão de contato que leva diretamente até a seção de formulário */}
        <Button className='contato' onClick={() => scrollToSection('form')}>Contato</Button>

        {/* Botão para abrir o menu em dispositivos móveis */}
        <div className="btn-open-menu" onClick={toggleMenu}>
          <i className="bi bi-list"></i>
        </div>

        {/* Menu para dispositivos móveis */}
        {isMenuOpen && (
          <div className="menu-mobile open">
            <div className="btn-close" onClick={toggleMenu}>
              <i className="bi bi-x-lg"></i>
            </div>

            {/* Links do menu mobile */}
            <nav>
              <ul>
                <li><a href="#start" onClick={() => scrollToSection('home')}>Início</a></li>
                <li><a href="#specialities" onClick={() => scrollToSection('specialities')}>Especialidades</a></li>
                <li><a href="#projects" onClick={() => scrollToSection('projects')}>Projetos</a></li>
                <li id='contato'><a href="#form" onClick={() => scrollToSection('form')}>Contato</a></li>
              </ul>
            </nav>
          </div>
        )}

        {/* Overlay do menu para fechar em dispositivos móveis */}
        {isMenuOpen && <div className="overlay-menu open" onClick={toggleMenu}></div>}
      </div>
    </header>
  );
}

export default Header;
