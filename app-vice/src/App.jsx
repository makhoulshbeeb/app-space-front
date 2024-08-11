import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import ContactUs from  "./components/ContactUs"
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/about_us" element={<AboutUs />} />
        <Route path="/contact_us" element={<ContactUs />} />
      </Routes>
  
    </Router>
  );
}

export default App;
