import React from 'react';
import MenuItem from './MenuItem';

const SideNav = ({ items }) => (
  items.map(i => <MenuItem item={i} key={i} />)
);

export default SideNav;
