import React, { useState, MouseEvent, useEffect } from 'react';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { RiComputerLine } from 'react-icons/ri';
import { AiOutlineMobile } from 'react-icons/ai';
import { MdArrowBack, MdArrowForward } from 'react-icons/md';

import 'swiper/swiper-bundle.min.css';
import { StyledSection, StyledHeader, Container } from './styles';

import portfolio01 from '../../assets/images/portfolio_01_minty.jpg';
import portfolio02 from '../../assets/images/portfolio_02_sneakers.jpg';
import portfolio03 from '../../assets/images/portfolio_03_kaoa.jpg';
import portfolio04 from '../../assets/images/portfolio_04_patachou.jpg';
import portfolio05 from '../../assets/images/portfolio_05_nobrand.jpg';
import portfolio06 from '../../assets/images/portfolio_06_ambitious.jpg';
import portfolio07 from '../../assets/images/portfolio_07_rufel.jpg';

import portfolio01Mob from '../../assets/images/portfolio_minty_mob.jpg';
import portfolio02Mob from '../../assets/images/portfolio_sneakers_mob.jpg';
import portfolio03Mob from '../../assets/images/portfolio_kaoa_mob.jpg';
import portfolio04Mob from '../../assets/images/portfolio_patachou_mob.jpg';
import portfolio05Mob from '../../assets/images/portfolio_nobrand_mob.jpg';
import portfolio06Mob from '../../assets/images/portfolio_ambitious_mob.jpg';
import portfolio07Mob from '../../assets/images/portfolio_rufel_mob.jpg';

SwiperCore.use([Navigation]);

interface SectionProps {
  id: string;
}

interface CurrentSlideProps {
  slide: number;
  url: string;
  title: string;
  body: string;
}

