import './App.css';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom'
import ContactUsPage from './components/ConactUsPage';
import ProfilePage from './components/ProfilePage';
import AboutUsPage from './components/AboutUsPage';

function App() {
  return (
    <div className="App">
    <Router>
      <header>
        <h1 className="title">Basic Styled Pages</h1>
         <div className="navBar">
          <ul>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
      </header>
      <div className="display">
        <Routes>
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;