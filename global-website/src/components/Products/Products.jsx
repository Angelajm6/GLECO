import React from 'react';
import '../../components/Products/Products.css';
import Regulators from '../../assets/Regulators.jpeg';
import Aireators from '../../assets/Aireators.jpeg';
import ProductsImg from '../../assets/Background.png';


const Products = () => {
  return (
    <div className='product-list'>
      <section>
        <h1>Our Products</h1>
        <img className='background' src= {ProductsImg} alt='Regulators in a water background' />
      </section>
      <div className='images'>
        <div className='product-1'>
          <img className='image-1' src= {Regulators} alt='Different types of regulators' />
          <p>Hello world! Today is a great day to start your new years resolution. We believe in you. </p>
        </div>
        <div className='product-2'>
          <img className='image-2' src={Aireators} alt='Different types of aireators' />
          <p>HELLO WORLD AGAIN :) I can buy myself flowers write my name in the saaaaand talk to myself for hours...</p>
        </div>
      </div>
    </div>
  );
};

export default Products;