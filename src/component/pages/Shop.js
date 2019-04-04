import React from 'react';
import ShopHeader from '../shop/ShopHeader';
import ShopBanner from '../shop/ShopBanner';
import ShopList from '../shop/ShopList';
import imgJeans from '../../assets/jeans.jpg';
import '../general/w3.css';

const Shop = () => {
  return (
    <div className="w3-main">
      <ShopHeader title="React Shop" />
      <ShopBanner bannerImage={imgJeans} title="New arrivals" subtitle="COLLECTION 2016" />
      <ShopList number="8" />
    </div>
  );
};

export default Shop;
