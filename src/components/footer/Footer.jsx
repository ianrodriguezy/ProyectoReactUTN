import "./footer.css"
import facebook from "../../assets/Imagesfooter/fbIcon.png"
import instagram from "../../assets/Imagesfooter/instagramIcon.png"
import whatsapp from "../../assets/Imagesfooter/whatsappIcon.png"
export const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="ubicacion">
          <h2 className="titulo">Ubicación</h2>
          <p>Buenos Aires, Argentina.</p>
        </div>
        <div className="redes">
          <h2 className="titulo">Redes</h2>
          <div>
            <a href="">
              <img src={facebook} alt="" />
            </a>
            <a href="">
              <img src={instagram} alt="" />
            </a>
            <a href="">
              <img src={whatsapp} alt="" />
            </a>
          </div>
        </div>
        <div className="acerca">
          <h2 className="titulo">Acerca de nosotros</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            assumenda quidem, error nobis officia eaque impedit nihil similique.
            Ratione at consequuntur dolorem! Quis repudiandae, quam aliquid
            vitae culpa voluptatibus officia.
          </p>
        </div>
      </div>
      <p className="copy">Todos los derechos</p>
    </>
  );
}
