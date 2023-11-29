import "./footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer__container">
          <h2>Ubicacion</h2>
          <div className="linea"></div>
          <p>Argentina - Buenos Aires</p>
        </div>
        <div className="footer__container">
          <h2>Redes</h2>
          <div className="linea"></div>
          <div className="redes">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-twitter"></i>
            </a>
          </div>
        </div>
        <div className="footer__container">
          <h2>Acerca De Nosotros</h2>
          <div className="linea"></div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
            quidem, vero repudiandae molestias esse tempore excepturi quisquam
            sequi temporibus ipsa nam magnam similique eum porro deserunt
            quaerat odit? At, voluptatum.
          </p>
        </div>
      </footer>
      <p className="copyright">Copyright © 2023 UTN</p>
    </>
  );
};

export default Footer;
