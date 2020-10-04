import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const LandingSection = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="landing-section">
      <Link className="back-link" to="/">
        <i className='fas fa-angle-left back-icon'></i>
      </Link>
      <h1 className='title'>How we do it</h1>
      <div className="scroll-informer">
        <i className="fas fa-hand-pointer"></i>
        <p>Scroll Down</p>
      </div>
    </div>
  );
}

export default LandingSection;