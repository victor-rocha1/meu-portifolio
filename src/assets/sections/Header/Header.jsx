import "./header.css";
import '../../../../src/index.css';
import Button from '../../components/Button/Button/Button.jsx';
import logo from '/public/images/logo.png'


function Header() {
  return (
    <header>
      <div className="interface">
        <div className="logo">
          <a href="">
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
      </div>
    </header>
  )

}

export default Header