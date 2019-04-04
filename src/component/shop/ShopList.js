import React from 'react';
import ShopItem from './ShopItem';
import imgJeans1 from '../../assets/jeans1.jpg';
import imgJeans2 from '../../assets/jeans2.jpg';
import imgJeans3 from '../../assets/jeans3.jpg';
import imgJeans4 from '../../assets/jeans4.jpg';
import '../general/w3.css';

const shopItems = [
  {
    id: 1,
    image: imgJeans1,
    title: 'Ripped Skinny Jeans',
    price: '$24.99'
  },
  {
    id: 2,
    image: imgJeans2,
    title: 'Mega Ripped Jeans',
    price: '$19.99'
  },
  {
    id: 3,
    image: imgJeans3,
    title: 'Washed Skinny Jeans',
    price: '$20.50'
  },
  {
    id: 4,
    image: imgJeans2,
    title: 'Mega Skinny Jeans',
    price: '$22.99'
  },
  {
    id: 5,
    image: imgJeans4,
    title: 'Vintage Skinny Jeans',
    price: '$22.99'
  },
  {
    id: 6,
    image: imgJeans3,
    title: 'Washed Vintage Jeans',
    price: '$18.50'
  },
  {
    id: 7,
    image: imgJeans1,
    title: 'Ripped Vintage Jeans',
    price: '$23.50'
  },
  {
    id: 8,
    image: imgJeans4,
    title: 'Mega Vintage Jeans',
    price: '$19.50'
  }
];

const ShopList = props => {
  return (
    <div>
      <div className="w3-container w3-text-grey" id="jeans">
        <p>{props.number} items</p>
      </div>
      <div className="w3-row w3-grayscale">
        {shopItems.map(item => (
          <ShopItem key={item.id} image={item.image} title={item.title} price={item.price} />
        ))}
      </div>
    </div>
  );
};

export default ShopList;
