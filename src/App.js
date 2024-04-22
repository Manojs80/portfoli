import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Icons from "./components/Icons";
import Projects from "./components/Projects";
 


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/"  element={<Home />} />
        <Route path="/Contact"  element={<><Contact /><Icons /></>} />
        <Route path="/Skills"  element={<><Skills /><Icons /></>} />
        <Route path="/Resume"  element={<><Resume/><Icons /></>} />
        <Route path="/Experience"  element={<><Experience /><Icons /></>} />
        <Route path="/Education"  element={<><Education /><Icons /></>} />
        <Route path="/Projects"  element={<><Projects /><Icons /></>} />
      </Routes>
      
      <Footer />
    </Router>
  );
}

export default App 