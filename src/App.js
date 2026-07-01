import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Countries from "./pages/Countries";
import CountryDetails from "./pages/CountryDetails";

import {
  ThemeProvider,
  useTheme
} from "./context/ThemeContext";

import "./App.css";

function AppContent() {
  const { darkMode } = useTheme();

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/countries" element={<Countries />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          <Route
            path="/country-details"
            element={<CountryDetails />}
          />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;