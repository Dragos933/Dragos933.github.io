import React from 'react';

const Item = (props) => {
  const {
    text,
    className,
    isActive,
    description = 'Description',
    furtherDescription = 'This is a really long text just beacause i want and I dont really want you to come to me just brcausecas and i cannot understand why just talking shit my friend you know what i mean or do you want me to repeat? i can',
    onClickItem
  } = props;

  return (
    <div
      className={`item-container ${className} ${
        isActive ? 'expand' : 'shrink'
      }`}>
      {!isActive ? (
        <i
          onClick={() => onClickItem({ text, description, type: 'open' })}
          className='fas fa-expand expand-icon'></i>
      ) : null}
      <div className='info-container'>
        <p className={`item-text ${isActive ? 'change-title' : ''}`}>{text}</p>
        {isActive ? (
          <>
            <p className='item-description show-description'>{description}</p>
            <p className='item-description show-description item-further-description'>
              {furtherDescription}
            </p>
          </>
        ) : null}
      </div>
      {isActive ? (
        <>
          <video className='item-video' controls>
            <source src='/images/APIO.mp4' type='video/mp4' />
          </video>
          <i
            onClick={() => onClickItem({ text, description, type: 'close' })}
            className='fas fa-times close-icon'></i>
        </>
      ) : null}
    </div>
  );
};

export default Item;
