import React from 'react';
import Delete from '../Delete/Delete.jsx';

const Item = ({ item, index }) => (
  <li>
    <span>{item}</span>
    <Delete index={index} />
  </li>
);

export default Item;