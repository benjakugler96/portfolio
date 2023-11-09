import { BsLinkedin, BsInstagram, BsGithub } from 'react-icons/bs';
import { MediaIconsContainer, IconContainer } from './styled';

const MediaIcons = () => (
  <MediaIconsContainer>
    <IconContainer href={import.meta.env.VITE_GITHUB_LINK} target="_blank">
      <BsGithub size={24} />
    </IconContainer>
    <IconContainer href={import.meta.env.VITE_INSTAGRAM_LINK} target="_blank">
      <BsInstagram size={24} />
    </IconContainer>
    <IconContainer href={import.meta.env.VITE_LINKEDIN_LINK} target="_blank">
      <BsLinkedin size={24} />
    </IconContainer>
  </MediaIconsContainer>
);

export default MediaIcons;
