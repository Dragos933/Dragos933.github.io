import React from 'react';

const DeliverySection = (props) => {

  const { yPosition } = props;

  const getTabletPosition = () => {
    if (yPosition <= 3100) {
      return 20;
    }
    if (yPosition >= 3700) {
      return 0;
    }
    return 20 - (yPosition - 3100) / 30;
  }

  const getIphonePosition = () => {
    if (yPosition <= 3500) {
      return 20;
    }
    if (yPosition >= 4100) {
      return 0;
    }
    return 20 - (yPosition - 3500) / 30;
  }

  const getLaptopPosition = () => {
    if (yPosition <= 3800) {
      return 20;
    }
    if (yPosition >= 4400) {
      return -5;
    }
    return 20 - (yPosition - 3800) / 24;
  }

  return (
    <div className='section delivery-section'>
      <h2 className='section-title'>4. Delivery</h2>
      <div className='content'>
        <div className='device-container'>
          <p className='text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <img style={{ transform: `translate(${getTabletPosition()}%, ${getTabletPosition()}%)`}} id='tablet' alt='Tablet' src='/images/tabletBig.png' />
        </div>
        <div className='device-container'>
          <img style={{ transform: `translate(-${getIphonePosition()}%, ${getIphonePosition()}%)`}} id='iphone' alt='Iphone' src='/images/iphone.png' />
        </div>
        <div className='device-container'>
          <p className='text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <img style={{ transform: `translate(${getLaptopPosition()}%, ${getLaptopPosition()}%)`}} id='laptop' alt='Iphone' src='/images/laptopMac.png' />
        </div>
      </div>
    </div>
  );
};

export default DeliverySection;
