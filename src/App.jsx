import About from './assets/sections/About/About.jsx';
import Form from './assets/sections/Form/Form.jsx';
import Header from './assets/sections/Header/Header.jsx'
import Projects from './assets/sections/Projects/Projects.jsx';
import Specialties from './assets/sections/Specialties/Specialties.jsx'
import Top from './assets/sections/Top/Top.jsx'
import './variables.css';

function App() {
  return(
    <>
     <Header />
     <Top />
     <Specialties />
     <About />
     <Projects />
     <Form />
    </>
  )

}

export default App
