import styled from 'styled-components';

export const StyledSection = styled.section`
  display: flex;
  justify-content: flex-end;
  position: relative;
  background-color: #dedede;
`;

export const StyledHgroup = styled.hgroup`
  position: absolute;
  top: 25%;
  left: 13%;
  width: 55%;

  h1 {
    font-family: 'Source Sans Pro', sans-serif;
    text-transform: uppercase;
    font-size: 75px;
    line-height: 75px;
    letter-spacing: 5px;
    color: #fff;
  }

  h2 {
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 400;
    font-size: 75px;
    line-height: 75px;
    font-style: italic;
    letter-spacing: 4px;
    color: #fff;
  }

  h3 {
    width: 275px;
    margin-top: 50px;
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;
    letter-spacing: 1px;
    color: #000;
    text-transform: uppercase;

    span {
      display: block;
    }
  }
`;
