import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 20px;

  @media (min-width: 768px) {
    padding: 0px 5px;
  }
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
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

  @media (min-width: 768px) {
    display: none;
  }
`;

export const MobileMenu = styled.div`
  position: absolute;

  top: 80px;
  left: 20px;
  right: 20px;

  padding: 20px;

  border-radius: 20px;

  background: ${({ theme }) => theme.colors.backgroundLight};

  backdrop-filter: blur(10px);

  border: 1px solid ${({ theme }) => theme.colors.border};

  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;

  a {
    color: ${({ theme }) => theme.colors.text};

    font-size: 18px;

    text-decoration: none;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

export const DesktopMenu = styled.div`
  display: none;

  padding: 20px;

  align-items: center;
  justify-content: center;

  a {
    color: ${({ theme }) => theme.colors.text};

    font-size: 18px;

    text-decoration: none;
    transition: 0.2s;
  }

  a:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  button {
    padding: 10px 20px;
    border-radius: 8px;
    margin-left: 25px;
    cursor: pointer;

    color: ${({ theme }) => theme.colors.text};
    border: solid 1px ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => theme.colors.background};

    font-size: 18px;
    transition: 0.2s;
  }

  button:hover {
    background: ${({ theme }) => theme.colors.backgroundSecondary};
    color: ${({ theme }) => theme.colors.primary};
  }

  @media (min-width: 768px) {
    display: flex;
    gap: 20px;
  }
`;
