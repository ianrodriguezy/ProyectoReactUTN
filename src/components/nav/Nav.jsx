import { Link } from "react-router-dom";
import "./nav.css";

const NavBar = () => {
  return (
    <nav>
      <Link to="/" className="title">
        E-Commerce
      </Link>

      <Link to="/productos" className="icon">
        Productos
      </Link>

      <Link to="/contacto" className="icon">
        Contacto
      </Link>

      <Link to="/carrito" className="icon">
        <i className="fa-solid fa-shop"></i>
      </Link>
    </nav>
  );
};

export default NavBar;
