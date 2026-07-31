import * as S from "./styles";

export function About() {
  return (
    <S.Container id="about">
      <S.Hero>
        <img src="" alt="" />
        <div>
          Desenvolvedor 
          que ama <span>tecnologia</span>
          e resolve<span>problemas</span> .
        </div>
      </S.Hero>
      <S.Title>
        <span></span>
        Sobre mim
      </S.Title>

      <S.Description>
        Sou desenvolvedor Front-End apaixonado por tecnologia e por criar
        interfaces modernas, rápidas e responsivas.
      </S.Description>

      <S.Topics>
        <S.Topic>⚡ Focado em resultados</S.Topic>

        <S.Topic>💻 Código limpo</S.Topic>

        <S.Topic>🚀 Sempre aprendendo</S.Topic>
      </S.Topics>

      <S.Stats>
        <S.StatBox>
          <h3>+10</h3>
          <p>Projetos concluídos</p>
        </S.StatBox>

        <S.StatBox>
          <h3>+2</h3>
          <p>Anos aprendendo</p>
        </S.StatBox>

        <S.StatBox>
          <h3>100%</h3>
          <p>Dedicado</p>
        </S.StatBox>
      </S.Stats>
    </S.Container>
  );
}

export default About;
