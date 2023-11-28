import { Text } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <>
      <Text>{title}</Text>

      {children}
    </>
  );
};

export default Section;
