import React, { MouseEvent } from 'react';

import mintyLogo from '../../assets/logo_mintylab.svg';

import { ImgLogo, HorizontalMenu } from './styles';

const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
  event.preventDefault();
  const indexOfId = (event.target as HTMLAnchorElement).href.indexOf('#');
  const targetId = (event.target as HTMLAnchorElement).href.substr(
    indexOfId + 1,
  );
  const anchorTarget = document.getElementById(targetId);

  if (anchorTarget) {
    anchorTarget.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

const Header: React.FC = () => (
  <>
    <ImgLogo src={mintyLogo} alt="MINTY Lab Logo" />
    <HorizontalMenu>
      <li>
        <a href="#section1" onClick={handleClick}>
          O nosso Objetivo
        </a>
      </li>
      <li>
        <a href="#section2" onClick={handleClick}>
          Portfólio
        </a>
      </li>
      <li>
        <a href="#section3" onClick={handleClick}>
          Serviços
        </a>
      </li>
      <li>
        <a href="#section4" onClick={handleClick}>
          Vantagens
        </a>
      </li>
      <li>
        <a href="#section5" onClick={handleClick}>
          Sobre nós
        </a>
      </li>
      <li>
        <a href="#section6" onClick={handleClick}>
          Contacto
        </a>
      </li>
      <li>
        <a href="#section7" onClick={handleClick}>
          Junta-te a nós
        </a>
      </li>
    </HorizontalMenu>
  </>
);

export default Header;
