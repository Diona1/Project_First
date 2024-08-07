import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import Footer from './components/Footer';
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Products from "./pages/Products";

function App() {
  return (
    <Router>
      <Nav />
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/About" element={<About />} />
          <Route path="/Products" element={<Products />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
