import React from 'react';
import Item from '../Item/Item.jsx';

const List = ({ list }) => (
  <ul>
    {list.map((item) => (
      <Item key={item} item={item} />
    ))}
  </ul>
);

export default List;