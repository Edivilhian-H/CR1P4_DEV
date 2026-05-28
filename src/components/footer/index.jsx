import * as S from "./styles";

export function Footer() {
  return (
    <S.Container id="contact">
      <S.Title>
        Vamos trabalhar juntos 🚀
      </S.Title>

      <S.Description>
        Estou disponível para oportunidades,
        freelas e novos projetos.
      </S.Description>

      <S.Button>
        Entrar em contato
      </S.Button>

      <S.Social>
        <a href="#">
          <i className="bx bxl-github"></i>
        </a>

        <a href="#">
          <i className="bx bxl-linkedin"></i>
        </a>

        <a href="#">
          <i className="bx bxl-instagram"></i>
        </a>
      </S.Social>

      <S.Copy>
        © 2026 - Edivilhian H. Todos os direitos reservados.
      </S.Copy>
    </S.Container>
  );
}

export default Footer;