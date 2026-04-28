import * as S from "./styles";

function Hero() {
  return (
    <S.Container>
      <S.Content>
        <S.Badge>Developer</S.Badge>
      </S.Content>

      <S.Title>
        Transformo ideias em <span>interfaces modernase rápidas</span>
      </S.Title>

      <S.Description>
        Desenvolvedor focado em React, criando aplicações modernas, responsivas
        e com alta performance.
      </S.Description>
    </S.Container>
  );
}

export default Hero;
