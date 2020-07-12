import React, { useState, MouseEvent } from 'react';
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

interface SwiperProps extends Swiper {
  activeIndex?: number;
}

const Section3: React.FC<SectionProps> = ({ id }) => {
  const slidesTags = [
    {
      url: 'https://mintysquare.com/',
      title: 'MINTYSQUARE.COM',
      body: '/ WEB DESIGN / PROGRAMAÇÃO / PERFORMANCE MARKETING',
    },
    {
      url: 'https://sneakersdelight.store/',
      title: 'SNEAKERSDELIGHT.STORE',
      body: '/ WEB DESIGN / PROGRAMAÇÃO / PERFORMANCE MARKETING',
    },
    {
      url: 'https://kaoashop.com/',
      title: 'KAOASHOP.COM',
      body: '/ WEB DESIGN / PROGRAMAÇÃO / PERFORMANCE MARKETING',
    },
    {
      url: 'https://patachou.com/',
      title: 'PATACHOU.COM',
      body: '/ WEB DESIGN / PROGRAMAÇÃO / PERFORMANCE MARKETING',
    },
    {
      url: 'https://nobrand.pt/',
      title: 'NOBRAND.PT',
      body: '/ WEB DESIGN / PROGRAMAÇÃO / PERFORMANCE MARKETING',
    },
    {
      url: 'https://ambitious-shoes.com/',
      title: 'AMBITIOUS-SHOES.COM',
      body: '/ WEB DESIGN / PROGRAMAÇÃO / PERFORMANCE MARKETING',
    },
    {
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

  const [showVersion, setShowVersion] = useState(0);
  const [currentSlide, setCurrentSlide] = useState<CurrentSlideProps>({
    slide: 1,
    url: slidesTags[0].url,
    title: slidesTags[0].title,
    body: slidesTags[0].body,
  });

  const versions = ['Versão Desktop', 'Versão Mobile'];

  const handleButtonClick = (event: MouseEvent<HTMLButtonElement>) => {
    const { id: elementId } = event.target as HTMLButtonElement;

    setShowVersion(Number(elementId));
    setCurrentSlide({ slide: 1, ...slidesTags[0] });
  };

  const onSlideChange = (swiper: SwiperProps) => {
    const { activeIndex } = swiper;

    if (activeIndex === null || activeIndex === undefined) return;

    setCurrentSlide({
      slide: activeIndex + 1,
      url: slidesTags[activeIndex].url,
      title: slidesTags[activeIndex].title,
      body: slidesTags[activeIndex].body,
    });
  };

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
              nextEl: '#portfolio footer .swiper-button-next',
              prevEl: '#portfolio footer .swiper-button-prev',
            }}
            onSlideChange={(swiper: SwiperProps) => onSlideChange(swiper)}
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
            id="swiper1"
            spaceBetween={3}
            slidesPerView={8}
            centeredSlides
            navigation={{
              nextEl: '#portfolio footer .swiper-button-next',
              prevEl: '#portfolio footer .swiper-button-prev',
            }}
            onSlideChange={(swiper: SwiperProps) => onSlideChange(swiper)}
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
          <button type="button" className="swiper-button-prev">
            <MdArrowBack size={90} color="#fff" />
          </button>
          <button type="button" className="swiper-button-next">
            <MdArrowForward size={90} color="#fff" />
          </button>
        </div>
      </footer>
    </StyledSection>
  );
};

export default Section3;
