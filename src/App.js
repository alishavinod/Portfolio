import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import 'font-awesome/css/font-awesome.min.css';
import NavBar from './components/NavBar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Social from './components/Social';
function App() {
  return (
    <>
    <NavBar/>
    <About/>
    <Skills/>
    <Projects/>
    <Social/>
    </>
  );
}

export default App;
