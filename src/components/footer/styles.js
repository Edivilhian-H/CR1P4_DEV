import styled from "styled-components";

export const Container = styled.footer`
  margin-top: 60px;
  padding: 40px 20px;

  border-top: 1px solid ${({ theme }) => theme.colors.border};

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 30px;
`;

export const Description = styled.p`
  margin-top: 16px;

  max-width: 500px;

  line-height: 1.6;

  color: ${({ theme }) => theme.colors.textGray};
`;

export const Button = styled.button`
  margin-top: 24px;

  padding: 12px 22px;

  border: none;
  border-radius: 12px;

  color: white;

  cursor: pointer;

  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.colors.primary},
    ${({ theme }) => theme.colors.secondary}
  );

  transition: 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

export const Social = styled.div`
  margin-top: 30px;

  display: flex;
  gap: 16px;

  a {
    width: 42px;
    height: 42px;

    border-radius: 12px;

    display: flex;
    align-items: center;
    justify-content: center;

    background: rgba(255, 255, 255, 0.03);

    transition: 0.3s;
  }

  a:hover {
    transform: translateY(-5px);

    box-shadow: 0 0 20px rgba(168, 85, 247, 0.3);
  }

  i {
    font-size: 22px;

    color: ${({ theme }) => theme.colors.text};
  }
`;

export const Copy = styled.p`
  margin-top: 30px;

  font-size: 14px;

  color: ${({ theme }) => theme.colors.textGray};
`;
