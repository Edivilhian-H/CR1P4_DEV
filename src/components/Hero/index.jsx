import * as S from "./styles"


export default function Hero() {
  return (
    <S.Container>
      <S.Badge>Desenvolvedor Front-End</S.Badge>

      <S.Title>
        Transformo ideias em{" "}
        <span>experiências digitais incríveis</span>
      </S.Title>

      <S.Description>
        Desenvolvedor focado em criar interfaces modernas, rápidas e responsivas.
      </S.Description>

      <S.ButtonGroup>
        <S.PrimaryButton>Ver Projetos</S.PrimaryButton>
        <S.SecondaryButton>Sobre Mim</S.SecondaryButton>
      </S.ButtonGroup>

    </S.Container>
  )
}