import styled from 'styled-components';

export const StyledSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  padding-top: 70px;
  padding-bottom: 70px;
  background-color: #222;
  color: #fff;

  footer {
    align-self: flex-end;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    .pagination {
      span {
        font-family: 'Source Sans Pro', sans-serif;
        font-size: 38px;
        line-height: 79px;
        font-weight: 400;
        text-transform: uppercase;
        letter-spacing: 2px;

        & + span {
          font-size: 68px;
          line-height: 79px;
          letter-spacing: -15px;
        }
      }
    }

    article {
      a {
        display: block;
        margin-bottom: 0.5rem;
        font-family: 'Source Sans Pro', sans-serif;
        font-size: 24px;
        line-height: 31px;
        font-weight: 600;
        letter-spacing: 2.4px;
        text-transform: uppercase;
        color: #fff;
        text-align: left;
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }

      p {
        font-family: 'Source Sans Pro', sans-serif;
        font-size: 18px;
        line-height: 24px;
        font-weight: 400;
        letter-spacing: 1px;
        text-transform: uppercase;
        color: #fff;
        margin-right: 15px;
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
    }
  }
`;

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 58px;

  h1 {
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 65px;
    line-height: 70px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  nav {
    display: flex;
    align-items: center;

    span {
      font-family: 'Source Sans Pro', sans-serif;
      font-size: 14px;
      line-height: 24px;
      font-weight: 400;
      letter-spacing: 0.7px;
      color: #fff;
      text-transform: uppercase;
      margin-right: 20px;
    }

    ul {
      display: flex;
      align-items: center;
      list-style-type: none;

      li {
        & + li {
          margin-left: 20px;
        }

        button {
          background: transparent;
          border: 0;
          opacity: 0.5;
        }

        button.active {
          opacity: 1;
        }
      }
    }
  }
`;

export const Container = styled.div`
  width: 100vw;
  position: relative;
  left: calc(-50vw + 50%);

  .swiper-container {
    width: 100vw;

    .swiper-slide {
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
`;
