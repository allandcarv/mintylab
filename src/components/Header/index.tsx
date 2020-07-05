import React, { MouseEvent } from 'react';

import mintyLogo from '../../assets/images/logo_mintylab.svg';

import { ImgLogo, HorizontalMenu } from './styles';

const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
  event.preventDefault();

  let target: HTMLAnchorElement;

  if ((event.target as HTMLAnchorElement).href) {
    target = event.target as HTMLAnchorElement;
  } else {
    const { parentElement } = event.target as HTMLAnchorElement;
    target = parentElement as HTMLAnchorElement;
  }

  const indexOfId = (target as HTMLAnchorElement).href.indexOf('#');
  const targetId = (target as HTMLAnchorElement).href.substr(indexOfId + 1);
  const anchorTarget = document.getElementById(targetId);

  if (anchorTarget) {
    anchorTarget.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

interface Request {
  toWhere: string;
}
const Header: React.FC<Request> = ({ toWhere }: Request) => (
  <>
    <a href={toWhere} onClick={handleClick}>
      <ImgLogo src={mintyLogo} alt="MINTY Lab Logo" />
    </a>
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
  </>
);

export default Header;
