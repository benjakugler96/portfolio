import styled from 'styled-components';

export const SectionContainer = styled.section`
  margin-bottom: 36px;
  position: relative;
`;

export const Title = styled.h2`
  color: #e2e8f0;
  background-color: rgba(15, 23, 42, 0.75);
  backdrop-filter: blur(8px);
  font-size: 14px;
  padding: 20px 0;
  position: sticky;
  text-transform: uppercase;
  top: 0;
  left: 0;

  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

export const Content = styled.div``;
