import styled from 'styled-components';

export const PageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  min-height: 100vh;
  margin: 0 auto;
  max-width: 1280px;
  padding: 48px 24px;
  width: 100%;

  @media screen and (min-width: 767px) {
    padding: 80px 48px;
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    padding: 96px;
  }
`;
