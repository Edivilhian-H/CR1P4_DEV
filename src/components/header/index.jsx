import * as S from "./styled";

import Logo from "../../assets/Logo.png";

function Header() {
  return (
    <S.Container>
      <S.Header>
        <S.Logo src={Logo} alt="Logo" />

        <S.ButtonMenu>
          <span></span>
          <span></span>
          <span></span>
        </S.ButtonMenu>
      </S.Header>
    </S.Container>
  );
}

export default Header;
