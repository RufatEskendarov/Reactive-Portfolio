import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Navigation from "./components/header/Navigation";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Home />

      <Footer />
    </div>
  );
}

export default App;
