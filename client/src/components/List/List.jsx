import React, { useMemo } from 'react';
import { useStore } from '../../globalState/Store.js';
import Item from '../Item/Item.jsx';

const List = () => {

  const [state, dispatch] = useStore();

  return useMemo( () => {
    console.log('List re-render.')
      return (
        state.toggle ?
          <ul>
            {state.list.map( (item, i) => <Item key={i} item={item} index={i} />)}
          </ul>
        : <></>
      );
  }, [state.list.length, state.toggle])

}

export default List;