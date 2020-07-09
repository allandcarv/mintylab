import styled from 'styled-components';

export const StyledSection = styled.section`
  padding: 70px 0;
  background-color: #dedede;

  h1 {
    margin: 0 auto;
    width: 66.66%;

    font-family: 'Source Sans Pro', sans-serif;
    font-size: 65px;
    line-height: 70px;
    font-weight: 600;
    text-transform: uppercase;
    color: #000;
    letter-spacing: 4px;
    margin-bottom: 30px;
  }
`;

export const StyledTable = styled.table`
  margin: 0 auto;
  width: 66.66%;

  tr {
    td {
      position: relative;
      padding: 20px;
      border-top: 1px solid #000;

      &:first-of-type {
        border-right: 1px solid #000;
      }

      img {
        width: 56px;
        height: auto;
        margin-right: 25px;
      }

      span {
        position: absolute;
        top: 0;
        bottom: 0;
        display: inline-flex;
        align-items: center;
        font-family: 'Source Sans Pro', sans-serif;
        font-weight: normal;
        font-size: 14px;
        color: #000;
        line-height: 140%;
        letter-spacing: 1px;
        text-transform: uppercase;
      }
    }

    &:last-of-type {
      td {
        border-bottom: 1px solid #000;
      }
    }
  }
`;
