import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import AboutUs from "./pages/AboutUs";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/about_us" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App;
