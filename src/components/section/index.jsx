import { SectionContainer, Title, Content } from './styled';

const Section = ({ title, children }) => (
  <SectionContainer>
    <Title>{title}</Title>
    <Content>{children}</Content>
  </SectionContainer>
);

export default Section;
