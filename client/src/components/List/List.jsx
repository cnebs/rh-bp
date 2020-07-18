import React, {useContext} from 'react';
import { Context } from '../../globalState/Store.js';
import Item from '../Item/Item.jsx';

const List = () => {

  const [state, dispatch] = useContext(Context);

  return (
      state.toggle ?
        <ul>
          {state.list.map(item => <Item key={item} item={item} />)}
        </ul>
      : <></>
  )

}

export default List;