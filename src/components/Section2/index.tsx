import React from 'react';

import OurGoalImg from '../../assets/images/banner_8.jpg';
import OurGoalImgMob from '../../assets/images/banner_8_mob.jpg';

import { StyledSection, StyledPicture, StyledArticle } from './styles';

interface SectionProps {
  id: string;
}

const Section2: React.FC<SectionProps> = ({ id }) => (
  <StyledSection id={id}>
    <StyledPicture>
      <source
        media="(max-width: 767px)"
        srcSet={OurGoalImgMob}
        type="image/jpeg"
      />
      <source
        media="(min-width: 768px)"
        srcSet={OurGoalImg}
        type="image/jpeg"
      />
      <img src={OurGoalImg} alt="O Nosso Objetivo" />
    </StyledPicture>

    <StyledArticle>
      <h1>O Nosso Objetivo</h1>
      <p>
        <strong>Levar as marcas até o próxima nível.</strong>
      </p>
      <p>
        Não importa se está a começar o seu negócio ou se já tem uma plataforma
        online
      </p>
      <p>
        A nossa equipa especializada vai gerir o seu online.
        <strong>24 horas por dia</strong>
      </p>
      <p>
        <strong>Venha conhecer-nos.</strong>
      </p>
    </StyledArticle>
  </StyledSection>
);

export default Section2;
