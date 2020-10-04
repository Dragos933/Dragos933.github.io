import React, { useState } from 'react';
import Item from './item/index';

const SoftwareSection = (props) => {
  const [items, setItems] = useState([
    {
      text: 'Local',
      isActive: false,
      description:
        'This is the local solution. It is very important for many reasons and one is that it is local, the second one is that it is not that bad to see those people that are around you and want to bang.'
    },
    { text: 'Cloud', isActive: false },
    { text: 'TV Touchscreen', isActive: false },
    { text: 'Virtual Reality', isActive: false },
    { text: 'Labrador', isActive: false },
    { text: 'Husky', isActive: false },
    { text: 'Loredana Chivu', isActive: false },
    { text: 'Doamne ajuta', isActive: false },
    { text: 'Ultimul', isActive: false }
  ]);

  const { yPosition } = props;

  const rotateContainer = () => {
    if (yPosition < 900) {
      return 90;
    }
    if (yPosition >= 1100) {
      return 0;
    }
    return 90 - ((yPosition - 900) / 20) * 9;
  };

  const onClickItem = ({ text, description, type }) => {
    const itemIndex = items.findIndex((item) => item.text === text);
    if (type === 'open') {
      setItems([
        ...items.slice(0, itemIndex).map((item) => {
          return {
            ...item,
            isActive: false
          };
        }),
        { text, isActive: true, description },
        ...items.slice(itemIndex + 1).map((item) => {
          return {
            ...item,
            isActive: false
          };
        })
      ]);
    } else {
      setItems([
        ...items.slice(0, itemIndex),
        { text, isActive: false, description },
        ...items.slice(itemIndex + 1)
      ]);
    }
  };

  return (
    <div
      style={{ transform: `rotateX(${rotateContainer()}deg)` }}
      className='section software-section'>
      <h2 className='section-title'>2. Software Integration</h2>
      <p className='section-informer'>
        Click any item to expand it and see further details.
      </p>
      <div className='content'>
        {items.map((item, index) => {
          return (
            <Item
              onClickItem={onClickItem}
              {...item}
              key={index}
              className='item-with-margin'
            />
          );
        })}
      </div>
    </div>
  );
};

export default SoftwareSection;
