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

const Home: React.FC = () => (
  <>
    <Header />

    <Section1 id="banner" />

    <Section2 id="our-goal" />

    <Section3 id="portfolio" />

    <Section4 id="services" />

    <Section5 id="advantages" />

    <Section6 id="about-us" />

    <Section7 id="contact" />

    <Footer />
  </>
);

export default Home;
