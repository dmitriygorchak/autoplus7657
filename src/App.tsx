import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from './components/About';
import Cars from './components/Cars';
import Reviews from './components/Reviews';


const App: React.FC = () => {
  return (
    <>
      <nav>
        <ul>
          <li><Link to="/">Про нас</Link></li>
          <li><Link to="/cars">Оренда авто</Link></li>
          <li><Link to="/reviews">Відгуки</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/reviews" element={<Reviews />} />
      </Routes>
    </>
  );
};

export default App;
