import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 13%;
  position: fixed;
  top: 0;
  height: 80px;
  background-color: #dedede;
  z-index: 2;
`;

export const HorizontalMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;

  li {
    & + li {
      margin-left: 40px;
    }

    a {
      font-family: 'Source Sans Pro', sans-serif;
      font-size: 12px;
      font-weight: 400;
      line-height: 18px;
      letter-spacing: 1px;
      text-decoration: none;
      text-transform: uppercase;
      color: #000;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
