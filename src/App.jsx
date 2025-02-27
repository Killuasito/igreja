import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Donations from "./pages/Donations";
import SliderPage from "./pages/SliderPage";
import ScrollToTop from "./components/ScrollToTop";
import ScrollToTopOnMount from "./components/ScrollToTopOnMount";
import { ThemeProvider } from "./context/ThemeContext";

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTopOnMount />
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sobre" element={<About />} />
              <Route path="/slider" element={<SliderPage />} />
              <Route path="/doacoes" element={<Donations />} />
              <Route
                path="/ministerios"
                element={<div className="pt-20">Ministérios</div>}
              />
            </Routes>
          </main>
          <Footer />
          <ScrollToTop />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
