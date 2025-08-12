import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import Home from './pages/Home';
import GalleryPage from './pages/GalleryPage';
import RulesPage from './pages/RulesPage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/galeria" element={<GalleryPage />} />
          <Route path="/regras" element={<RulesPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
