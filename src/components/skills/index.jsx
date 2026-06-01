import * as S from "./styles";

export function Skills() {
  return (
    <S.Container id="skills">
      <S.Title>
        <span></span>
        Habilidades
      </S.Title>

      <S.Grid>
        <S.SkillCard color="#E34F26">
          <i className="bx bxl-html5"></i>
          <p>HTML</p>
        </S.SkillCard>

        <S.SkillCard color="#1572B6">
          <i className="bx bxl-css3"></i>
          <p>CSS</p>
        </S.SkillCard>

        <S.SkillCard color="#F7DF1E">
          <i className="bx bxl-javascript"></i>
          <p>JavaScript</p>
        </S.SkillCard>

        <S.SkillCard color="#61DAFB">
          <i className="bx bxl-react"></i>
          <p>React</p>
        </S.SkillCard>

        <S.SkillCard color="#F05032">
          <i className="bx bxl-git"></i>
          <p>Git</p>
        </S.SkillCard>

        <S.SkillCard color="#A259FF">
          <i className="bx bxl-figma"></i>
          <p>Figma</p>
        </S.SkillCard>
      </S.Grid>
    </S.Container>
  );
}

export default Skills;
