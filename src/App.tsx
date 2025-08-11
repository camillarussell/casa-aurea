import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import Home from './pages/Home';
import Rules from './pages/Rules';
import './App.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/regras" element={<Rules />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
