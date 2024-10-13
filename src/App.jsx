import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import WorldClockPage from "./pages/WorldClockPage";
import Contributors from "./pages/Contributors";
import SignUpPage from "./pages/SignUpPage";
import TimerPage from "./pages/TimerPage";
import AutoCounterPage from "./pages/AutoCounterPage";
import Design from "./components/Design";
import Counter from "./pages/Counter";
// import Footer from './Footer'; // Import the Footer component

const App = () => {
  return (
    <Router>
      <div>
        {/* Particles design will be displayed globally */}
        <Design />
        <Routes>
          <Route path="/" element={<AutoCounterPage />} />
          <Route path="/Timer" element={<TimerPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/WorldClock" element={<WorldClockPage />} />
          <Route path="/Contributors" element={<Contributors />} />
          <Route path="/counter" element={<Counter />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
