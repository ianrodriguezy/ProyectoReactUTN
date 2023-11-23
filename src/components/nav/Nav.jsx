import "./nav.css"
import Logo from "../../assets/logo.svg"
import { Link } from "react-router-dom"



const NavBar = () => {
  return (
    <nav>
      <Link to="/" className="title">
        <img src={Logo} alt="" />
      </Link>

      <Link to="/productos" className="icon">
        Productos
      </Link>

      <Link to="/contacto" className="icon">
        Contactos
      </Link>

      <Link to="/cart" className="icon">
        Cart
      </Link>
    </nav>
  );
};

export default NavBar;