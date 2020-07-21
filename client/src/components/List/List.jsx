import React, { useMemo } from 'react';
import { useStore } from '../../globalState/Store.js';
import Item from '../Item/Item.jsx';

const List = () => {

  const [ { toggle, list }, dispatch ] = useStore();

  return useMemo( () => {
    console.log('List re-render.')
      return (
        toggle &&
          <ul>
            {list.map( (item, i) => <Item key={i} item={item} index={i} />)}
          </ul>
      );
  }, [list.length, toggle])

}

export default List;