import React from 'react';
import { Data } from './Data'; 
import './User.scss';
import Item from './Item';

const User = () => {
  return (
    <div className='user'>
      <div className='top-row'>
        {Data.slice(0, 3).map((props, index) => (
          <Item
            key={index}
            icon1={props.icon}
            title1={props.title}
            description1={props.description}
          />
        ))}
      </div>
      <div className='bottom-row'>
        {Data.slice(3, 6).map((props, index) => (
          <Item
            key={index + 3}
            icon1={props.icon}
            title1={props.title}
            description1={props.description}
          />
        ))}
      </div>
    </div>
  );
};

export default User;
