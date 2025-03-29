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
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <Link to="/" className="nav-logo">Hackify</Link>
          
          <button className="nav-toggle" onClick={toggleMobileNav}>
            {isMobileNavOpen ? '✕' : '☰'}
          </button>
          
          <div className={`nav-menu ${isMobileNavOpen ? 'open' : ''}`}>
            <div className="nav-links">
              <Link to="/" onClick={() => setIsMobileNavOpen(false)}>Home</Link>
              <Link to="/challenges" onClick={() => setIsMobileNavOpen(false)}>Challenges</Link>
              <Link to="/leaderboard" onClick={() => setIsMobileNavOpen(false)}>Leaderboard</Link>
              <Link to="/about" onClick={() => setIsMobileNavOpen(false)}>About</Link>
              <Link to="/resources" onClick={() => setIsMobileNavOpen(false)}>Resources</Link>
            </div>
          </div>
        </nav>

        <main className="content">
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
