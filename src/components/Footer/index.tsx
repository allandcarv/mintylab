import React from 'react';

import { FooterMenu } from './styles';

const Footer: React.FC = () => (
  <>
    <p>2019-2020 &copy; MintySquare. All Rights Reserved</p>
    <FooterMenu>
      <li>
        <a
          href="https://app.mintysquare.com/"
          target="_blank"
          rel="noreferrer"
          title="Login B2B"
        >
          Login B2B
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/showcase/minty-lab-/"
          target="_blank"
          rel="noreferrer"
          title="Linkedin"
        >
          Linkedin
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/minty_lab/"
          target="_blank"
          rel="noreferrer"
          title="Instagram"
        >
          Instagram
        </a>
      </li>
      <li>
        <a
          href="https://www.facebook.com/lab.minty/"
          target="_blank"
          rel="noreferrer"
          title="Facebook"
        >
          Facebook
        </a>
      </li>
    </FooterMenu>
  </>
);

export default Footer;
