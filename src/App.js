import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/home/home';
import AboutUs from './pages/home/aboutUs';
import Navbar from './pages/components/navbar';
import Footer from './pages/components/footer';
import Contact from './pages/home/contact';
import Projects from './pages/home/projects';
import Service from './pages/home/service';

function App() {
  return (
    <Router>
      <div className="App">*

        <Navbar />


        <Routes>
          {/* Redirect "/" to "/home" */}
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contactUs" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Service />} />
          {/* Redirect all unmatched routes to "/home" */}
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>

        <Footer />

      </div>
    </Router>
  );
}

export default App;
