import styled from "styled-components";

export const Container = styled.section`
  padding: 10px 16px;
  margin-top: 50px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
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

export const Link = styled.a`
  color: ${({ theme }) => theme.colors.primary};
`;

export const Cards = styled.div`
  margin-top: 30px;

  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Card = styled.div`
  overflow: hidden;

  border-radius: 20px;

  border: 1px solid ${({ theme }) => theme.colors.border};

  background: rgba(255, 255, 255, 0.02);
`;

export const Image = styled.img`
  width: 100%;
  display: block;
`;

export const Content = styled.div`
  padding: 20px;

  h3 {
    font-size: 22px;
  }

  p {
    margin-top: 10px;

    line-height: 1.6;

    color: ${({ theme }) => theme.colors.textGray};
  }
`;

export const Techs = styled.div`
  margin-top: 20px;

  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  span {
    padding: 6px 12px;

    border-radius: 999px;

    background: rgba(255, 255, 255, 0.05);

    font-size: 14px;
  }
`;
