import { useState } from "react";

import * as S from "./styled";

import Logo from "../../assets/Logo.png";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

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
          <a href="#home">Início</a>
          <a href="#">Sobre</a>
          <a href="#">Projetos</a>
          <a href="#">Skills</a>
          <a href="#contact">Contato</a>
        </S.MobileMenu>
      )}
    </S.Container>
  );
}

export default Header;
