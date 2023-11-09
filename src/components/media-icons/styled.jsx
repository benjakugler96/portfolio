import styled from 'styled-components';

export const MediaIconsContainer = styled.div`
  > * {
    margin: 0 10px;
  }
`;

export const IconContainer = styled.a`
  cursor: pointer;

  &:visited {
    color: inherit;
  }

  &:hover {
    svg {
      fill: #e2e8f0;
    }
  }
`;
