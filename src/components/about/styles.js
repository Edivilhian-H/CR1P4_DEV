import styled from "styled-components";

export const Container = styled.section`
  margin: 10px 16px;
  padding: 10px;

  border-radius: 20px;

  border: 1px solid ${({ theme }) => theme.colors.border};

  background: rgba(255, 255, 255, 0.02);

  @media (min-width: 768px) {
    display: flex;
  }
`;

export const Hero = styled.div`
  display: flex;
  align-items: center;
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

export const Topics = styled.div`
  margin-top: 24px;

  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const Topic = styled.div`
  color: ${({ theme }) => theme.colors.text};
`;

export const Stats = styled.div`
  margin-top: 30px;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border-radius: 14px;



  border: 1px solid ${({ theme }) => theme.colors.border};

  align-items: center;
  justify-content: center;
  gap: 11px;
`;

export const StatBox = styled.div`
  padding: 15px 15px 15px 15px;

  text-align: center;

  h3 {
    font-size: 24px;
    color: ${({ theme }) => theme.colors.primary};
  }

  p {
    margin-top: 8px;

    font-size: 14px;

    color: ${({ theme }) => theme.colors.textGray};
  }
`;
