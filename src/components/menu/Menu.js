// Menu.js
import React, { useState, useEffect, useRef } from "react";
import { Navbar, Nav, Offcanvas, Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import flagBr from '../../assets/images/brazil-flag.png';
import flagUs from '../../assets/images/united-states.png';
import logo from '../../assets/images/tarot-logo.png';
import MenuHeader from "./MenuHeader";
import "./Menu.css";

const Menu = ({ isAuthenticated }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("portuguese");
  const [searchOpen, setSearchOpen] = useState(false);
  const searchInputRef = useRef(null);
  const [searchActive, setSearchActive] = useState(false);
  const [inputFocus, setInputFocus] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleOutsideClick = (e) => {
    if (menuOpen && !e.target.closest(".menu-sidebar")) {
      setMenuOpen(false);
    }
  };

  const handleSearchToggle = () => {
    setSearchActive(!searchActive);
  };

  const handleSearchClose = () => {
    setSearchOpen(false);
  };

  useEffect(() => {
    window.addEventListener("click", handleOutsideClick);
    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, [menuOpen]);

  useEffect(() => {
    if (searchOpen) {
      searchInputRef.current.focus();
    }
  }, [searchOpen]);

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };

  const renderMenuContent = () => {
    if (isAuthenticated) {
      // Lógica para usuário autenticado (pode ser uma combinação de MenuHeader e SidebarContent)
      return (
        <>
          {/* Conteúdo para usuários autenticados */}
        </>
      );
    } else {
      // Lógica para usuário não autenticado (pode ser uma combinação diferente de MenuHeader e SidebarContent)
      return (
        <>
          {/* Conteúdo para usuários não autenticados */}
        </>
      );
    }
  };

  return (
    <div className={`menu-container ${menuOpen ? "menu-open" : ""}`}>
      <div className="logo">
        <img src={logo} alt="Tarot Logo" />
      </div>
      {renderMenuContent()}
      <div className="options">
        <div className="search-box">
          <button
            className={`btn-search ${searchActive ? "white" : "black"} ${inputFocus ? "input-focus" : ""}`}
            onClick={handleSearchToggle}
          >
            <FontAwesomeIcon icon={faSearch} />
          </button>

          <input
            type="text"
            className={`input-search ${searchActive ? "active" : ""}`}
            placeholder="Pesquisar..."
            ref={searchInputRef}
            onFocus={() => setInputFocus(true)}
            onBlur={() => setInputFocus(false)}
          />
        </div>
        <Dropdown className="language-options">
          <Dropdown.Toggle as="button" className="custom-button">
            {selectedLanguage === "portuguese" ? (
              <span className="language-text">
                <img src={flagBr} alt="Português" />
                PT-BR
              </span>
            ) : (
              <span className="language-text">
                <img src={flagUs} alt="English" />
                EN-US
              </span>
            )}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => handleLanguageChange("portuguese")}>
              <span className="language-text">
                <img src={flagBr} alt="Português" /> Português (PT-BR)
              </span>
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleLanguageChange("english")}>
              <span className="language-text">
                <img src={flagUs} alt="English" /> English (EN-US)
              </span>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <button className="custom-button register-button" onClick={() => console.log("Entrar")}>
            <div className="user-icon">
                <FontAwesomeIcon icon={faUser} />
            </div>
            <div className="login-text">ENTRAR</div>
        </button>
      </div>
      <div className="menu-bar">
        <div className="sidebar" onClick={handleMenuToggle}>
          <FontAwesomeIcon icon={faBars} className="burger" />
          <div className="menu-text">MENU</div>
        </div>
      </div>
      {menuOpen && (
        <>
          <div className="overlay" onClick={handleMenuToggle} />
          <Offcanvas
            show={menuOpen}
            onHide={() => setMenuOpen(false)}
            placement="start"
            className="menu-sidebar"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>BEM-VINDO</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              {renderMenuContent()}
              {/* Aqui você pode incluir o conteúdo específico do SidebarContent */}
                    <div className="search-bar-container">
                    <input
                    type="text"
                    placeholder="Pesquisar..."
                    className="search-bar"
                    ref={searchInputRef}
                    />
                    <FontAwesomeIcon icon={faSearch} className="search-icon" onClick={handleSearchClose} />
                    </div>
                    <div className="page-options">
                    <Nav className="ml-auto flex-column">
                    <Nav.Link href="#">Página 1</Nav.Link>
                    <Nav.Link href="#">Página 2</Nav.Link>
                    <Nav.Link href="#">Página 3</Nav.Link>
                    </Nav>
                    </div>
              {/* Renderiza SidebarContent com base na autenticação */}
            </Offcanvas.Body>
          </Offcanvas>
        </>
      )}
    </div>
  );
};

export default Menu;
