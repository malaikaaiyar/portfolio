import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import { MainContent } from './MainContent/MainContent';
import { Code } from './Code/Code';
import { Art } from './Art/Art'
import { Youtube } from './Youtube/Youtube';
import { Acad } from './Acad/Acad';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/test" element={<MainContent />} />
      <Route path="/code" element={<Code />} />
      <Route path="/art" element={<Art />} />
      <Route path="/youtube" element={<Youtube />} />
      <Route path="/acad" element={<Acad />} />
    </Routes>
  </Router>,
  document.getElementById("root")
)

reportWebVitals();
