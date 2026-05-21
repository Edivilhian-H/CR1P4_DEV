import styled from "styled-components";

export const Container = styled.section`
  padding: 10px 16px;
  margin-top: 50px;
`;

export const Title = styled.h2`
  display: flex;
  align-items: center;
  gap: 10px;

  font-size: 28px;

  span {
    width: 10px;
    height: 10px;

    border-radius: 50%;

    background: ${({ theme }) => theme.colors.primary};
  }
`;

export const Grid = styled.div`
  margin-top: 30px;

  display: grid;
  grid-template-columns: repeat(2, 1fr);

  gap: 16px;
`;

export const SkillCard = styled.div`
  padding: 24px 16px;

  border-radius: 20px;

  border: 1px solid ${({ theme }) => theme.colors.border};

  background: rgba(255, 255, 255, 0.02);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;

  transition: 0.3s;

  &:hover {
    transform: translateY(-5px);

    border-color: ${({ theme }) => theme.colors.primary};

    box-shadow: 0 0 20px rgba(168, 85, 247, 0.2);
  }

  i {
    font-size: 42px;

    color: ${({ color }) => color};
  }

  p {
    font-size: 16px;
  }
`;
