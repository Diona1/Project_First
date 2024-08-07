import React from 'react';


const Item = ({ icon1, title1, description1 }) => {
  return (
    <div className="item">
      <div className="icon">{icon1}</div>
      <h3>{title1}</h3>
      <p>{description1}</p>
    </div>
  );
};

export default Item;


