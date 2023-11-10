import { getAge } from '../../utils/getAge';
import Section from '../section';
import { Paragraph } from './styled';

const About = () => (
  <Section title="About me">
    <Paragraph>
      Hello, I'm a {getAge('1996-05-17')}-year-old software engineer who
      specializes in blending creativity with technical expertise to design
      visually appealing and seamlessly functional web experiences. With a focus
      on front-end development, I create user interfaces that not only catch the
      eye but also operate smoothly. Outside of coding, you'll often find me
      going for a run, driven by a passion for staying active and exploring new
      places.
    </Paragraph>
    <Paragraph>
      A key aspect of my approach is a love for problem-solving. Whether it's
      troubleshooting a challenging bug in my code or navigating unfamiliar
      terrain in a new city, I thrive on finding effective solutions. Join me on
      this journey of coding and life, where I transform ideas into polished web
      applications, explore new horizons, and tackle challenges with a
      determined smile! 🚀
    </Paragraph>
  </Section>
);

export default About;
