import styled from 'styled-components';

export const StyledPicture = styled.picture`
  display: block;
  width: 60%;
`;

export const StyledArticle = styled.article`
  width: 40%;
  margin-top: 25%;
  text-transform: uppercase;

  h1 {
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 600;
    font-size: 65px;
    line-height: 70px;
    letter-spacing: 4px;
    color: #000;

    & ~ p {
      margin: 20px 0;
      font-family: 'Source Sans Pro', sans-serif;
      font-size: 18px;
      letter-spacing: 0.9px;

      strong {
        display: block;
      }
    }
  }
`;
