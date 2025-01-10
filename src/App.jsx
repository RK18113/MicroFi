import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';
import Home from '../pages/Home.jsx';
import Dashboard from '../pages/Dashboard.jsx';
import Borrowing from '../pages/Borrowing.jsx';
import About from '../pages/About.jsx';
import Lending from '../pages/Lending.jsx';
import AuthSign from '../pages/AuthSign.jsx'

const App = () => (
  <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lending" element={<Lending />} />
          <Route path="/borrowing" element={<Borrowing />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/authsign" element={<AuthSign />} />
        </Routes>
      </div>
    </Router>
);

export default App;
