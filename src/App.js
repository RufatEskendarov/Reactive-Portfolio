import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Navigation from "./components/header/Navigation";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import "./styles/main.css";

function App() {
  return (
    <div className="App">
      <Navigation />
      {/* <Home /> */}
      <Projects />
      {/* <Contact /> */}

      <Footer />
    </div>
  );
}

export default App;
