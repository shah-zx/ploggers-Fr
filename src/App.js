import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import About from './components/About';
import Home from './components/Home';
import ErrorPage from './components/ErrorPage';
import Media from './components/Media';
import Events from './components/Event';
import JoinNow from './components/JoinNow';
import Contact from './components/Contact';
import DonationPage from './components/DonatePage';
import NavBar from './components/NavBar'; // Import the NavBar component

const App = () => {
  return (
    <div className="App">
      <Router>
        <NavBar /> {/* Use the NavBar component here */}
        {/* Routes for navigating between Home and About */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/media" element={<Media />} />
          <Route path="/events" element={<Events />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/joinnow" element={<JoinNow />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/donate" element={<DonationPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;