import React from 'react';
import W3TopBar from '../general/W3TopBar';
import W3NavItem from '../general/W3NavItem';

const menuItems = [
  {
    link: '/',
    description: 'Home'
  },
  {
    link: '/aboutus',
    description: 'About Us'
  },
  {
    link: '/shop',
    description: 'Shop'
  },
  {
    link: '/terms',
    description: 'Terms'
  }
];

const TopBar = () => {
  return (
    <W3TopBar>
      {menuItems.map((item, index) => (
        <W3NavItem key={index} link={item.link} description={item.description} />
      ))}
    </W3TopBar>
  );
};

export default TopBar;
