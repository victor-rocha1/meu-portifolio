import About from './assets/sections/About/About.jsx';
import Footer from './assets/sections/Footer/Footer.jsx';
import Form from './assets/sections/Form/Form.jsx';
import Header from './assets/sections/Header/Header.jsx'
import Projects from './assets/sections/Projects/Projects.jsx';
import Specialties from './assets/sections/Specialties/Specialties.jsx'
import './variables.css';

function App() {
  return(
    <>
     <Header />
     <About />
     <Specialties />
     <Projects />
     <Form />
     <Footer />
    </>
  )

}

export default App
