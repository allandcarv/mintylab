import React, { MouseEvent } from 'react';

import { StyledHeader, HorizontalMenu } from './styles';

import HeaderLogo from '../HeaderLogo';

const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
  event.preventDefault();

  const target = event.target as HTMLAnchorElement;

  const indexOfId = (target as HTMLAnchorElement).href.indexOf('#');
  const targetId = (target as HTMLAnchorElement).href.substr(indexOfId + 1);
  const anchorTarget = document.getElementById(targetId);

  if (anchorTarget) {
    anchorTarget.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

const Header: React.FC = () => (
  <StyledHeader>
    <HeaderLogo toWhere="#banner" />
    <HorizontalMenu>
      <li>
        <a href="#our-goal" onClick={handleClick}>
          O nosso Objetivo
        </a>
      </li>
      <li>
        <a href="#portfolio" onClick={handleClick}>
          Portfólio
        </a>
      </li>
      <li>
        <a href="#services" onClick={handleClick}>
          Serviços
        </a>
      </li>
      <li>
        <a href="#advantages" onClick={handleClick}>
          Vantagens
        </a>
      </li>
      <li>
        <a href="#about-us" onClick={handleClick}>
          Sobre nós
        </a>
      </li>
      <li>
        <a href="#contact" onClick={handleClick}>
          Contacto
        </a>
      </li>
      <li>
        <a href="#section7" onClick={handleClick}>
          Junta-te a nós
        </a>
      </li>
    </HorizontalMenu>
  </StyledHeader>
);

export default Header;
