import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App bg-gradient-to-br from-blue-50 via-cyan-50 to-pink-50 min-h-screen">
      <Router>
        <Header />
        <Routes>
          {/* Home */}
          <Route index element={<Body />} />
          <Route path="/home" element={<Body />} />

          {/* Other pages */}
          <Route path="/pricing" element={<Body />} />
          <Route path="/about" element={<div>About Content</div>} />

          {/* Contact */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
