import React from 'react';
import LandingSection from './landing-section/index';
import UploadSection from './upload-section/index';
import SoftwareSection from './software-section/index';
import ReviewSection from './review-section/index';
import DeliverySection from './delivery-section/index';
import { useScrollPosition } from 'react-use-scroll-position';

const IntegrationProcess = () => {
  const { y: yPosition } = useScrollPosition();

  return (
    <div className='page-container int-process-container'>
      <LandingSection />
      <div className='scrollable-container'>
        {yPosition >= 500 && yPosition <= 900 ? (
          <UploadSection yPosition={yPosition} />
        ) : null}
        {yPosition >= 900 && yPosition <= 2300 ? (
          <SoftwareSection yPosition={yPosition} />
        ) : null}
      </div>
      <div className='scrollable-container'>
        <ReviewSection />
        <DeliverySection yPosition={yPosition} />
      </div>
    </div>
  );
};

export default IntegrationProcess;
