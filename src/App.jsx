import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Confidentialite from './pages/Confidentialite.jsx';
import useNavScroll from './hooks/useNavScroll.js';
import useScrollToTopOnRoute from './hooks/useScrollToTopOnRoute.js';

export default function App() {
  useNavScroll();
  useScrollToTopOnRoute();

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<PageShell><Home /></PageShell>} />
        <Route path="/about" element={<PageShell><About /></PageShell>} />
        <Route path="/contact" element={<PageShell><Contact /></PageShell>} />
        <Route path="/confidentialite" element={<PageShell><Confidentialite /></PageShell>} />
        <Route path="*" element={<PageShell><Home /></PageShell>} />
      </Routes>
    </>
  );
}

function PageShell({ children }) {
  return (
    <main>
      {children}
      <Footer />
    </main>
  );
}
