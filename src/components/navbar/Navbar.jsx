import React, { useRef, useState, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaRegHandPointRight } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import {
  HeaderContainer,
  LogoImg,
  NavbarContainer,
  ListContainer,
} from "./navbar-styles";
import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
  const toggleRef = useRef(null);
  const navRef = useRef(null);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;

    const targetElement = document.getElementById(location.hash.substring(1));
    if (targetElement) {
      setTimeout(() => {
        targetElement.scrollIntoView({ behavior: "smooth" });

        // Borra el hash de la URL sin recargar la página
        window.history.replaceState(null, null, " ");
      }, 100);
    }
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        navRef.current &&
        !navRef.current.contains(event.target) &&
        toggleRef.current &&
        !toggleRef.current.contains(event.target)
      ) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    const menuIsOpen = navRef.current.classList.contains("show-menu");

    if (!menuIsOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    navRef.current.classList.toggle("show-menu");
    toggleRef.current.classList.toggle("show-icon");
  };

  const handleDropdownToggle = (index) => {
    setActiveDropdown((prev) => (prev === index ? null : index)); // Alternar entre abierto/cerrado
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const closeMenu = () => {
    if (window.innerWidth <= 960) {
      navRef.current.classList.remove("show-menu");
      toggleRef.current.classList.remove("show-icon");

      // Restaurar scroll solo si estaba bloqueado
      if (document.body.style.position === "fixed") {
        const scrollY = parseInt(document.body.dataset.scrollY || "0", 10);
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.width = "";
        window.scrollTo(0, scrollY);
      }
    }
  };

  return (
    <HeaderContainer className="header">
      <NavbarContainer className="nav container">
        {/* Logo */}
        <Link to="/" className="nav__logo">
          <LogoImg
            src="../../assets/imgs/logos/logo-moras.png"
            alt="Logo Moras y compañia"
          />
        </Link>
        {/* Menú móvil */}
        <div
          className="nav__toggle"
          id="nav-toggle"
          ref={toggleRef}
          onClick={toggleMenu}
        >
          <RxHamburgerMenu className="nav__burger" />
          <IoClose className="nav__close" />
        </div>

        {/* Menú principal */}
        <div className="nav__menu" id="nav-menu" ref={navRef}>
          <ListContainer className="nav__list">
            <li>
              <Link to="/" className="nav__link" onClick={toggleMenu}>
                Inicio
              </Link>
            </li>
            <li>
              <Link to="/#nosotros" className="nav__link" onClick={toggleMenu}>
                Nosotros
              </Link>
            </li>
            <li
              className={`dropdown__item ${
                activeDropdown === 0 ? "show-dropdown" : ""
              }`}
            >
              <div
                className="nav__link"
                onClick={() => handleDropdownToggle(0)}
              >
                Rubros <IoIosArrowDown className="dropdown__arrow" />
              </div>

              <ul className="dropdown__menu">
                <li>
                  <Link
                    to="/editorial"
                    className="dropdown__link"
                    onClick={() => {
                      setActiveDropdown(null);
                      closeMenu();
                    }}
                  >
                    <FaRegHandPointRight className="hand__icon" /> Editorial
                  </Link>
                </li>
                <li>
                  <Link
                    to="/etiquetas"
                    className="dropdown__link"
                    onClick={() => {
                      setActiveDropdown(null);
                      closeMenu();
                    }}
                  >
                    <FaRegHandPointRight className="hand__icon" /> Etiquetas
                  </Link>
                </li>
                <li>
                  <Link
                    to="/packaging"
                    className="dropdown__link"
                    onClick={() => {
                      setActiveDropdown(null);
                      closeMenu();
                    }}
                  >
                    <FaRegHandPointRight className="hand__icon" /> Packaging
                  </Link>
                </li>
                <li>
                  <Link
                    to="/textil"
                    className="dropdown__link"
                    onClick={() => {
                      setActiveDropdown(null);
                      closeMenu();
                    }}
                  >
                    <FaRegHandPointRight className="hand__icon" /> Industria
                    Textil
                  </Link>
                </li>
                <li>
                  <Link
                    to="/comunicacionVisual"
                    className="dropdown__link"
                    onClick={() => {
                      setActiveDropdown(null);
                      closeMenu();
                    }}
                  >
                    <FaRegHandPointRight className="hand__icon" /> Comunicación
                    Visual
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/#contact" className="nav__link" onClick={toggleMenu}>
                Contacto
              </Link>
            </li>
          </ListContainer>
        </div>
      </NavbarContainer>
    </HeaderContainer>
  );
};
