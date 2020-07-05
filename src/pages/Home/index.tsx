import React from 'react';

import Header from '../../components/Header';
import Section1 from '../../components/Section1';
import Section2 from '../../components/Section2';
import Section3 from '../../components/Section3';
import Section4 from '../../components/Section4';
import Section5 from '../../components/Section5';
import Section6 from '../../components/Section6';
import Section7 from '../../components/Section7';
import Footer from '../../components/Footer';

import {
  StyledHeader,
  StyledSection1,
  StyledSection2,
  StyledSection3,
  StyledSection4,
  StyledSection5,
  StyledSection6,
  StyledSection7,
  StyledFooter,
} from './styles';

const Home: React.FC = () => (
  <>
    <StyledHeader>
      <Header toWhere="#banner" />
    </StyledHeader>

    <StyledSection1 id="banner">
      <Section1 />
    </StyledSection1>

    <StyledSection2 id="our-goal">
      <Section2 />
    </StyledSection2>

    <StyledSection3 id="portfolio">
      <Section3 />
    </StyledSection3>

    <StyledSection4 id="services">
      <Section4 />
    </StyledSection4>

    <StyledSection5 id="advantages">
      <Section5 />
    </StyledSection5>

    <StyledSection6 id="about-us">
      <Section6 />
    </StyledSection6>

    <StyledSection7 id="contact">
      <Section7 />
    </StyledSection7>

    <StyledFooter>
      <Footer />
    </StyledFooter>
  </>
);

export default Home;
