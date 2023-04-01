import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Navigation from "./components/header/Navigation";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Projects from "./pages/Projects";
import "./styles/main.css";
import ScrollToTop from "./utils/ScrollToTop";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<Project />} />
          {/* <Route path="/contacts" element={<Contacts />} /> */}
        </Routes>
        {/* <Home /> */}
        {/* <Projects /> */}
        {/* <Contact /> */}
        {/* <Project /> */}

        <Footer />
      </Router>
    </div>
  );
}

export default App;
