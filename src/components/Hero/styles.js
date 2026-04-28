import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  padding: 0 16px;
`;

export const Content = styled.div`
  display: flex;
`;

export const Badge = styled.span`
  display: inline-block;

  padding: 6px 14px;
  border-radius: 999px;

  font-size: 12px;
  font-weight: 500;

  border: 1px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primary};

  background: rgba(168, 85, 247, 0.1);
`;

export const Title = styled.h1`
  font-size: 28px;
  font-weight: 700;
  line-height: 1.4;

  margin-top: 16px;

  color: ${({ theme }) => theme.colors.text};

  span {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const Description = styled.p`
  margin-top: 12px;

  font-size: 14px;
  line-height: 1.6;

  color: ${({ theme }) => theme.colors.textGray};
`;
