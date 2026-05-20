import * as S from "./styles";

export function Projects() {
  return (
    <S.Container>
      <S.Header>
        <S.Title>
          <span></span>
          Projetos
        </S.Title>

        <S.Link>Ver todos →</S.Link>
      </S.Header>

      <S.Cards>
        <S.Card>
          <S.Image src="https://picsum.photos/500/300" alt="" />

          <S.Content>
            <h3>Dashboard Analytics</h3>

            <p>Dashboard moderno para análise de dados.</p>

            <S.Techs>
              <span>React</span>
              <span>Styled</span>
              <span>ChartJS</span>
            </S.Techs>
          </S.Content>
        </S.Card>
      </S.Cards>
    </S.Container>
  );
}

export default Projects;
