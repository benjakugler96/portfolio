import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin-bottom: 60px;

  @media screen and (min-width: 767px) {
    grid-template-columns: 1fr 3fr;
  }
`;

export const Date = styled.header`
  text-transform: uppercase;
  font-size: 14px;
  margin-bottom: 8px;
  font-weight: 700;
`;

export const Details = styled.div``;

export const JobTitle = styled.h3`
  color: #e2e8f0;
`;

export const JobDescription = styled.p`
  font-size: 14px;
`;

export const Technologies = styled.div`
  display: flex;
  padding: 8px 0;
  > * {
    margin-right: 12px;
  }
`;
