import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {

  return (
    <div className="footer-container">
      <div className="footer-info">
        <div className="detail">
          <p>Phone:</p>
          <p>Not available</p>
        </div>
        <div className="detail">
          <p>Email:</p>
          <p>contact@apiodigital.com</p>
        </div>
        <div className="detail">
          <p>Address:</p>
          <p>Bucuresti</p>
        </div>
      </div>
      <div className="footer-description">
        <Link to='/'>Terms &amp; conditions</Link>
        <p>&#169; Copyrights Apiodigital 2020</p>
        <Link to='/'>Privacy Policy</Link>
      </div>
    </div>
  );
}

export default Footer;