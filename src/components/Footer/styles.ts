import styled from 'styled-components';

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: #222;

  font-family: 'Source Sans Pro', sans-serif;
  color: #fff;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.7px;
  text-transform: uppercase;
`;

export const FooterMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;

  li {
    & + li {
      margin-left: 40px;
    }

    a {
      color: #fff;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
