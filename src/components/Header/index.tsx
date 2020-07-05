import React from 'react';

import mintyLogo from '../../assets/logo_mintylab.svg';

import { ImgLogo, HorizontalMenu } from './styles';

const Header: React.FC = () => (
  <>
    <ImgLogo src={mintyLogo} alt="MINTY Lab Logo" />
    <HorizontalMenu>
      <li>
        <a href="teste">O nosso Objetivo</a>
      </li>
      <li>
        <a href="teste">Portfólio</a>
      </li>
      <li>
        <a href="teste">Serviços</a>
      </li>
      <li>
        <a href="teste">Vantagens</a>
      </li>
      <li>
        <a href="teste">Sobre nós</a>
      </li>
      <li>
        <a href="teste">Contacto</a>
      </li>
      <li>
        <a href="teste">Junta-te a nós</a>
      </li>
    </HorizontalMenu>
  </>
);

export default Header;
