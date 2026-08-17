import * as S from "./styles";
import ProfilePicture from "../profilepicture";

export function About() {
  return (
    <S.Container>
      <S.Hero>
        <S.DtArea>
          <ProfilePicture />
          <p>
            Desenvolvedor <br />
            que ama <span>tecnologia</span> <br />e resolve
            <span> problemas</span>.
          </p>
        </S.DtArea>
      </S.Hero>

      <S.AboutMe>
        <S.Title>
          <span></span>
          <h3>Sobre mim</h3>
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
      </S.AboutMe>

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
