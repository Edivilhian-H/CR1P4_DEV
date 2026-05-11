import styled from "styled-components";

export const Social = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;
  padding-left: 16px;

  a {
    width: 40px;
    height: 40px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 8px;

    color: ${({ theme }) => theme.colors.text};

    transition: 0.3s;
  }

  a:hover {
    color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 10px ${({ theme }) => theme.colors.primary};
  }

  i {
    font-size: 20px;
  }
`;
