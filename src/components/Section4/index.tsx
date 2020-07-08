import React from 'react';

import { StyledSection } from './styles';

interface SectionProps {
  id: string;
}

const Section4: React.FC<SectionProps> = ({ id }) => (
  <StyledSection id={id}>
    <h1>Section4</h1>
  </StyledSection>
);

export default Section4;
