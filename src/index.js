import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import { Art } from './Art/Art'
import {About} from './About/About'
import "@fontsource/fraunces";
import { Community } from './Community/Community';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/art" element={<Art />} />
      <Route path="/about" element={<About />} />
      <Route path="/community" element={<Community />} />

    </Routes>
  </Router>,
  document.getElementById("root")
)

reportWebVitals();
