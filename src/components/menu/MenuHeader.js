// MenuHeader.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "./Menu.css"; // Importe seus estilos específicos do MenuHeader, se houver

const MenuHeader = () => {
  return (
    <div className="menu-header-container">
      <button className="custom-button register-button" onClick={() => console.log("Entrar")}>
        <div className="user-icon">
          <FontAwesomeIcon icon={faUser} />
        </div>
        <div className="login-text">ENTRAR</div>
      </button>
    </div>
  );
};

export default MenuHeader;
