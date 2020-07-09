import React from 'react';

import { StyledSection, StyledArticle, StyledList } from './styles';

import ourServices01 from '../../assets/images/our-services_01.jpg';
import ourServices02 from '../../assets/images/our-services_02.jpg';
import ourServices03 from '../../assets/images/our-services_03.jpg';

interface SectionProps {
  id: string;
}

const Section4: React.FC<SectionProps> = ({ id }) => (
  <StyledSection id={id}>
    <h1>Serviços</h1>

    <StyledArticle>
      <img src={ourServices01} alt="Nossos Serviços" title="Nossos Serviços" />
      <StyledList>
        <li>/ Web Design & Programação</li>
        <li>/ Estratégia & Consultoria</li>
        <li>/ Implementação & Gestão de Servidores</li>
      </StyledList>
    </StyledArticle>

    <StyledArticle>
      <StyledList>
        <li>/ Gestão de Encomendas</li>
        <li>/ Apoio ao Cliente</li>
        <li>/ Logística</li>
      </StyledList>
      <img src={ourServices02} alt="Nossos Serviços" title="Nossos Serviços" />
    </StyledArticle>

    <StyledArticle>
      <img src={ourServices03} alt="Nossos Serviços" title="Nossos Serviços" />
      <StyledList>
        <li>/ Performance Marketing</li>
        <li>/ SEO</li>
      </StyledList>
    </StyledArticle>
  </StyledSection>
);

export default Section4;
