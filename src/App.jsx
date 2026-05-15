import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

import Activity1 from './Activities/Activity1/actapp1.jsx';
import Activity2 from './Activities/Activity2/actapp2.jsx';
import Activity3 from './Activities/Activity3/actapp3.jsx';
import Activity4 from './Activities/Activity4/actapp4.jsx';

function App() {
  const [showMembers, setShowMembers] = useState(false);

  return (
    <Router>
      <div className="app-container">
        
        <nav className="navbar">
          <div className="nav-left">
            <Link to="/" className="nav-link">HOME</Link>
            <Link to="/activities" className="nav-link">ACTIVITIES</Link>
          </div>
          <button className="members-btn" onClick={() => setShowMembers(true)}>
            MEMBERS
          </button>
        </nav>

        {showMembers && (
          <div className="modal-overlay" onClick={() => setShowMembers(false)}>
            <div className="members-card" onClick={(e) => e.stopPropagation()}>
              <button className="close-btn" onClick={() => setShowMembers(false)}>&times;</button>
              <h2 className="modal-title">GROUP MEMBERS:</h2>
              <div className="members-grid">
                <div className="member-item">YVES RALPH COLINARES</div>
                <div className="member-item">JAY ANTHONY MALANOG</div>
                <div className="member-item">ABEGAIL CALAGOS</div>
                <div className="member-item">JANECAMAE DE GUZMAN</div>
                <div className="member-item">SUZETTE CONCHA</div>
                <div className="member-item">JOHN MARK REYES</div>
              </div>
            </div>
          </div>
        )}

        <Routes>  
          <Route path="/" element={
            <div className="hero-section">
              <h1 className="hero-title">MCO FOR ITE6</h1>
              <p className="hero-subtitle">BY GROUP COLINARES</p>
              <Link to="/activities">
                <button className="btn-primary">GET STARTED</button>
              </Link>
            </div>
          } />

          <Route path="/activities" element={
            <div className="activities-section">
              <h2 className="section-title">SELECT AN ACTIVITY</h2>
              <div className="activities-grid">
                <Link to="/actapp1" className="activity-card">ACTIVITY 1</Link>
                <Link to="/actapp2" className="activity-card">ACTIVITY 2</Link>
                <Link to="/actapp3" className="activity-card">ACTIVITY 3</Link>
                <Link to="/actapp4" className="activity-card">ACTIVITY 4</Link>
              </div>
            </div>
          } />

          <Route path="/actapp1" element={<Activity1 />} />
          <Route path="/actapp2" element={<Activity2 />} />
          <Route path="/actapp3" element={<Activity3 />} />
          <Route path="/actapp4" element={<Activity4 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
