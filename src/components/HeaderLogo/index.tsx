import React, { MouseEvent } from 'react';
import { Link } from 'react-router-dom';

import mintyLogo from '../../assets/images/logo_mintylab.svg';

import { ImgLogo } from './styles';

interface HeaderProps {
  toWhere: string;
}

const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
  const { parentElement } = event.target as HTMLAnchorElement;
  const indexOfId = (parentElement as HTMLAnchorElement).href.indexOf('#');

  if (indexOfId < 0) return;

  event.preventDefault();

  const targetId = (parentElement as HTMLAnchorElement).href.substr(
    indexOfId + 1,
  );
  const anchorTarget = document.getElementById(targetId);

  if (anchorTarget) {
    anchorTarget.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

const HeaderLogo: React.FC<HeaderProps> = ({ toWhere }) => (
  <Link to={toWhere} onClick={handleClick}>
    <ImgLogo src={mintyLogo} alt="MINTY Lab Logo" />
  </Link>
);

export default HeaderLogo;
