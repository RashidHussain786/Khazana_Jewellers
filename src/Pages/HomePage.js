import React, { useRef } from 'react';
import Nav from '../Components/Nav';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import CardSection from '../Sections/CardSection';
import CollectionSection from '../Sections/CollectionSection';
import TrendingSection from '../Sections/TrendingSection';
import YouthCollection from '../Sections/YouthCollection';
import ContactSection from '../Sections/ContactSection';

const HomePage = () => {
  // Define the number of items for pagination
  const numItems = 8;

  // Create a useRef instance for trending section
  const trendingRef = useRef(null);

  // Create a useRef instance for contact section
  const contactRef = useRef(null);

  return (
    <>
      <Nav trendingRef={trendingRef} contactRef={contactRef} />
      <Header />
      <TrendingSection ref={trendingRef} />
      <CardSection />
      <CollectionSection numItems={numItems} isHomePage={false} />
      <YouthCollection />
      <ContactSection ref={contactRef} />
      <Footer />
    </>
  );
};

export default HomePage;
