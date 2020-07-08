import React, { MouseEvent } from 'react';

import { StyledSection, StyledHgroup } from './style';

import VideoMp4 from '../../assets/videos/video01PT.mp4';
import VideoWebm from '../../assets/videos/video01PT.webm';

const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
  event.preventDefault();
  const { parentElement } = event.target as HTMLAnchorElement;
  const indexOfId = (parentElement as HTMLAnchorElement).href.indexOf('#');
  const targetId = (parentElement as HTMLAnchorElement).href.substr(
    indexOfId + 1,
  );
  const anchorTarget = document.getElementById(targetId);

  if (anchorTarget) {
    anchorTarget.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

interface SectionProps {
  id: string;
}

const Section1: React.FC<SectionProps> = ({ id }) => (
  <StyledSection id={id}>
    <StyledHgroup>
      <h1>Solução Digital Integrada</h1>
      <h2>para marcas de moda</h2>
      <h3>
        <span>/</span>
        <span>
          Descubra o que levou designers e marcas a elegerem-nos como seus
          parceiros digitais
        </span>
      </h3>
    </StyledHgroup>
    <a href="#contact" onClick={handleClick}>
      <video autoPlay muted playsInline loop>
        <source src={VideoWebm} type="video/webm" />
        <source src={VideoMp4} type="video/mp4" />
      </video>
    </a>
  </StyledSection>
);

export default Section1;
