import { useState } from "react";
import "./contacto.css";
const Contacto = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // eslint-disable-next-line no-unused-vars
    const newUser = {
      name,
      lastName,
      email,
      phone,
      message,
    };

    setName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setMessage("");

    alert("Mensaje Enviado");
  };

  return (
    <>
      <form className="form" onSubmit={(e) => handleFormSubmit(e)}>
        <div className="input-wrapper">
          <label htmlFor="user-name">Nombre:</label>
          <input
            type="text"
            id="user-name"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="user-lastName">Apellido:</label>
          <input
            type="text"
            id="user-lastName"
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
            required
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="user-email">Email:</label>
          <input
            type="email"
            id="user-email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="user-phone">Telefono:</label>
          <input
            type="number"
            id="user-phone"
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
            required
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="user-text">Mensaje:</label>
          <br />
          <textarea
            name="user-text"
            id="user-text"
            cols="30"
            rows="10"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            required
          ></textarea>
        </div>

        <button type="submit">Enviar</button>
      </form>
    </>
  );
};

export default Contacto;
