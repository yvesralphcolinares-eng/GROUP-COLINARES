import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

import Activity1 from './Activities/Activity1/actapp1.jsx';
import Activity2 from './Activities/Activity2/actapp2.jsx';
import Activity3 from './Activities/Activity3/actapp3.jsx';
import Activity4 from './Activities/Activity4/actapp4.jsx';

function App() {
  return (
    <Router>
      <div className="app-container">
        
        <nav className="navbar">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/activities" className="nav-link">Activities</Link>
        </nav>

        <Routes>
          {}
          <Route path="/" element={
            <div className="hero-section">
              <h1 className="hero-title">MCO FOR ITE6</h1>
              <p className="hero-subtitle">Group Project: Interactive Activity Repository</p>
              <Link to="/activities">
                <button className="btn-primary">Get Started</button>
              </Link>
            </div>
          } />

          {}
          <Route path="/activities" element={
            <div style={{ padding: '40px' }}>
              <h2>Select an Activity</h2>
              <div className="activities-grid">
                <Link to="/actapp1" className="activity-card">Activity 1</Link>
                <Link to="/actapp2" className="activity-card">Activity 2</Link>
                <Link to="/actapp3" className="activity-card">Activity 3</Link>
                <Link to="/actapp4" className="activity-card">Activity 4</Link>
              </div>
            </div>
          } />

          {}
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
