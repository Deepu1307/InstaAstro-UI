import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Components
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Kundli from './components/Kundli/Kundli';
import Matchmaking from './components/Matchmaking/Matchmaking';
import Horoscope from './components/Horoscope/Horoscope';
import Live from './components/Live/Live';
import Panchang from './components/Panchang/Panchang';
import Calendar from './components/Calendar/Calendar';
import Resource from './components/Resource/Resource';
import Blog from './components/Blog/Blog';

// Styling
import './App.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kundli" element={<Kundli />} />
        <Route path="/matchmaking" element={<Matchmaking />} />
        <Route path="/horoscope" element={<Horoscope />} />
        <Route path="/live" element={<Live />} />
        <Route path="/panchang" element={<Panchang />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/resource" element={<Resource />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  );
};

export default App;
