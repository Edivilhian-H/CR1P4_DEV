import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 20px;
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const Logo = styled.img`
  width: 55px;
  padding-bottom: 10px;
`;

export const ButtonMenu = styled.button`
  width: 30px;
  height: 20px;
  background: transparent;
  border: none;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  span {
    width: 100%;
    height: 2px;
    background: ${({ theme }) => theme.colors.text};
    border-radius: 2px;
    transition: all 0.2s ease;
  }

  &:hover span {
    background: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 8px ${({ theme }) => theme.colors.primary};
  }
`;
