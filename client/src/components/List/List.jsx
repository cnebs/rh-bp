import React, {useContext, useEffect} from 'react';
import { Context } from '../../globalState/Store.js';
import Item from '../Item/Item.jsx';

const List = () => {

  const [state, dispatch] = useContext(Context);

  useEffect(
    () => console.log(`State Change!\n ${JSON.stringify(state, undefined, 2)}`)
    , [state.toggle, state.list.length]
  );

  return (
      state.toggle ?
        <ul>
          {state.list.map( (item, i) => <Item key={i} item={item} index={i} />)}
        </ul>
      : <></>
  )

}

export default List;