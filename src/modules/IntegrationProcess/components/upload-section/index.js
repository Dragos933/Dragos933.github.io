import React from 'react';

const UploadSection = (props) => {
  const { yPosition } = props;

  const rotateContainer = () => {
    if (yPosition < 500) {
      return 90;
    }
    if (yPosition >= 900) {
      return -90;
    }
    return 90 - ((yPosition - 500) / 20) * 9;
  };

  return (
    <div
      style={{ transform: `rotateX(${rotateContainer()}deg)` }}
      className='upload-section section'>
      <h2 className='section-title'>1. Upload</h2>
      <div className='content'>
        <div className='container'>
          <img
            className='upload-img'
            alt='Upload file'
            src='/images/upload.png'
          />
        </div>
        <div className='container middle-container'>
          <p className='info'>
            This is the first step in the integration process. All you have to
            do is to upload the blueprints of the project you want us to
            transform.
          </p>
        </div>
        <div className='container last-container'>
          <p className='files'>Accepted files: </p>
          <ul className='files-list'>
            <li>.docx</li>
            <li>.pdf</li>
            <li>.jpeg</li>
            <li>.xls</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UploadSection;
