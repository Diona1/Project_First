import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';
import { FooterData } from './Data'; 

const Footer = () => {
  return (
    <div className='footer'>
      {FooterData.map((props, index) => (
        <div className='col' key={index}>
          <h6>{props.category}</h6>
          <div className='links'>
          {props.links.map((l) => (
            <Link key={l.to} to={l.to}>{l.link}</Link>
          ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Footer;
