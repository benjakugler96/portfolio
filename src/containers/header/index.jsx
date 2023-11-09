import Heading from '../../components/heading';
import MediaIcons from '../../components/media-icons';
import { HeaderContainer } from './styled';

const Header = () => (
  <HeaderContainer>
    <Heading variant="h1">Benja Kugler</Heading>
    <Heading variant="h2">Software Engineer at Leniolabs LLC</Heading>
    <p>
      I build accessible, inclusive products and digital experiences for the
      web.
    </p>
    <MediaIcons />
  </HeaderContainer>
);

export default Header;
