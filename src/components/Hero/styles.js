import styled from "styled-components"

export const Container = styled.section`
  padding: 20px;
`

export const Badge = styled.span`
  border: 1px solid #A855F7;
  color: #A855F7;
  padding: 6px 14px;
  border-radius: 999px;
  font-size: 12px;
`

export const Title = styled.h1`
  font-size: 28px;
  margin-top: 16px;
  line-height: 1.4;

  span {
    color: #00E5FF;
  }
`

export const Description = styled.p`
  margin-top: 12px;
  color: #9CA3AF;
`

export const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`

export const PrimaryButton = styled.button`
  background: linear-gradient(90deg, #A855F7, #00E5FF);
  border: none;
  padding: 10px 16px;
  border-radius: 8px;
  color: white;
`

export const SecondaryButton = styled.button`
  background: transparent;
  border: 1px solid #444;
  padding: 10px 16px;
  border-radius: 8px;
  color: white;
`

export const Image = styled.img`
  width: 100%;
  margin-top: 30px;
  filter: drop-shadow(0 0 25px #A855F7);
`