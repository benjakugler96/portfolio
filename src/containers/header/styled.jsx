import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;

  p {
    margin-top: 16px;
  }

  :last-child {
    margin-top: 16px;
  }

  @media screen and (min-width: 1024px) {
    :last-child {
      margin-top: auto;
    }
  }
`;
