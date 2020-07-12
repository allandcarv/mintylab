import React, { useState } from 'react';
import SwiperCore, { Navigation, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { MdArrowBack, MdArrowForward } from 'react-icons/md';

import { StyledSection, Container } from './styles';

import 'swiper/swiper-bundle.min.css';
import aboutUs from '../../assets/images/about-us_01_mob.jpg';

SwiperCore.use([Navigation, Autoplay]);

interface SectionProps {
  id: string;
}

interface ClientProps {
  name: string;
  role: string;
  comment: string;
}

interface CurrentClientProps {
  name: string | null;
  role: string | null;
}

const Section6: React.FC<SectionProps> = ({ id }) => {
  const clientReviews: ClientProps[] = [
    {
      name: 'Paulo Campos',
      role: 'Diretor Geral Patachou',
      comment:
        'É um prazer trabalhar com a Minty, equipa jovem e disciplinar que só conhece o caminho do sucesso.',
    },
    {
      name: 'Adriana Oliveira',
      role: 'CEO KAOÂ',
      comment: 'Equipa incrível com resultados surpreendentes.',
    },
    {
      name: 'Vitor Costa',
      role: 'Creative Director NOBRAND',
      comment:
        'A MINTY Lab facilita todo o Business to Business de uma forma refrescante, criative e eficiente.',
    },
    {
      name: 'Pedro Santana',
      role: 'Director de Marketing e Comunicação Ambitious',
      comment:
        'Uma Equipa Muito Competente em várias áreas e uma extensão da equipa Ambitious. São um parceiro essencial para alcançarmos os nossos objetivos.',
    },
    {
      name: 'Ivânia and Carina Santos',
      role: 'Representates da Rufel',
      comment:
        'A MINTY Lab foi fundamenta na expansão da marca para o mercado online internacional. Tornaram possível que os produtos RUFEL chegassem a todo o planeta com facilidade e sofisticação.',
    },
  ];

  const [currentClient, setCurrentClient] = useState<CurrentClientProps | null>(
    {
      name: clientReviews[0].name,
      role: clientReviews[0].role,
    },
  );

  const onSlideChange = (swiper: Swiper): void => {
    // @ts-ignore: Unreachable code error
    const { activeIndex } = swiper;

    if (activeIndex === undefined || activeIndex === null) return;

    setCurrentClient({
      name: clientReviews[activeIndex].name,
      role: clientReviews[activeIndex].role,
    });
  };

  return (
    <StyledSection id={id}>
      <h1>Sobre Nós</h1>
      <article>
        <section>
          <p>
            Começámos a nossa viagem como marketplace de moda -
            <a
              href="https://mintysquare.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              MINTYSQUARE.COM
            </a>
            &nbsp; - com o propósito de encurtar a distância entre clientes e
            designers, reunindo num único espaço as coleções de mais de 200
            marcas.
          </p>
          <p>
            Combinando a expertise e o know-how adquiridos com o marketplace,
            desenvolvemos um produto tecnológico capaz de oferecer todos os
            recursos necessários ao sucesso online de marcas que desejam
            lançar-se ou simplesmente crescer online.
          </p>
        </section>
        <img src={aboutUs} alt="Sobre Nós" title="Sobre Nós" />
      </article>
      <Container>
        <p>Review dos Clientes</p>
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          centeredSlides
          autoplay={{ delay: 5000 }}
          navigation={{
            nextEl: 'footer .swiper-button-next',
            prevEl: 'footer .swiper-button-prev',
          }}
          onSlideChange={swiper => onSlideChange(swiper)}
        >
          {clientReviews.map(client => (
            <SwiperSlide key={client.role}>
              <p>
                <strong>{`"${client.comment}`}</strong>
              </p>
            </SwiperSlide>
          ))}
        </Swiper>
        <footer>
          {currentClient && (
            <article>
              <p>{currentClient.name}</p>
              <p>{currentClient.role}</p>
            </article>
          )}

          <div className="actions">
            <button type="button" className="swiper-button-prev">
              <MdArrowBack size={90} color="#fff" />
            </button>
            <button type="button" className="swiper-button-next">
              <MdArrowForward size={90} color="#fff" />
            </button>
          </div>
        </footer>
      </Container>
    </StyledSection>
  );
};

export default Section6;
