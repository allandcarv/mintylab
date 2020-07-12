import styled from 'styled-components';

export const StyledSection = styled.section`
  padding-top: 70px;
  padding-bottom: 70px;
  background-color: #222;
  color: #fff;

  h1 {
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 65px;
    line-height: 70px;
    font-weight: 600;
    text-transform: uppercase;
    color: #fff;
    letter-spacing: 4px;
  }

  article {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    section {
      font-family: 'Source Sans Pro', sans-serif;
      font-size: 36px;
      line-height: 44px;
      font-weight: 400;
      color: #fff;
      letter-spacing: 1px;
      z-index: 1;

      p {
        margin-bottom: 1rem;

        a {
          font-size: 36px;
          line-height: 44px;
          font-weight: 400;
          letter-spacing: 1px;
          z-index: 5;
          text-transform: uppercase;
          font-style: italic;
          font-weight: 600;
          text-decoration: none;
          color: #fff;

          &:hover {
            text-decoration: underline;
          }
        }
      }
    }

    img {
      position: relative;
      left: -115px;
    }
  }
`;

export const Container = styled.div`
  width: 66.66%;
  position: relative;
  margin: 80px auto 0;

  > p {
    margin-bottom: 20px;
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 23px;
    letter-spacing: 0.9px;
    color: #fff;
    text-transform: uppercase;
  }

  .swiper-container {
    width: 100%;

    .swiper-slide {
      strong {
        font-family: 'Source Sans Pro', sans-serif;
        font-size: 34px;
        line-height: 40px;
        font-weight: 600;
        font-style: italic;
        letter-spacing: 2px;
        text-transform: uppercase;
        color: #ffffff;
      }
      img {
        max-width: 100%;
        border-radius: 10px;
        padding: 8px;
        opacity: 0.5;
      }
    }

    .swiper-slide.swiper-slide-active img {
      opacity: 1;
      border: 1px solid #fff;
    }
  }

  footer {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin-top: 20px;

    article {
      display: block;

      p {
        font-family: 'Source Sans Pro', sans-serif;
        font-size: 18px;
        line-height: 23px;
        font-weight: 400;
        color: #fff;
        letter-spacing: 0.9px;
        text-transform: uppercase;
      }
    }

    .actions {
      display: flex;
      align-items: center;
      justify-content: flex-end;

      .swiper-button-next,
      .swiper-button-prev {
        width: auto;
        position: static;
        background-color: transparent;
        border: none;

        &::after {
          content: unset;
        }
      }

      svg {
        height: 60px;
        width: 60px;
      }
    }
  }
`;
