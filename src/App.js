import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

import Contact from "./pages/Contact";
import AboutMe from "./pages/AboutMe";
import Project from "./pages/Project";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import "./styles/main.css";
import ScrollToTop from "./utils/ScrollToTop";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/about" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<Project />} />
          <Route path="/contacts" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
