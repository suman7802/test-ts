import './index.css';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import Home from './components/Home';
import Test from './components/Test';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
      </Routes>
      <div className="font-sans text-gray-900 antialiased">
        <nav className="bg-blue-500 p-6">
          <ul className="flex items-center justify-between">
            <li>
              <Link to="/" className="text-white text-lg hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/test" className="text-white text-lg hover:underline">
                Test
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </Router>
  );
}
