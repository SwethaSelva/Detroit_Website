import './App.css';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import Contact from './pages/Contact';
import Services from './pages/Services';
import About from './pages/About';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '80px', padding: '1rem', maxWidth: '100%', minHeight: '100vh' }}>
        <Routes>
          <Route path="/" element={<h1>Home Page</h1>} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App;
