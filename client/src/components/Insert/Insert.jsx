import React, {useState, useMemo} from 'react';
import { useStore } from '../../globalState/Store.js';


const Insert = () => {

  const [state, dispatch] = useStore();
  const [insertion, insert] = useState('')

  const handleOnChange = (e) => {
    insert(e.target.value);
  }

  return useMemo( () => {
    console.log('Insertion interface re-render')
    return (
      state.toggle ?
        <span>
          <input type="text" onChange={handleOnChange} />
          <button type="button" onClick={() => {console.log(insertion); dispatch({ type: 'ADD_LIST_ITEM', payload: insertion })}}>
            Add Item
          </button>
        </span>
        : <></>
    );
  }, [state.toggle, insertion])
}

export default Insert;