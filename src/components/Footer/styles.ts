import styled from 'styled-components';

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
