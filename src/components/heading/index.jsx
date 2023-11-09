import { Heading1, Heading2 } from './styled';

const components = {
  h1: Heading1,
  h2: Heading2,
};

const Heading = ({ variant = 'h1', children }) => {
  const Comp = components[variant];

  return <Comp>{children}</Comp>;
};

export default Heading;
