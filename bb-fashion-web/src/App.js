import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer';
import About from './pages/About';
import Shop from './pages/Shop';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/blog" element={<Blog />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;