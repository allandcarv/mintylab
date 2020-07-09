import React from 'react';

import { StyledSection, StyledTable } from './styles';

import icone01 from '../../assets/images/icone1.svg';
import icone02 from '../../assets/images/icone2.svg';
import icone03 from '../../assets/images/icone3.svg';
import icone04 from '../../assets/images/icone4.svg';
import icone05 from '../../assets/images/icone5.svg';
import icone07 from '../../assets/images/icone7.svg';
import icone09 from '../../assets/images/icone9.svg';
import icone10 from '../../assets/images/icone10.svg';

interface SectionProps {
  id: string;
}

const Section5: React.FC<SectionProps> = ({ id }) => (
  <StyledSection id={id}>
    <h1>Vantagens</h1>
    <StyledTable cellPadding="0" cellSpacing="0" width="100%">
      <tbody>
        <tr>
          <td>
            <img src={icone01} alt="Preço Competitivo" />
            <span>Preço competitivo</span>
          </td>
          <td>
            <img src={icone02} alt="Especialistas em Moda" />
            <span>Especialistas em Moda</span>
          </td>
        </tr>
        <tr>
          <td>
            <img src={icone03} alt="Rápida Implementação" />
            <span>Rápida Implementação</span>
          </td>
          <td>
            <img src={icone04} alt="Servidores e Manutenção Assegurados" />
            <span>Servidores e Manutenção Assegurados</span>
          </td>
        </tr>
        <tr>
          <td>
            <img src={icone05} alt="Apoio Permanente" />
            <span>Apoio Permanente</span>
          </td>
          <td>
            <img src={icone10} alt="Aumento de Vendas" />
            <span>Aumento de Vendas</span>
          </td>
        </tr>
        <tr>
          <td>
            <img src={icone07} alt="UX/UI Design" />
            <span>UX/UI Design</span>
          </td>
          <td>
            <img src={icone09} alt="Apoio ao Cliente" />
            <span>Apoio ao cliente</span>
          </td>
        </tr>
      </tbody>
    </StyledTable>
  </StyledSection>
);

export default Section5;
