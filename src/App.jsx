import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import Challenges from './Challenges';
import Leaderboard from './Leaderboard';
import About from './About';
import Resources from './Resources';
import SecurityQuiz from './SecurityQuiz';
import CyberEscapeRoom from './CyberEscapeRoom';
import PasswordChallenge from './PasswordChallenge';
import AttackSimulator from './AttackSimulator';
import HackTheHacker from './HackTheHacker';
import HackTheHackerComplete from './HackTheHackerComplete';
import './App.css';

function App() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Function to toggle the dropdown menu
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <Router>
      <div className="app">
        {/* Navbar */}
        <nav className="navbar">
          <Link to="/" className="nav-logo">Hackify</Link>

          {/* Hamburger Menu (for mobile view) */}
          <button
            className="nav-toggle"
            onClick={toggleDropdown}
            aria-label={isDropdownOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {isDropdownOpen ? '✕' : '☰'}
          </button>

          {/* Navigation Links (Dropdown in mobile) */}
          <ul className={`nav-links ${isDropdownOpen ? 'dropdown' : ''}`}>
            <li><Link to="/" onClick={() => setIsDropdownOpen(false)}>Home</Link></li>
            <li><Link to="/challenges" onClick={() => setIsDropdownOpen(false)}>Challenges</Link></li>
            <li><Link to="/leaderboard" onClick={() => setIsDropdownOpen(false)}>Leaderboard</Link></li>
            <li><Link to="/about" onClick={() => setIsDropdownOpen(false)}>About</Link></li>
            <li><Link to="/resources" onClick={() => setIsDropdownOpen(false)}>Resources</Link></li>
          </ul>
        </nav>

        {/* Main Content Routes */}
        <main className="content" onClick={() => setIsDropdownOpen(false)}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/challenges" element={<Challenges />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/about" element={<About />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/games/security-quiz" element={<SecurityQuiz />} />
            <Route path="/games/escape-room" element={<CyberEscapeRoom />} />
            <Route path="/games/password-challenge" element={<PasswordChallenge />} />
            <Route path="/games/attack-sim" element={<AttackSimulator />} />
            <Route path="/games/hack-hacker" element={<HackTheHacker />} />
            <Route path="/games/hack-hacker/complete" element={<HackTheHackerComplete />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
