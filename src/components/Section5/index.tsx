import React from 'react';

import { StyledSection } from './styles';

interface SectionProps {
  id: string;
}

const Section5: React.FC<SectionProps> = ({ id }) => (
  <StyledSection id={id}>
    <h1>Section5</h1>
  </StyledSection>
);

export default Section5;
