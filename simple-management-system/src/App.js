import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Query from './pages/Query';
import './App.css';

function App() {
  return(
    <Router>
      <div className="app">
        <Header />
          <main className='main-content'>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/query" element={<Query />} />
              </Routes>
          </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
