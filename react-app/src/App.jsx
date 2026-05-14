import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home';
import Products from './Pages/Products';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import About from './Pages/About';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import Cart from './Pages/Cart';
import Footer from './Components/Footer/Footer';
import './App.css';

function AppContent() {
  const location = useLocation();
  const isAuthPage = location.pathname === '/signup' || location.pathname === '/login';

  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>
      {!isAuthPage && <Footer />}
    </>
  );
}

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
