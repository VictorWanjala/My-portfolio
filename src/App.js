import './App.css';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProjectDisplay from './components/ProjectDisplay';
import Skills from './components/Skills';
import Awards from './components/Awards';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/project/:id' element={<ProjectDisplay/>}/>
          <Route path='/experience' element={<Experience/>}/>
          <Route path='/skills' element={<Skills/>}/>
          <Route path='/awards' element={<Awards/>}/>

        </Routes>
        <Footer/>

      </Router>
    </div>
  );
}

export default App;
