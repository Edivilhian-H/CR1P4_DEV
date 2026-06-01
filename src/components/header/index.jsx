import { useState } from "react";

import * as S from "./styled";

import Logo from "../../assets/Logo.png";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
  setMenuOpen(false);
};

  return (
    <S.Container>
      <S.Header>
        <S.Logo src={Logo} alt="Logo" />

        <S.ButtonMenu onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </S.ButtonMenu>
      </S.Header>

      {menuOpen && (
        <S.MobileMenu>
          <a href="#home" onClick={closeMenu}>Início</a>
          <a href="#about" onClick={closeMenu}>Sobre</a>
          <a href="#projects" onClick={closeMenu}>Projetos</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#contact" onClick={closeMenu}>Contato</a>
        </S.MobileMenu>
      )}
    </S.Container>
  );
}

export default Header;
