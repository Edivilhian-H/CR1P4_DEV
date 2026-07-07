import styled from "styled-components";

export const Button = styled.button`
  position: fixed;
  bottom: 30px;
  right: 30px;

  width: 55px;
  height: 55px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  border-radius: 50%;

     background: ${({ theme }) => theme.colors.primary};

  backdrop-filter: blur(10px);
  color: ${({ theme }) => theme.colors.text};

  font-size: 24px;
  font-weight: bold;

  cursor: pointer;
  z-index: 999;

  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);

  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px) scale(1.05);
    background: ${({ theme }) => theme.colors.primaryHover};
  }

  &:active {
    transform: scale(0.95);
  }

  @media (max-width: 768px) {
    width: 48px;
    height: 48px;
    bottom: 20px;
    right: 20px;
    font-size: 20px;
  }
`;
