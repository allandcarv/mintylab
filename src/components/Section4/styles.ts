import styled from 'styled-components';

export const StyledSection = styled.section`
  padding-top: 70px;
  padding-bottom: 70px;
  background-color: #dedede;

  h1 {
    width: 100%;
    margin-bottom: 0.5rem;
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 65px;
    line-height: 70px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 4px;
    text-align: center;
  }
`;

export const StyledArticle = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & + article {
    margin-top: 80px;
  }
`;

export const StyledList = styled.ul`
  flex: 1;
  list-style: none;
  padding-left: 10%;

  li {
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    letter-spacing: 1px;
    text-transform: uppercase;
  }
`;
