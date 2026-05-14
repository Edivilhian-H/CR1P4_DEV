import styled from "styled-components";

export const Container = styled.section`
  margin-top: 40px;
  padding: 24px;

  border-radius: 20px;

  border: 1px solid ${({ theme }) => theme.colors.border};

  background: rgba(255, 255, 255, 0.02);
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

export const Description = styled.p`
  margin-top: 20px;

  line-height: 1.8;

  color: ${({ theme }) => theme.colors.textGray};
`;
