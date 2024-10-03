import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <h1>Welcome to Our Landing Page</h1>
        <p>We provide the best solutions for your business</p>
        <a href="#features" className="cta-button">Learn More</a>
      </header>

      <section id="features" className="features">
        <h2>Features</h2>
        <div className="feature-cards">
          <div className="card">
            <h3>Feature 1</h3>
            <p>Description of Feature 1</p>
          </div>
          <div className="card">
            <h3>Feature 2</h3>
            <p>Description of Feature 2</p>
          </div>
          <div className="card">
            <h3>Feature 3</h3>
            <p>Description of Feature 3</p>
          </div>
        </div>
      </section>

      <section id="about" className="about">
        <h2>About Us</h2>
        <p>We are a team of passionate individuals committed to delivering the best services.</p>
      </section>

      <footer id="contact" className="footer">
        <h2>Contact Us</h2>
        <p>Email: info@example.com</p>
        <p>Phone: +123 456 7890</p>
      </footer>
    </div>
  );
}

export default App;
