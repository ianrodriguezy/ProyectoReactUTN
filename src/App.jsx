import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/nav/Nav";
import Contacto from "./components/contacto/Contacto";
import Carrito from "./components/carrito/Carrito";
import Footer from "./components/footer/Footer";
import Productos from "./components/productos/productos";
import ProductDetail from "./components/ProductDetail/ProductDetail";

function App() {
  return (
    <>
      <HashRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Productos />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/productos/:id" element={<ProductDetail />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/carrito" element={<Carrito />} />
        </Routes>
        <Footer />
      </HashRouter>
    </>
  );
}

export default App;
