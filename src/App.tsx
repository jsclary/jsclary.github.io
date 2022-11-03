import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { MathJaxContext, MathJax } from 'better-react-mathjax';

function App() {
  return (
    <MathJaxContext>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Counter />
          <p>
            <MathJax>{"\\(\\frac{10}{4x} \\approx 2^{12}\\)"}</MathJax>
          </p>
        </header>
      </div>
    </MathJaxContext>
  );
}

export default App;
