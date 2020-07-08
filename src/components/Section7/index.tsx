import React from 'react';

import { StyledSection } from './styles';

interface SectionProps {
  id: string;
}

const Section7: React.FC<SectionProps> = ({ id }) => (
  <StyledSection id={id}>
    <h1>Section7</h1>
  </StyledSection>
);

export default Section7;
