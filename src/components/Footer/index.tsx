import React from 'react';

import { StyledFooter, FooterMenu } from './styles';

const Footer: React.FC = () => (
  <StyledFooter>
    <p>2019-2020 &copy; MintySquare. All Rights Reserved</p>
    <FooterMenu>
      <li>
        <a
          href="https://app.mintysquare.com/"
          target="_blank"
          rel="noopener noreferrer"
          title="Login B2B"
        >
          Login B2B
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/showcase/minty-lab-/"
          target="_blank"
          rel="noopener noreferrer"
          title="Linkedin"
        >
          Linkedin
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/minty_lab/"
          target="_blank"
          rel="noopener noreferrer"
          title="Instagram"
        >
          Instagram
        </a>
      </li>
      <li>
        <a
          href="https://www.facebook.com/lab.minty/"
          target="_blank"
          rel="noopener noreferrer"
          title="Facebook"
        >
          Facebook
        </a>
      </li>
    </FooterMenu>
  </StyledFooter>
);

export default Footer;
