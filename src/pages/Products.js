import React from 'react';
import { FaLaptop, FaMobileAlt, FaHeadphones, FaTv, FaCamera, FaClock } from 'react-icons/fa';
import './Products.scss'; // Import the SCSS file for styling

const products = [
  {
    icon: <FaLaptop />,
    title: "Laptops",
    description: "High-performance laptops for work, gaming, and more."
  },
  {
    icon: <FaMobileAlt />,
    title: "Mobile Phones",
    description: "Latest smartphones with cutting-edge technology."
  },
  {
    icon: <FaHeadphones />,
    title: "Headphones",
    description: "Comfortable and high-quality headphones for all your audio needs."
  },
  {
    icon: <FaTv />,
    title: "Televisions",
    description: "Smart TVs with stunning picture quality and features."
  },
  {
    icon: <FaCamera />,
    title: "Cameras",
    description: "Professional cameras for photography enthusiasts and professionals."
  },
  {
    icon: <FaClock />,
    title: "Smart Watches",
    description: "Stylish smartwatches with advanced health and fitness tracking."
  },
];

const Products = () => {
  return (
    <div className='products'>
      <h1>Our Products</h1>
      <div className='product-list'>
        {products.map((product, index) => (
          <div key={index} className='product-item'>
            <div className='product-icon'>{product.icon}</div>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
