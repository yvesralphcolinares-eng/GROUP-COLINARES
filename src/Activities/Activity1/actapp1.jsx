import { useState } from 'react'
import reactLogo from './act1react.svg'
import viteLogo from './act1vite.svg'
import heroImg from './act1hero.png'
import './actapp1.css'

function App() {
  // Move members into an array so you can loop through them
  const members = [
    { name: "Yves Ralph Colinares", description: "Leader" },
    { name: "Abegail Calagos", description: "4ps member" },
    { name: "Jay Anthony Malanog", description: "Ketchup" },
    { name: "Jane De Guzman", description: "Dragon" },
    { name: "John Mark Reyes", description: "Ketchup" },
    { name: "Suzette Jane Concha", description: "Girlboy" }
  ];

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="Hero" />
        </div>
        <div>
          <h1>WHAT'S UP MGA CONTAINER</h1>
        </div>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <h2>Documentation by group palubog:</h2>
          
          <div className="member-container">
            {/* We use .map to generate the tables automatically */}
            {members.map((member, index) => (
              <table key={index} className="member-table">
                <thead>
                  <tr>
                    <th colSpan="2">Member #{index + 1}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><b>Name:</b></td>
                    <td>{member.name}</td>
                  </tr>
                  <tr>
                    <td><b>Info:</b></td>
                    <td>{member.description}</td>
                  </tr>
                </tbody>
              </table>
            ))}
          </div>

          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank" rel="noreferrer">
                <img className="logo" src={viteLogo} alt="Vite Logo" /> Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank" rel="noreferrer">
                <img className="button-icon" src={reactLogo} alt="React Logo" /> Learn more
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App;