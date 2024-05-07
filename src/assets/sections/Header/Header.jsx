import "./header.css";
import '../../../../src/index.css';
import Button from '../../components/Button/Button/Button.jsx';
function Header() {
    return(    
      <header>
        <div className="interface">
            <div className="logo">
                <a href="">
                    <img id="logotipo" src="./public/images/logo.png" alt="Logo Victor Rocha" />
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