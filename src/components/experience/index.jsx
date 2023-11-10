import {
  Container,
  Date,
  Details,
  JobDescription,
  JobTitle,
  Technologies,
} from './styled';
import Section from '../section';
import experienceData from '../../data/experience.json';
import Pill from '../pill';

const Experience = () => (
  <Section title="Experience">
    {experienceData.map((exp) => (
      <Container key={exp.id}>
        <Date>
          {exp.startYear} - {exp.endYear || 'present'}
        </Date>
        <Details>
          <JobTitle>
            {exp.jobTitle} - {exp.company}
          </JobTitle>
          <JobDescription>{exp.description}</JobDescription>
          <Technologies>
            {exp.technologies.map((technology, index) => (
              <Pill key={index} label={technology} />
            ))}
          </Technologies>
        </Details>
      </Container>
    ))}
  </Section>
);

export default Experience;