const Section3: React.FC<SectionProps> = ({ id }) => {
  const [showVersion, setShowVersion] = useState(0);
  const [currentSlide, setCurrentSlide] = useState<CurrentSlideProps | null>(
    null,
  );

  const versions = ['Versão Desktop', 'Versão Mobile'];

  const slidesTags = [
    {
      slide: 1,
      url: 'https://mintysquare.com/',
      title: 'MINTYSQUARE.COM',
      body: '/ WEB DESIGN / PROGRAMAÇÃO / PERFORMANCE MARKETING',
    },
    {
      slide: 2,
      url: 'https://sneakersdelight.store/',
      title: 'SNEAKERSDELIGHT.STORE',
      body: '/ WEB DESIGN / PROGRAMAÇÃO / PERFORMANCE MARKETING',
    },
    {
      slide: 3,
      url: 'https://kaoashop.com/',
      title: 'KAOASHOP.COM',
      body: '/ WEB DESIGN / PROGRAMAÇÃO / PERFORMANCE MARKETING',
    },
    {
      slide: 4,
      url: 'https://patachou.com/',
      title: 'PATACHOU.COM',
      body: '/ WEB DESIGN / PROGRAMAÇÃO / PERFORMANCE MARKETING',
    },
    {
      slide: 5,
      url: 'https://nobrand.pt/',
      title: 'NOBRAND.PT',
      body: '/ WEB DESIGN / PROGRAMAÇÃO / PERFORMANCE MARKETING',
    },
    {
      slide: 6,
      url: 'https://ambitious-shoes.com/',
      title: 'AMBITIOUS-SHOES.COM',
      body: '/ WEB DESIGN / PROGRAMAÇÃO / PERFORMANCE MARKETING',
    },
    {
      slide: 7,
      url: 'https://rufel.pt/',
      title: 'RUFEL.PT',
      body: '/ WEB DESIGN / PROGRAMAÇÃO',
    },
  ];

  const desktopImages = [
    { image: portfolio01, alt: 'Portfolio MINTY Square' },
    { image: portfolio02, alt: 'Portfolio Sneakers Delight' },
    { image: portfolio03, alt: 'Portfolio Kaoa' },
    { image: portfolio04, alt: 'Portfolio Patachou' },
    { image: portfolio05, alt: 'Portfolio NOBRAND' },
    { image: portfolio06, alt: 'Portfolio Ambitious' },
    { image: portfolio07, alt: 'Portfolio RUFEL' },
  ];

  const mobileImages = [
    { image: portfolio01Mob, alt: 'Portfolio MINTY Square' },
    { image: portfolio02Mob, alt: 'Portfolio Sneakers Delight' },
    { image: portfolio03Mob, alt: 'Portfolio Kaoa' },
    { image: portfolio04Mob, alt: 'Portfolio Patachou' },
    { image: portfolio05Mob, alt: 'Portfolio NOBRAND' },
    { image: portfolio06Mob, alt: 'Portfolio Ambitious' },
    { image: portfolio07Mob, alt: 'Portfolio RUFEL' },
  ];

  const handleButtonClick = (event: MouseEvent<HTMLButtonElement>) => {
    const { id: elementId } = event.target as HTMLButtonElement;

    setShowVersion(Number(elementId));
    setCurrentSlide({ ...slidesTags[0] });
  };

  const handleNextSlideClick = (): void => {
    if (!currentSlide) return;

    if (currentSlide.slide === slidesTags.length) return;

    const nextSlide =
      slidesTags.find(slideTag => slideTag.slide === currentSlide.slide + 1) ||
      null;

    setCurrentSlide(nextSlide);
  };

  const handlePrevSlideClick = (): void => {
    if (!currentSlide) return;

    if (currentSlide.slide === 1) return;

    const prevSlide =
      slidesTags.find(slideTag => slideTag.slide === currentSlide.slide - 1) ||
      null;

    setCurrentSlide(prevSlide);
  };

  useEffect(() => {
    setCurrentSlide({ ...slidesTags[0] });
  }, []);

  return (
    <StyledSection id={id}>
      <StyledHeader>
        <h1>Portfólio</h1>
        <nav>
          <span>{versions[showVersion]}</span>
          <ul>
            <li>
              <button
                id="0"
                type="button"
                className={showVersion === 0 ? 'active' : ''}
                onClick={handleButtonClick}
              >
                <RiComputerLine id="0" size={40} color="#fff" />
              </button>
            </li>
            <li>
              <button
                type="button"
                className={showVersion === 1 ? 'active' : ''}
                onClick={handleButtonClick}
              >
                <AiOutlineMobile id="1" size={40} color="#fff" />
              </button>
            </li>
          </ul>
        </nav>
      </StyledHeader>

      {showVersion === 0 && (
        <Container>
          <Swiper
            spaceBetween={10}
            slidesPerView={3}
            centeredSlides
            navigation={{
              nextEl: 'footer .swiper-button-next',
              prevEl: 'footer .swiper-button-prev',
            }}
          >
            {desktopImages.map(image => (
              <SwiperSlide key={image.alt}>
                <img src={image.image} alt={image.alt} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Container>
      )}

      {showVersion === 1 && (
        <Container>
          <Swiper
            spaceBetween={3}
            slidesPerView={8}
            centeredSlides
            navigation={{
              nextEl: 'footer .swiper-button-next',
              prevEl: 'footer .swiper-button-prev',
            }}
          >
            {mobileImages.map(image => (
              <SwiperSlide key={image.alt}>
                <img src={image.image} alt={image.alt} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Container>
      )}

      <footer>
        <div className="pagination">
          <span>{currentSlide?.slide.toString().padStart(2, '0')}</span>
          <span> /</span>
        </div>

        <article>
          <a href={currentSlide?.url} target="_blank" rel="noopener noreferrer">
            <strong>{currentSlide?.title}</strong>
          </a>
          <p>{currentSlide?.body}</p>
        </article>

        <div className="actions">
          <button
            type="button"
            className="swiper-button-prev"
            onClick={handlePrevSlideClick}
          >
            <MdArrowBack size={90} color="#fff" />
          </button>
          <button
            type="button"
            className="swiper-button-next"
            onClick={handleNextSlideClick}
          >
            <MdArrowForward size={90} color="#fff" />
          </button>
        </div>
      </footer>
    </StyledSection>
  );
};

export default Section3;
