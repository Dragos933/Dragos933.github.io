import React, { useState } from 'react';
import Footer from '../../../components/footer';
import * as api from '../../../api/support';
import { useScrollPosition } from 'react-use-scroll-position';
// import InstantScroll from '../../../components/instant-scroll';
import LandingSection from './landing-section/index';
import ContactSection from './contact-section/index';
import AboutUsSection from './aboutUs-section/index';
import ProductsSection from './products-section/index';
import ProcessSection from './process-section/index';

const LandingPage = () => {
  const [errors, setErrors] = useState([]);
  const { x: xPosition, y: yPosition } = useScrollPosition();

  const onClickSubmitContact = async (userDetails) => {
    try {
      await api.sendEmail(userDetails);
    } catch (error) {
      setErrors([...errors, error]);
    }
  };

  return (
    <div className='page-container landing-container'>
      <div className='landing-content' name='top'>
        {/* <InstantScroll /> */}
        <LandingSection yPosition={yPosition} />
        <AboutUsSection  yPosition={yPosition} />
        <ProductsSection />
        <ProcessSection />
        <ContactSection onClickSubmit={onClickSubmitContact} />
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
