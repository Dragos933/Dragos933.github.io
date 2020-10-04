import React from 'react';

const ProductsSection = () => {
  return (
    <div className='section projects-section'>
      <div className='cloud-section section'>
        <img
          className='section-image'
          alt='Cloud Computing'
          src='/images/cloud-computing.png'
        />
        <p className='title'>Cloud</p>
        <div className='features-container'>
          <div
            data-aos='fade-right'
            data-aos-duration='1000'
            data-aos-offset='200'
            className='cloud-feature'>
            <p className='number'>1.</p>
            <p className='text'>Can be run on any device</p>
            <div className='devices'>
              <img alt='Desktop Device' src='/images/pc.png' />
              <img alt='Laptop Device' src='/images/laptop.png' />
              <img alt='Tablet Device' src='/images/tablet.png' />
              <img alt='Smartphone Device' src='/images/smartphone.png' />
            </div>
          </div>
          <div
            data-aos='fade-left'
            data-aos-duration='1000'
            data-aos-offset='200'
            className='cloud-feature'
            id='feature-earth'>
            <p className='number'>2.</p>
            <p className='text'>Can be run from anywhere in the world</p>
            <img
              id='navigation-image'
              alt='Planet Earth'
              src='/images/navigation.png'
            />
          </div>
          <div
            data-aos='fade-right'
            data-aos-duration='1000'
            data-aos-offset='200'
            className='cloud-feature'
            id='feature-wifi'>
            <p className='number'>3.</p>
            <p className='text'>All you need is a good internet connection</p>
            <img alt='Wi-fi Router' src='/images/wifi-router.png' />
          </div>
          <div
            data-aos='fade-left'
            data-aos-duration='1000'
            data-aos-offset='200'
            className='cloud-feature'
            id='feature-pay'>
            <p className='number'>4.</p>
            <p className='text'>Pay as you go</p>
            <img alt='Credit Card' src='/images/credit-card.png' />
          </div>
        </div>
      </div>
      <div className='local-section section'>
        <img
          className='section-image'
          alt='Cloud Computing'
          src='/images/local-area.png'
        />
        <p className='title'>Local</p>
        <div className='products'>
          <div
            data-aos='flip-down'
            data-aos-duration='500'
            data-aos-offset='300'
            className='product first-product'>
            <p className='title'>TV Touch</p>
            <div className='product-info'>
              <div className='product-text info'>
                <p>This is the legendary Touchscreen TV.</p>
                <p>Very nice very wow.</p>
                <p>All you need to know is how to bam bam.</p>
                <p>Buy now or cry later.</p>
              </div>
              <div className='product-image info'>
                <img id='tap' alt='Hand Tap' src='/images/tap.png' />
                <img alt='Touchscreen TV' src='/images/curved-tv.png'></img>
              </div>
            </div>
          </div>
          <div
            data-aos='flip-up'
            data-aos-duration='500'
            data-aos-offset='300'
            className='product'>
            <p className='title'>Virtual Reality</p>
            <div className='product-info'>
              <div className='product-text info'>
                <p>This is the legendary Touchscreen TV.</p>
                <p>Very nice very wow.</p>
                <p>All you need to know is how to bam bam.</p>
                <p>Buy now or cry later.</p>
              </div>
              <div className='product-image info'>
                <img alt='Touchscreen TV' src='/images/vr-glasses.png'></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsSection;
