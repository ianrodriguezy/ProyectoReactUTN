import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/nav/Nav";
import Productos from "./components/productos/Productos";
import Contacto from "./components/contacto/Contacto";
import Cart from "./components/cart/Cart";
import Home from "./components/home/Home";


function App() {
  return (
    <>
      <HashRouter>
        <Nav />
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/carrito" element={<Cart />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;