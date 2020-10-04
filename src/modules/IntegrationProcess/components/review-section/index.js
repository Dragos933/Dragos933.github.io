import React from 'react';
import { Link } from 'react-router-dom';

const ReviewSection = () => {
  return (
    <div className='section review-section'>
      <div className='filter'></div>
      <div className='content'>
        <h2 className='section-title'>3. We Value Your Opinion</h2>
        <p data-aos="zoom-in" data-aos-duration="500" data-aos-offset="200" className='info first-info'>
          There is always room for improvements.
        </p>
        <p data-aos="zoom-in" data-aos-duration="500" data-aos-offset="300" className='info'>That's where you come in!</p>
        <p data-aos="zoom-in" data-aos-duration="500" data-aos-offset="300" className='info'>
          If your time permits it, please tell us more about the experience you
          had with us and where we can do better.
        </p>
        <p data-aos="zoom-in" data-aos-duration="500" data-aos-offset="300" className='info'>We would really appreciate it.</p>
        <Link to='/' className='review-btn btn'>
          Review Us!
        </Link>
      </div>
    </div>
  );
};

export default ReviewSection;
