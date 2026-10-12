import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Category from './pages/Category';
import Series from './pages/Series';
import Watch from './pages/Watch';
import Search from './pages/Search';
import NotFound from './pages/NotFound';
import './index.css';

function AppRoutes() {
  const location = useLocation();
  const background = location.state && location.state.backgroundLocation;

  return (
    <>
      <ScrollToTop />
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <main style={{ flex: 1 }}>
          <Routes location={background || location}>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/categories/:slug" element={<Category />} />
            {/* Render details normally if no background (direct navigation) */}
            <Route path="/series/:id" element={<Series />} />
            <Route path="/watch/:id" element={<Watch />} />
            <Route path="/search" element={<Search />} />
            <Route path="*" element={<NotFound />} />
          </Routes>

          {/* Render modals over background */}
          {background && (
            <Routes>
              <Route path="/series/:id" element={<Series />} />
              <Route path="/watch/:id" element={<Watch />} />
              <Route path="/search" element={<Search />} />
            </Routes>
          )}
        </main>
        <Footer />
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
