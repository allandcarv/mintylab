import React from 'react';

import { StyledSection } from './styles';

interface SectionProps {
  id: string;
}

const Section6: React.FC<SectionProps> = ({ id }) => (
  <StyledSection id={id}>
    <h1>Section6</h1>
  </StyledSection>
);

export default Section6;
